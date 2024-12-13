import AITrainerSection from '@/components/sections/AITrainerSection'
import ConfirmationModal from '@/components/widgets/ConfirmationModal'
import React from 'react'

export default function page() {
  return (
    <div className='bg-page-gradient min-h-screen py-[60px]'>
      <div className='max-w-[1780px] px-5 mx-auto'>
        <h2 className='text-[28px] text-black font-bold leading-normal mb-[30px]'>
        Select An AI Trainer
        </h2>
        <AITrainerSection/>
        <ConfirmationModal/>
      </div>
    </div>
  )
}
