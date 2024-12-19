"use client";
import { createConversation } from "@/api/api";
import { getPersona } from "@/api/api/getPersona";
import AITrainerSection from "@/components/sections/AITrainerSection";
import ConfirmationModal from "@/components/widgets/ConfirmationModal";
import { useConversation } from "@/contexts/ConversationContext";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function page() {
  const [isOpen, setisOpen] = useState(false);
  const { handleStart, loading ,currentPersonaId , setCurrentPersonaId } = useConversation();
  const [personaDeatils , setPersonaDeatils] = useState([]);
  const [personaLoading , setPersonLoading ] = useState(false);
 

  const handleOpenmodal = (personaDeatils) => {
    setCurrentPersonaId(personaDeatils);
    setisOpen(true);
  };
  const handleClosemodal = () => {
    setisOpen(false);
  };

  useEffect(() => {
    const getPersonaDeatils = async () => {
      try {
        setPersonLoading(true);
        const response = await getPersona();
        if (!response?.data?.success) {
          setPersonLoading(false);
          throw new Error("Failed to end conversation");
        }
        setPersonaDeatils(response?.data?.payload);
        setPersonLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setPersonLoading(false);
        throw error;
      }
    };
     getPersonaDeatils();
  }, []);

  return (
    <div className="bg-page-gradient min-h-screen py-[60px]">
      <div className="max-w-[1780px] px-5 mx-auto">
        <h2 className="text-[28px] text-black font-bold leading-normal mb-[30px]">
          Select An AI Trainer
        </h2>
        <AITrainerSection
          handleOpenmodal={handleOpenmodal}
          handleStart={handleStart}
          personaDeatils={personaDeatils}
          loading={personaLoading}
        />
        <ConfirmationModal
          handleClose={handleClosemodal}
          isOpen={isOpen}
          handleStart={handleStart}
          loading={loading}
        />
      </div>
    </div>
  );
}
