import React from 'react'

export default function Button({text , className , handleClick}) {
  return (
      <button className={`py-3 px-[26px] text-white text-lg font-semibold rounded-lg border-none bg-custom-gradient ${className}`} onClick={handleClick}>
        {text}
      </button>
  )
}
