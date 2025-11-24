import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>FationHub is a modern e-commerce platform built with the vision of delivering high-quality fashion products at affordable prices. We aim to bring the latest trends, premium quality, and a seamless shopping experience to every customer. From casual wear to premium collections, FationHub is designed to be your go-to destination for style, comfort, and convenience.</p>

          <p>We believe that fashion should be accessible to everyone—simple, enjoyable, and trustworthy. At FationHub, every product is carefully selected, checked, and delivered with love, ensuring a smooth and satisfying shopping journey.</p>

          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to simplify online shopping by offering a curated range of stylish, durable, and affordable fashion products.</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US:'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            At FationHub, quality is at the core of everything we do. Every product undergoes strict quality checks—from design and fabric to stitching and durability. We collaborate only with trusted manufacturers and suppliers to ensure our customers receive products they can rely on.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'> 
            Shopping at FationHub is designed to be fast, simple, and enjoyable.
            We offer:
            Easy navigation and clean UI and Secure payment options.From browsing products to completing your purchase, we ensure a smooth, hassle-free shopping experience.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer:</b>
          <p className='text-gray-600'>
            Our customers are at the heart of FationHub.
            We provide:Quick support for all queries and Fast resolution of issues. Whether it is a sizing question or order update, our team is always ready to help you get the best shopping experience.
          </p>
        </div>

      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About