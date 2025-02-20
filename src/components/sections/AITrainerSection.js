"use client";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import { healthcareAIprompts } from "@/app/select-ai-trainer/constants";
import { Loader } from "lucide-react";
import AiTrainterModal from "./aiTrainterModal";
import EvaluationTrainingModa from "./evaluationTrainingModal";
import EvaluationOfTrainingModal from "../widgets/EvaluationOfTrainingModal";
import EvaluationTrainingOfModal from "./evaluationTrainingModal";
import LogoutModal from "./logoutModal";
const ProfileImage = "/images/profile.jpg";
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
    </div> */}
      <div className="bg-[#191921] rounded-[40px] laptop:p-5 laptop:rounded-2xl p-10 max-h-[calc(100vh-190px)] overflow-auto">
        <div className="grid grid-cols-3 gap-[30px] laptop:gap-5">
          {
            [...Array(6)].map(() => {
              return (
                <div className="bg-card-gradient border border-solid border-[#2D3250] laptop:rounded-2xl laptop:p-5 p-30 rounded-3xl">
                  <h3 className="text-xl text-white font-semibold mb-3 laptop:text-lg">
                    Optimize Customer Support for Online Shoppers Seamlessly
                  </h3>
                  <p className="text-white leading-6 opacity-[0.6] text-base font-light mb-4 laptop:text-sm">
                    Help patients navigate their health journey effectively. Use AI to answer queries, schedule appointments, and manage follow-ups. Enhance care delivery while
                    reducing workloads forhealthcare.
                  </p>
                  <div className="flex items-center gap-2 flex-wrap pb-6">
                    <button className="text-sm text-white laptop:px-5 laptop:py-1.5 font-normal transition-all ease-in-out hover:bg-transparent border border-solid  bg-whiteOpacitybg border-whiteOpacitybg rounded-full py-2 px-6">
                      Unity3d
                    </button>
                    <button className="text-sm text-white laptop:px-5 laptop:py-1.5 font-normal transition-all ease-in-out hover:bg-transparent border border-solid  bg-whiteOpacitybg border-whiteOpacitybg rounded-full py-2 px-6">
                      Webgl
                    </button>
                    <button className="text-sm text-white laptop:px-5 laptop:py-1.5 font-normal transition-all ease-in-out hover:bg-transparent border border-solid  bg-whiteOpacitybg border-whiteOpacitybg rounded-full py-2 px-6">
                      game-development
                    </button>
                  </div>
                  <Button text="Digital Human" className="py-2 laptop:px-5 laptop:py-2 px-6 text-sm font-normal font-inter" />
                </div>
              )
            })
          }
        </div>
      </div>
      {/* <AiTrainterModal/> */}
      {/* <EvaluationTrainingOfModal/> */}
      {/* <LogoutModal/> */}
    </>
  );
}
