import React from 'react'
import Hero from '../components/Hero'
import LatextCollection from '../components/LatextCollection'
import BestSeller from '../components/BestSeller'
import { OurPolicy } from '../components/OurPolicy'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatextCollection />
      <BestSeller />
      <OurPolicy />
    </div>
  )
}

export default Home