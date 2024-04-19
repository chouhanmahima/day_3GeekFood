import React from 'react'
import './HomeScreen.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Grid from '../components/Grid'
import Footer from '../components/Footer'

const HomeScreen = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Grid/>
        <Footer/>
    </div>
  )
}

export default HomeScreen