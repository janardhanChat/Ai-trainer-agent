import Button from '../common/Button';
const ModalLayer = './images/modal-layer.png';

export default function EvaluationTrainingOfModal() {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-modalBlur z-[999] flex items-center justify-center'>
            <div className='bg-modalBackground overflow-hidden border border-solid border-[#2D3250] rounded-3xl w-[600px] relative'>
                <div className='bg-modalsubBackground p-50'>
                    <div className='absolute top-0 left-0'>
                        <img src={ModalLayer} alt='ModalLayer' className='block w-full' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='text-base mt-5 font-normal text-white p-3 px-6 rounded-full bg-whiteOpacitybg19'>
                            Evaluation of training
                        </button>
                    </div>
                    <p className='text-base text-white mt-10 font-light text-center opacity-[.8] leading-7 max-w-[90%] mx-auto'>
                        We will evaluate with the training progress recorded up until now. Are you sure you want to end the training?
                    </p>
                </div>
                <div className='px-50 pb-50'>

                    <Button text="Ok" className="py-3 w-full laptop:px-5 laptop:py-2 px-6 !text-base !font-normal font-inter" />
                </div>
            </div>
        </div>
    )
}
