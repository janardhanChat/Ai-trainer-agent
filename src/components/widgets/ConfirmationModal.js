import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import CloseIcon from "@/assets/icons/CloseIcon";
import { useConversation } from "@/contexts/ConversationContext";
// const TrainerLogo = "/images/trainer-logo.svg";
const ModalLayer = './images/modal-layer.png';

export default function ConfirmationModal({
  handleClose,
  isOpen,
  handleStart,
  loading,
}) {
  const { currentPersonaId, userInformation } = useConversation();
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-20 bg-modalbg flex items-center justify-center text-white">
          <div className="w-[600px]">
            <div className="bg-gradient-to-t from-[#212234] via-[#24253C] to-[#6C7EFF] rounded-[20px] shadow-lg">
              <div>
                <img src={ModalLayer} alt='ModalLayer' className='block w-full rounded-t-[20px]' />
              </div>
              <div className="px-10 pb-8">
                <h2 className="text-xl font-bold text-center mb-6">
                  {currentPersonaId?.trainerTitle ?? "Assist Patients with Virtual Healthcare AI Tools"}
                </h2>
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-[#FFFFFF15] rounded-full px-6 py-3">
                    <p className="text-base text-white">
                      Do you want to start training with this Al trainer?
                    </p>
                  </div>
                </div>
                <p className="text-base font-normal text-center opacity-[.6] mb-6">
                  {currentPersonaId?.trainerDescription ?? "Help patients navigate their health journey effectively. Use AI to answer queries, schedule appointments, and manage follow-ups.Enhance care delivery while reducing workloads forhealthcare."}
                </p>
                {currentPersonaId?.code && (
                  <div className="flex justify-center mb-6">
                    <span className="text-sm px-6 py-2 rounded-full bg-[#ffffff10]">
                      {currentPersonaId?.code}
                    </span>
                  </div>
                )}
                <div>
                  <Button
                    text="Start Training"
                    className="w-full !text-base"
                    handleClick={() => handleStart(currentPersonaId, userInformation)}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button 
                onClick={handleClose}
                className="p-2 rounded-full"
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
