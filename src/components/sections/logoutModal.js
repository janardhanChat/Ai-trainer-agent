import React from 'react'
import Button from '../common/Button';
import { removeCookie } from '@/hooks/useCookie';
import { useRouter } from 'next/navigation';
const ModalLayer = './images/modal-layer.png';
const Logout = './images/logout.svg';

export default function LogoutModal({ setModalOpen }) {
  const router = useRouter();
  const handleLogout = () => {
    removeCookie("userInformation");
    removeCookie("userToken");
    router.push("/");
  }
  return (
    <div className='fixed inset-0 z-20 bg-modalbg flex items-center justify-center text-white'>
      <div className='w-[500px]'>
        <div className='bg-gradient-to-t from-[#212234] via-[#24253C] to-[#6C7EFF] rounded-[20px] shadow-lg'>
          <div>
            <img src={ModalLayer} alt='ModalLayer' className='block w-full rounded-t-[20px]' />
          </div>
          <div className='px-10 pb-8'>
            <div className='flex justify-center mb-4'>
              <img src={Logout} alt='Logout' className='w-16 h-16' />
            </div>
            <h2 className='text-xl font-bold text-center mb-6'>
              Logout
            </h2>
            <div className='flex items-center justify-center mb-8'>
              <div className='bg-[#FFFFFF15] rounded-full px-6 py-3'>
                <p className='text-sm text-white'>
                  Are you sure you want to logout?
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <button className='py-3 px-6 text-white text-base font-medium rounded-xl border border-[#B640FF] hover:bg-[#ffffff20] transition-all' onClick={() => setModalOpen(false)}>
                No
              </button>
              <Button text="Logout" className="w-full !text-base" handleClick={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
