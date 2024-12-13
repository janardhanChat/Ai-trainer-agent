import VideoProfileInformation from '@/components/sections/VideoProfileInformation'
import VideoScreenBottomBar from '@/components/sections/VideoScreenBottomBar'
import EvaluationOfTrainingModal from '@/components/widgets/EvaluationOfTrainingModal'
import React from 'react'

export default function page() {
    return (
        <div className='bg-[url("/images/video-img.png")] h-screen w-full bg-center bg-no-repeat relative'>
        <div className='absolute top-[40px] left-[80px]'>
            <VideoProfileInformation/>
        </div>
        <div className='absolute bottom-[40px] left-0 w-full'>
        <VideoScreenBottomBar/>
        </div>
        <EvaluationOfTrainingModal/>
        </div>
    )
}
