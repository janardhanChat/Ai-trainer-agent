"use client";

import { API_BASE_URL } from "@/api/api/constantsKey";
import { useConversation } from "@/contexts/ConversationContext";
import { redirect, useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const ModalLayer = '/images/modal-layer.png';

export default function page() {
  const { conversation, setConversation, currentPersonaId } = useConversation();
  const [id, setId] = useState(conversation?.conversation_id || "");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const response = await axios.get(
    //   `${API_BASE_URL}/conversation/createReport/?conversation_id=${id}`
    // );
    // const url = "https://259s7s89-7003.inc1.devtunnels.ms/api/v1/conversation/createReport/?conversation_id=c7da3a15a198";
    const url = `${API_BASE_URL}/conversation/createReport/?conversation_id=${id}`;
    try {
      const response = await fetch(url);
      if (!response) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      // Create a temporary anchor element to trigger download
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = "conversation_report.csv"; // Set the file name
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Revoke the object URL to free up memory
      window.URL.revokeObjectURL(downloadUrl);
      setConversation && setConversation(null);
      setLoading(false);
      router.push("/select-personas");
    } catch (error) {
      setLoading(false);
      console.error("Error downloading the file:", error);
      toast.error("Error downloading the file");
    }

    // setReport(response.data);
    // setLoading(false);
  };
  useEffect(() => {
    if (!conversation) {
      router.push("/select-personas");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#191921]">
      <div className="w-[500px]">
        <div className="bg-gradient-to-t from-[#212234] via-[#24253C] to-[#6C7EFF] rounded-[20px] shadow-lg">
          <div>
            <img src={ModalLayer} alt='ModalLayer' className='block w-full rounded-t-[20px]' />
          </div>
          <div className="px-10 pb-8">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="10" />
                <path d="M30 50L45 65L70 35" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-center mb-6 text-white">Report Generator</h2>
            <div className="flex items-center justify-center mb-8">
              <div className="bg-[#FFFFFF15] rounded-full px-6 py-3">
                <p className="text-sm text-white">Generate your conversation report</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={id}
                disabled={true}
                className="w-full px-4 py-3 bg-[#FFFFFF15] text-white border-none rounded-xl focus:outline-none mb-4"
                placeholder="Enter ID"
              />
              <button
                type="submit"
                className="w-full disabled:opacity-50 py-3 px-6 text-white text-base font-medium rounded-xl bg-custom-gradient hover:bg-[#9933CC] transition-all"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader className="animate-spin h-4 w-4" />
                    <span>Generating...</span>
                  </div>
                ) : "Generate Report"}
              </button>
            </form>
          </div>
        </div>
        {/* {report && (
          <div className="mt-8 p-4 bg-custom-gradient rounded-md shadow-md">
            <p className="text-gray-800">{report}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
