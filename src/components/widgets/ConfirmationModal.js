import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import CloseIcon from "@/assets/icons/CloseIcon";
import { useConversation } from "@/contexts/ConversationContext";
// const TrainerLogo = "/images/trainer-logo.svg";
const Grid = "/images/grid.png";
export default function ConfirmationModal({
  handleClose,
  isOpen,
  handleStart,
  loading,
}) {
  const { currentPersonaId, userInformation } = useConversation();
  console.log("🚀 ~ currentPersonaId:", currentPersonaId, userInformation)
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-20 bg-modalbg flex items-center justify-center text-white">
          <div className="w-[600px]">
            <div className="bg-gradient-to-t from-[#212234] via-[#24253C] to-[#6C7EFF] rounded-[20px]">
              <div className="flex justify-center">
                <div className="relative w-[100%] h-[80px]">
                  <Image src={Grid} alt="Grid" width={600} height={100} />
                </div>
              </div>
              <div className="px-10 pb-10">
                <p className="text-lg font-semibold text-center mb-5 line-clamp-2">
                  {currentPersonaId?.trainerTitle ?? "Assist Patients with Virtual Healthcare AI Tools"}
                </p>
                <div className="flex items-center justify-center pb-[30px]">
                  <button className="bg-[#FFFFFF30] rounded-full shadow-md p-2 px-5 text-lg text-white font-medium">
                    Do you want to start training with this Al trainer?
                  </button>
                </div>
                <p className="text-lg text-center font-thin opacity-[.6] line-clamp-5 ">
                  {currentPersonaId?.trainerDescription ?? "Help patients navigate their health journey effectively. Use AI to answer queries, schedule appointments, and manage follow-ups.Enhance care delivery while reducing workloads forhealthcare."}
                </p>
                <div className="flex justify-center my-2 mt-4">
                  <button className="text-sm text-white laptop:px-5 laptop:py-1.5 font-normal transition-all ease-in-out hover:bg-transparent border border-solid  bg-whiteOpacitybg border-whiteOpacitybg rounded-full py-2 px-6">
                    {currentPersonaId?.code}
                  </button>
                </div>
                <div className="pt-4">
                  <Button
                    text="Start"
                    className="w-full"
                    handleClick={() => handleStart(currentPersonaId, userInformation)}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
            <div
              className="flex pt-5 items-center justify-center"
              onClick={() => handleClose()}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
