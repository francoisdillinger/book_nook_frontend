import React from 'react'
import Navbar from "./components/Navbar";
import HomeSection from './components/HomeSection';


export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeSection />
      <div className="h-56 bg-black">

      </div>
    </React.Fragment>
  )
}
