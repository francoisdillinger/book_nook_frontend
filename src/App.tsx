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
import UsersAdminChart from "./components/ChartComponents/UserChart/UsersAdminChart";
import AdminChart from "./components/ChartComponents/AdminChart";
import AdminMenu from "./components/AdminMenu";
import AdminOrders from "./components/AdminOrders";
import AdminBooks from "./components/AdminBooks";
import EditBook from "./components/EditBook";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";
import EditAuthor from "./components/EditAuthor";
import BookSearch from "./components/BookSearch";
import BookItem from "./components/BookItem";
import AddReview from "./components/AddReview";
import EditReview from "./components/EditReview";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import UserOrders from "./components/UserOrders";

export default function App() {
	return (
		<React.Fragment>
			<Navbar />
			{/* <HomePageContent /> */}
			{/* <BookSearch /> */}
			{/* <BookItem /> */}
			{/* <AddReview /> */}
			{/* <EditReview /> */}
			{/* <SignUpForm /> */}
			{/* <LoginForm /> */}
			{/* <Profile /> */}
			{/* <UserOrders /> */}
			{/* <SideBarAdminMenu /> */}
			{/* <AdminHome /> */}

			<div className="  m-auto">
				{/* <AdminMenu /> */}
				<AdminChart />
			</div>
			{/* <AdminOrders /> */}
			{/* <AdminBooks /> */}
			{/* <EditBook /> */}
			{/* <AddBook /> */}
			{/* <AddAuthor /> */}
			{/* <EditAuthor /> */}
			{/* <Scratch /> */}
			<Footer />
		</React.Fragment>
	);
}
