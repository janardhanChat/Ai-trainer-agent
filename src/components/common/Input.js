import React from "react";

export default function Input({ label, placeholder , onChange ,  value , name}) {
  return (
    <div>
      <label className="text-lg text-black font-semibold block pb-[6px]">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full h-[50px] border border-solid placeholder:font-medium transition-all ease-in-out  focus:outline-blue outline-none font-medium border-borderColor rounded-lg px-5 text-base text-black placeholder:text-base placeholder:text-black placeholder:opacity-[.4]"
        type="text"
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
}
