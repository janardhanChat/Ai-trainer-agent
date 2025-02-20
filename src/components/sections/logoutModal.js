import React from 'react'
import Button from '../common/Button';
const ModalLayer = './images/modal-layer.png';
const Logout = './images/logout.svg';

export default function LogoutModal() {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-modalBlur z-[999] flex items-center justify-center'>
            <div className='bg-modalBackground overflow-hidden border border-solid border-[#2D3250] rounded-3xl w-[400px] relative'>
                <div className='p-30 bg-modalsubBackground'>
                    <div className='absolute top-0 left-0'>
                        <img src={ModalLayer} alt='ModalLayer' className='block w-full' />
                    </div>
                    <div className='flex justify-center py-4'>
                        <img src={Logout} alt='Logout' />
                    </div>
                    <h2 className='mt-5 mb-2.5 text-2xl text-white font-medium text-center'>
                        Logout
                    </h2>
                    <p className='text-base text-white font-light text-center opacity-[.8] leading-7 max-w-[90%] mx-auto'>
                        Are You sure want to Logout?
                    </p>
                </div>
                <div className='p-30 grid grid-cols-2 gap-4'>
                    <button className='py-3 px-[26px] text-white text-lg font-semibold rounded-full border-solid border border-[#B640FF] bg-transparent'>
                        No
                    </button>
                    <Button text="Yes" className="py-3 w-full laptop:px-5 laptop:py-2 px-6 !text-base !font-normal font-inter" />

                </div>
            </div>
        </div>
    )
}
