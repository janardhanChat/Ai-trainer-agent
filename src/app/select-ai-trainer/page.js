"use client";
import { createConversation } from "@/api/api";
import { API_BASE_URL } from "@/api/api/constantsKey";
import { getPersona } from "@/api/api/getPersona";
import { DropdownMenuCheckboxes } from "@/components/common/dropdown";
import AITrainerSection from "@/components/sections/AITrainerSection";
import ConfirmationModal from "@/components/widgets/ConfirmationModal";
import { useConversation } from "@/contexts/ConversationContext";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function page() {
  const [isOpen, setisOpen] = useState(false);
  const { handleStart, loading, currentPersonaId, setCurrentPersonaId } =
    useConversation();
  const [personaDeatils, setPersonaDeatils] = useState([]);
  const [personaLoading, setPersonLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [options, setOptions] = useState([]);
  const [categoryloading, setCategoryLoading] = useState(true);

  const handleOpenmodal = (personaDeatils) => {
    setCurrentPersonaId(personaDeatils);
    setisOpen(true);
  };
  const handleClosemodal = () => {
    setisOpen(false);
  };

  const getPersonaDetails = async (personaCategoryID) => {
    try {
      setPersonLoading(true);
      const response = await getPersona(personaCategoryID);
      if (!response?.data?.success) {
        setPersonaDeatils([]);
        throw new Error("Failed to fetch persona details");
      }
      setPersonaDeatils(response?.data?.payload || []);
    } catch (error) {
      console.error("Error fetching persona details:", error);
      toast.error("Error fetching persona details.");
      setPersonaDeatils([]);
    } finally {
      setPersonLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/category/getCategory`);
      const categories = response?.data?.payload || [];
      const formattedOptions = categories.map((item) => ({
        label: item.category_name,
        value: item._id,
      }));

      setOptions(formattedOptions);

      if (formattedOptions.length > 0) {
        setSelectedItem(formattedOptions[0]);
        await getPersonaDetails(formattedOptions[0].value);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Error fetching categories.");
    } finally {
      setCategoryLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryChange = async (selectedOption) => {
    setSelectedItem(selectedOption);
    await getPersonaDetails(selectedOption.value);
  };

  return (
    <div className="bg-[#0F0F0F] min-h-screen py-[60px]">
      <div className="max-w-[1780px] px-5 mx-auto">
        <div className="flex gap-4 items-center justify-between pb-7">
          <h2 className="text-[28px] laptop:text-2xl text-white font-medium leading-normal">
            Select AI Agent
          </h2>
          {/* <div>
            <DropdownMenuCheckboxes
              selectedItem={selectedItem}
              setSelectedItem={handleCategoryChange}
              options={options}
              setOptions={setOptions}
              loading={categoryloading}
              setLoading={setCategoryLoading}
            />
          </div> */}
          <button className="border-solid border border-[#B73EFF] py-2 px-8 text-white text-base font-medium rounded-full cursor-pointer">
          Logout
          </button>
        </div>
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
