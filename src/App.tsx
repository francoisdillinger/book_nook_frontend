import React from 'react'
import Navbar from "./components/Navbar";
import HomeSection from './components/HomeSection';
import HomeBadges from './components/HomeBadges';
import RecommendedSlider from './components/RecommendedSlider';
import HomeTestimonials from './components/HomeTestimonials';



export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <HomeSection />
      <RecommendedSlider />
      <HomeBadges /> */}
      <HomeTestimonials />
    </React.Fragment>
  )
}
