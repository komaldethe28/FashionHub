import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="FashionHub logo" />
                    <p>
                        loream100 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>DELIVERY</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>Get IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91-98 1111 1111</li>
                        <li>abc@gmail.com</li>
                    </ul>
                </div>

                <div className='col-span-full'>
                    <hr />
                    <p className='py-5 text-sm text-center'>© 2025 FashionHub — Developed by Komal</p>
                </div>
            </div>
        </div>
    )
}

export default Footer