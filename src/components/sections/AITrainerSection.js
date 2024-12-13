import Image from 'next/image';
import React from 'react'
import Button from '../common/Button';
const ProfileImage = '/images/profile.jpg';
export default function AITrainerSection() {
  return (
    <div className='border border-solid border-borderColor1 bg-white shadow-md rounded-[30px] p-9'>
      <div className='grid grid-cols-3 gap-8'>
       {
        [...Array(8)].map(()=> {
            return(
                <div className='p-7 border border-solid border-borderColor1 shadow-md rounded-xl'>
                <div className='grid grid-cols-[40px_1fr] gap-5 items-center pb-2.5'>
                    <div className='w-full h-[40px] relative'>
                        <Image src={ProfileImage} alt="ProfileImage" className='rounded-full object-cover' layout='fill'  />
                    </div>
                    <h3 className='text-lg font-semibold text-black200'>
                    Assist Patients with Virtual Healthcare AI Tools
                    </h3>
                </div>
                <p className='text-lg text-black opacity-[.6] font-medium mb-5'>
                    Help patients navigate their health journey effectively. Use AI to answer queries, schedule appointments, and manage follow-ups. 
                    Enhance care delivery while reducing workloads forhealthcare.
                </p>
                <Button text="Digital Human"/>
            </div>
            )
        })
       }
      </div>
    </div>
  )
}
