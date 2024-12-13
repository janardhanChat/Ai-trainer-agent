import CloseIcon from '@/assets/icons/CloseIcon'
import React from 'react'
import Button from '../common/Button'

export default function EvaluationOfTrainingModal() {
  return (
    <div>
      <div className='fixed top-0 left-0 w-full h-full z-20 bg-modalbg flex items-center justify-center'>
            <div className='w-[600px]'>
                <div className='bg-white rounded-[20px] border border-solid border-borderColor1 p-10'>
                    <div className='flex items-center justify-center pb-[30px]'>
                        <button className='bg-white rounded-full border border-solid border-borderColor shadow-md p-2 px-5 text-lg text-black200 font-bold'>
                        Evaluation of training
                        </button>
                    </div>
                    <span className='block text-lg text-center text-black opacity-[.6] font-medium mb-10'>
                    We will evaluate with the training progress recorded up until now. Are you sure you want to end the training?
                    </span>
                        <Button text="Ok" className='w-full' />
                </div>
                <div className='flex pt-5 items-center justify-center'>
                    <CloseIcon />
                </div>
            </div>
        </div>
    </div>
  )
}
