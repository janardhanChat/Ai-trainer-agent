import React from 'react'
import Button from '../common/Button';
const ModalLayer = './images/modal-layer.png';
export default function AiTrainterModal() {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-modalBlur z-[999] flex items-center justify-center'>
            <div className='bg-modalBackground overflow-hidden border border-solid border-[#2D3250] rounded-3xl w-[600px] relative'>
                <div className='bg-modalsubBackground p-50'>
                    <div className='absolute top-0 left-0'>
                        <img src={ModalLayer} alt='ModalLayer' className='block w-full' />
                    </div>
                    <button className='text-base mt-5 font-normal text-white p-3 w-full rounded-full bg-whiteOpacitybg19'>
                        Do you want to start training with this Al trainer?
                    </button>
                    <h2 className='mt-5 mb-2.5 text-xl text-white font-medium text-center'>
                        Assist Patients with Virtual Healthcare AI Tools
                    </h2>
                    <p className='text-base text-white font-light text-center opacity-[.8] leading-7 max-w-[90%] mx-auto'>
                        Help patients navigate their health journey effectively. Use AI to answer queries, schedule appointments, and manage follow-ups. Enhance care delivery while
                        reducing workloads forhealthcare.
                    </p>
                </div>
                <div className='px-50 pb-50'>
                    <div className="flex items-center gap-2 flex-wrap justify-center pb-6">
                        <button className="text-sm text-white laptop:px-5 laptop:py-1.5 font-normal transition-all ease-in-out hover:bg-transparent border border-solid  bg-whiteOpacitybg border-whiteOpacitybg rounded-full py-2 px-6">
                            Unity3d
                        </button>
                        <button className="text-sm text-white laptop:px-5 laptop:py-1.5 font-normal transition-all ease-in-out hover:bg-transparent border border-solid  bg-whiteOpacitybg border-whiteOpacitybg rounded-full py-2 px-6">
                            Webgl
                        </button>
                        <button className="text-sm text-white laptop:px-5 laptop:py-1.5 font-normal transition-all ease-in-out hover:bg-transparent border border-solid  bg-whiteOpacitybg border-whiteOpacitybg rounded-full py-2 px-6">
                            game-development
                        </button>
                    </div>
                    <Button text="Start" className="py-3 w-full laptop:px-5 laptop:py-2 px-6 !text-base !font-normal font-inter" />
                </div>
            </div>
        </div>
    )
}
