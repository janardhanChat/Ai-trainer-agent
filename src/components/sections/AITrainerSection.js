"use client";
// import Image from "next/image";
import React from "react";
import Button from "../common/Button";
// import { healthcareAIprompts } from "@/app/select-ai-trainer/constants";
import { Loader } from "lucide-react";
// import AiTrainterModal from "./aiTrainterModal";
// import EvaluationTrainingModa from "./evaluationTrainingModal";
// import EvaluationOfTrainingModal from "../widgets/EvaluationOfTrainingModal";
// import EvaluationTrainingOfModal from "./evaluationTrainingModal";
// import LogoutModal from "./logoutModal";
// const ProfileImage = "/images/profile.jpg";
export default function AITrainerSection({
  handleOpenmodal,
  personaDeatils,
  loading,
}) {
  return (
    <>
      {/* <div className="border border-solid border-borderColor1 bg-white shadow-md rounded-[30px] p-9 min-h-[80vh]">
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
                    {items?.trainerTitle}
                  </h3>
                </div>
                <p className="text-lg text-black opacity-[.6] font-medium mb-5 line-clamp-6 min-[200px]:">
                  {items?.trainerDescription}
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

      {!loading && personaDeatils?.length === 0 && (
        <div className="flex items-center justify-center h-[70vh]">
          <h3 className="text-lg font-semibold text-black200">No data found</h3>
        </div>
      )}
    </div>  */}

      <div className="bg-[#191921] rounded-lg p-8 h-[calc(100vh-118px)] overflow-auto">
        <div className="grid grid-cols-3 gap-8">
          {personaDeatils?.length > 0 &&
            !loading &&
            personaDeatils?.map((items, index) => (
              <div className="bg-card-gradient border border-solid border-[#2D3250] rounded-xl p-6 flex flex-col h-[320px]" key={index}>
                <div className="flex-1">
                  <h3 className="text-xl text-white font-semibold mb-3 min-h-[56px] line-clamp-2">
                    {items?.trainerTitle}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm min-h-[120px] line-clamp-5">
                    {items?.trainerDescription}
                  </p>
                </div>
                <div className="mt-auto">
                  {items?.code && (
                    <div className="mb-3">
                      <span className="inline-block text-xs text-white/90 px-3 py-1.5 bg-whiteOpacitybg rounded-xl">
                        {items?.code}
                      </span>
                    </div>
                  )}
                  <Button 
                    text="Digital Human" 
                    className="!px-6 !py-2.5 !text-sm font-medium float-right hover:opacity-90" 
                    handleClick={() => handleOpenmodal(items)} 
                  />
                </div>
              </div>
            ))}
        </div>

        {loading && (
          <div className="flex items-center justify-center h-[70vh]">
            <div className="text-white">Loading...</div>
          </div>
        )}

        {!loading && personaDeatils?.length === 0 && (
          <div className="flex items-center justify-center h-[70vh]">
            <h3 className="text-lg font-medium text-white/90">No data found</h3>
          </div>
        )}
      </div>
      {/* <AiTrainterModal/> */}
      {/* <EvaluationTrainingOfModal/> */}
      {/* <LogoutModal/> */}
    </>
  );
}
