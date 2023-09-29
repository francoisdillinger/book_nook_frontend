import React from 'react'
import Navbar from "./components/Navbar";
import HomeSection from './components/HomeSection';
import HomeBadges from './components/HomeBadges';


export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeSection />
      <HomeBadges />
    </React.Fragment>
  )
}
