"use client";
import { createConversation } from "@/api/api";
import AITrainerSection from "@/components/sections/AITrainerSection";
import ConfirmationModal from "@/components/widgets/ConfirmationModal";
import { useConversation } from "@/contexts/ConversationContext";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function page() {
  const [isOpen, setisOpen] = useState(false);
  const {  handleStart } = useConversation()

  const handleOpenmodal = () => {
    setisOpen(true);
  };
  const handleClosemodal = () => {
    setisOpen(false); 
  };

  // const handleStart = async () => {
  //   try {
  //     setLoading(true);
  //     const conversation = await createConversation();
  //     setConversation(conversation);
  //     redirect("health-check-screen")
  //   } catch (error) {
  //     toast.error(error.message || "Uh oh! Something went wrong.");
  //     redirect("health-check-screen")
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <div className="bg-page-gradient min-h-screen py-[60px]">
      <div className="max-w-[1780px] px-5 mx-auto">
        <h2 className="text-[28px] text-black font-bold leading-normal mb-[30px]">
          Select An AI Trainer
        </h2>
        <AITrainerSection
          handleOpenmodal={handleOpenmodal}
          handleStart={handleStart}
        />
        <ConfirmationModal
          handleClose={handleClosemodal}
          isOpen={isOpen}
          handleStart={handleStart}
        />
      </div>
    </div>
  );
}
