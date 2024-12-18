"use client";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import { healthcareAIprompts } from "@/app/select-ai-trainer/constants";
import { Loader } from "lucide-react";
const ProfileImage = "/images/profile.jpg";
export default function AITrainerSection({
  handleOpenmodal,
  personaDeatils,
  loading,
}) {
  return (
    <div className="border border-solid border-borderColor1 bg-white shadow-md rounded-[30px] p-9 min-h-[70vh]">
      <div className="grid grid-cols-3 gap-8">
        {personaDeatils?.length > 0 &&
          !loading &&
          personaDeatils?.map((items, index) => {
            return (
              <div
                className="p-7 border border-solid border-borderColor1 shadow-md rounded-xl"
                key={index}
              >
                <div className="grid grid-cols-[40px_1fr] gap-5 items-center pb-2.5">
                  <div className="w-full h-[40px] relative">
                    <Image
                      src={ProfileImage}
                      alt="ProfileImage"
                      className="rounded-full object-cover"
                      layout="fill"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-black200 line-clamp-2">
                    {items?.context}
                  </h3>
                </div>
                <p className="text-lg text-black opacity-[.6] font-medium mb-5 line-clamp-6 min-[200px]:">
                  {items?.system_prompt}
                </p>
                <Button
                  text="Digital Human"
                  handleClick={() => handleOpenmodal(items)}
                />
              </div>
            );
          })}
      </div>
      {loading && (
        <div className="flex items-center justify-center h-[70vh]">
          <Loader className="animate-spin" />
        </div>
      )}
    </div>
  );
}
