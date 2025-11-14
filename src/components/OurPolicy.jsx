import React from 'react'
import { assets } from '../assets/assets'
import { IterationCw } from './Icons/IterationCw'
import { Users } from './Icons/Users'
import { HeartHandshake } from './Icons/HeartHandshake'

export const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <HeartHandshake width={48} height={48} stroke="#000000" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>

      <div>
        <IterationCw width={48} height={48} stroke="#000000" />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      <div>
        <Users width={48} height={48} stroke="#000000" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}
