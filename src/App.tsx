import React from 'react'
import Navbar from "./components/Navbar";
import HomeSection from './components/HomeSection';
import HomeBadges from './components/HomeBadges';
import RecommendedSlider from './components/RecommendedSlider';
import HomeBookTestimonials from './components/HomeBookTestimonials';
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';
import CategoriesSlider from './components/CategoriesSlider';



export default function App() {
  return (
    <React.Fragment>
      {/* <Navbar />
      <HomeSection />
      <NewArrivals />
      <HomeBadges /> */}
      <CategoriesSlider />
      {/* <RecommendedSlider />
      <HomeBookTestimonials />
      <Footer /> */}
    </React.Fragment>
  )
}
