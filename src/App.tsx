import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import HomeBadges from "./components/HomeBadges";
import RecommendedSlider from "./components/RecommendedSlider";
import HomeBookTestimonials from "./components/HomeBookTestimonials";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";
import CategoriesSlider from "./components/CategoriesSlider";
import HomeStatsBadges from "./components/HomeStatsBadges";
import NewsLetter from "./components/NewsLetter";
import BlogSection from "./components/BlogSection";
import HomePageContent from "./components/HomePageContent";
import SideBarAdminMenu from "./components/SideBarAdminMenu";
import AdminHome from "./components/AdminHome";
import Scratch from "./components/Scratch";
import UsersAdminChart from "./components/UsersAdminChart";

export default function App() {
	return (
		<React.Fragment>
			{/* <Navbar /> */}
			{/* <HomePageContent /> */}
			{/* <SideBarAdminMenu /> */}
			{/* <AdminHome /> */}
			<UsersAdminChart />
			{/* <Scratch /> */}
			{/* <Footer /> */}
		</React.Fragment>
	);
}
