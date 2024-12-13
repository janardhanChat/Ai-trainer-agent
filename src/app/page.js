import Image from "next/image";
import styles from "./page.module.css";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import SignInwithGoogle from "@/components/widgets/SignInwithGoogle";
import LoginImageTextSection from "@/components/sections/LoginImageTextSection";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-0 items-center h-screen">
        <div className="h-screen">
          <LoginImageTextSection/>
        </div>
        <div className="max-w-[501px] mx-auto">
          <h1 className="text-[32px] text-black font-bold leading-[40px] mb-[14px]">
            Welcome to <span className="gradient-text">AI Trainer</span>  ✋
          </h1>
          <p className="text-xl text-black opacity-[0.6] font-medium mb-10">
            Enter the information you entered while registering.
          </p>
          <div>
            <div className="pb-6">
              <Input label='Email' placeholder='Enter your email' />
            </div>
            <div className="pb-[18px]">
              <Input label='Password' placeholder='Enter your password' />
            </div>
            <a className="block text-blue pb-10 text-right text-lg font-semibold cursor-pointer">
              Forgot password?
            </a>
            <div className="pb-10">
            <Button className='w-full' text="Login" />
            </div>
            <div className="grid grid-cols-[1fr_30px_1fr] gap-5 items-center pb-10">
              <div className="border-t border-solid border-borderColor"></div>
              <span className="text-lg text-gray900 font-semibold block">
              OR
              </span>
              <div className="border-t border-solid border-borderColor"></div>
            </div>
            <SignInwithGoogle/>
          </div>
        </div>
      </div>
    </>
  );
}