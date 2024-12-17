"use client";
import { createConversation, endConversation } from "@/api/api";
import { redirect } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast"; // Replace this with your toast library if needed

const ConversationContext = createContext();

export const ConversationProvider = ({ children }) => {
  const [screen, setScreen] = useState("welcome"); // 'welcome' | 'hairCheck' | 'call'
  const [conversation, setConversation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (conversation) {
        endConversation(conversation.conversation_id);
      }
    };
  }, [conversation]);

  // Handlers
  const handleStart = async () => {
    try {
      setLoading(true);
      const newConversation = await createConversation();
      setConversation(newConversation);
      redirect("/health-check-screen");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Check the console for details.");
      redirect("/health-check-screen");
    } finally {
      setLoading(false);
      redirect("/health-check-screen");
    }
  };

  const handleEnd = async () => {
    try {
      if (!conversation) return;
      await endConversation(conversation.conversation_id);
    } catch (error) {
      console.error(error);
    } finally {
      setConversation(null);
      redirect("/select-ai-trainer");
    }
  };

  const handleJoin = () => {
    setScreen("call");
  };

  return (
    <ConversationContext.Provider
      value={{
        screen,
        setScreen,
        conversation,
        loading,
        handleStart,
        handleEnd,
        handleJoin,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

// Custom Hook to use the ConversationContext
export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error(
      "useConversation must be used within a ConversationProvider"
    );
  }
  return context;
};
