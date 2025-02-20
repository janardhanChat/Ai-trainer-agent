import React from "react";

export default function Input({ label, placeholder, onChange, value, name, icon }) {
  return (
    <div>
      <label className="text-lg text-black font-medium block pb-[6px]">
        {label}
      </label>
      <div className="relative">
        <input
          placeholder={placeholder}
          className="w-full h-[50px] border border-solid placeholder:font-normal transition-all ease-in-out  focus:outline-blue outline-none font-normal border-borderColor rounded-full px-5 text-base text-black placeholder:text-base placeholder:text-black placeholder:opacity-[.4]"
          type="text"
          onChange={onChange}
          value={value}
          name={name}
        />
        {
          icon && (
            <div className="absolute top-[50%] translate-y-[-50%] right-3 flex items-center cursor-pointer">
              {icon}
            </div>
          )
        }

      </div>
    </div>
  );
}
