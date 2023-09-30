import React from 'react'
import Navbar from "./components/Navbar";
import HomeSection from './components/HomeSection';
import HomeBadges from './components/HomeBadges';
import RecomendedSlider from './components/RecomendedSlider';



export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeSection />
      <RecomendedSlider />
      <HomeBadges />
    </React.Fragment>
  )
}
