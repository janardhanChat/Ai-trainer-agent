import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import CloseIcon from "@/assets/icons/CloseIcon";
const TrainerLogo = "/images/trainer-logo.svg";
export default function ConfirmationModal({ handleClose, isOpen , handleStart }) {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-20 bg-modalbg flex items-center justify-center">
          <div className="w-[600px]">
            <div className="bg-white rounded-[20px] border border-solid border-borderColor1 p-10">
              <div className="flex justify-center pb-[30px]">
                <div className="relative w-[80px] h-[80px]">
                  <Image src={TrainerLogo} alt="TrainerLogo" layout="fill" />
                </div>
              </div>
              <div className="flex items-center justify-center pb-[30px]">
                <button className="bg-white rounded-full border border-solid border-borderColor shadow-md p-2 px-5 text-lg text-black200 font-bold">
                  Do you want to start training with this Al trainer?
                </button>
              </div>
              <p className="text-lg text-black200 font-semibold text-center mb-5">
                Assist Patients with Virtual Healthcare AI Tools
              </p>
              <span className="block text-lg text-center text-black opacity-[.6] font-medium">
                Help patients navigate their health journey effectively. Use AI
                to answer queries, schedule appointments, and manage follow-ups.
                Enhance care delivery while reducing workloads forhealthcare.
              </span>
              <div className="pt-4">
                <Button text="Start" className="w-full" handleClick={handleStart} />
              </div>
            </div>
            <div
              className="flex pt-5 items-center justify-center"
              onClick={handleClose}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
