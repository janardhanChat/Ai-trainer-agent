"use client";
import { useState } from "react";
// import Image from "next/image";
// import styles from "./page.module.css";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
// import SignInwithGoogle from "@/components/widgets/SignInwithGoogle";
import LoginImageTextSection from "@/components/sections/LoginImageTextSection";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/api/api/constantsKey";
import axios from "axios";
import { setCookie } from "@/hooks/useCookie";
import { useConversation } from "@/contexts/ConversationContext";
import EyeIcon from "@/assets/icons/eyeIcon";
import { Eye } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { getUserInfoFromCookiee } = useConversation();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormErrors({ ...formErrors, [name]: "" });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (data) => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email format.";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    return errors;
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const login = async () => {
        try {
          setIsSubmitting(true);
          const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            email: formData.email,
            password: formData.password,
          });
          return response;
        } catch (error) {
          console.error("Error logging in:", error);
          return error;
        }
      };

      login()
        .then((data) => {
          if (data?.data?.success) {
            let userToken = data?.data?.payload?.tokens;
            setCookie("userToken", userToken);
            setCookie("userInformation", JSON.stringify(data?.data?.payload?.user));
            localStorage.setItem("userInformation", JSON.stringify(data?.data?.payload?.user));
            getUserInfoFromCookiee();
            toast.success("Login successful!");
            setIsSubmitting(false);
            router.push("/select-personas");
          } else {
            setIsSubmitting(false);
            setFormErrors({ invaliSubError: data.response?.data?.message || "Login failed. Please try again." });
            toast.error(data.response?.data?.message || "Login failed. Please try again.");
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          toast.error(error.message || "Login failed. Please try again.");
          console.error("Error logging in:", error);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="grid grid-cols-2 gap-0 items-center min-h-screen">
        <div className="h-screen">
          <LoginImageTextSection />
        </div>
        <div className="max-w-[501px] mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-[32px] text-black font-bold leading-[40px] mb-7">
            Welcome to <span className="gradient-text animate-gradient">Persona AI</span>
            <span className="animate-wave inline-block">✋</span>
          </h1>

          <div className="space-y-6">
            <Input
              label="Email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              error={formErrors.email} // For displaying error in the Input component
              className="focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            )}

            <Input
              label="Password"
              placeholder="Enter your password"
              name="password"
              type={showPassword ? "text" : "password"}
              icon={showPassword ? <Eye /> : <EyeIcon />}
              iconHanlder={() => setShowPassword(!showPassword)}
              value={formData.password}
              onChange={handleOnChange}
              error={formErrors.password}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              className="focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm">{formErrors.password}</p>
            )}
          </div>

          <div className="mt-8">
            <Button
              className="w-full"
              text={isSubmitting ? "Logging in..." : "Login"}
              disabled={isSubmitting}
              type="submit"
              handleClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
