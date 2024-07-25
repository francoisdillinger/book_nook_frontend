import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import HomeSection from "./components/HomeSection";
// import HomeBadges from "./components/HomeBadges";
// import RecommendedSlider from "./components/RecommendedSlider";
// import HomeBookTestimonials from "./components/HomeBookTestimonials";
// import NewArrivals from "./components/NewArrivals";
// import CategoriesSlider from "./components/CategoriesSlider";
// import HomeStatsBadges from "./components/HomeStatsBadges";
// import NewsLetter from "./components/NewsLetter";
// import BlogSection from "./components/BlogSection";
// import HomePageContent from "./pages/HomePage";
// import SideBarAdminMenu from "./components/SideBarAdminMenu";
// import AdminHome from "./pages/AdminHomePage";
// import Scratch from "./components/Scratch";
// import UsersAdminChart from "./components/ChartComponents/UserChart/UsersAdminChart";
// import AdminChart from "./components/ChartComponents/AdminChart";
// import AdminMenu from "./components/AdminMenu";
// import AdminOrders from "./pages/AdminOrdersPage";
// import AdminBooks from "./components/AdminBooks";
// import EditBook from "./pages/EditBookPage";
// import AddBook from "./pages/AddBookPage";
// import AddAuthor from "./pages/AddAuthorPage";
// import EditAuthor from "./pages/EditAuthorPage";
// import BookSearch from "./pages/SearchResultPage";
// import BookItem from "./pages/BookPage";
// import AddReview from "./pages/AddReviewPage";
// import EditReview from "./pages/EditReviewPage";
// import SignUpForm from "./pages/SignUpPage";
// import LoginForm from "./pages/LoginPage";
// import Profile from "./pages/ProfilePage";
// import UserOrders from "./pages/UserOrdersPage";
import AdminHomePage from "./pages/AdminHomePage";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultPage";
import BookPage from "./pages/BookPage";
import AddReviewPage from "./pages/AddReviewPage";
import EditReviewPage from "./pages/EditReviewPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import UserOrdersPage from "./pages/UserOrdersPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminBooksPage from "./components/AdminBooksPage";
import EditBookPage from "./pages/EditBookPage";
import AddBookPage from "./pages/AddBookPage";
import AddAuthorPage from "./pages/AddAuthorPage";
import EditAuthorPage from "./pages/EditAuthorPage";
import Scratch from "./components/Scratch";

export default function App() {
	return (
		<React.Fragment>
			<Navbar />
			{/* <HomePage /> */}
			{/* <SearchResultsPage /> */}
			{/* <BookPage /> */}
			{/* <AddReviewPage /> */}
			{/* <EditReviewPage /> */}
			{/* <SignUpPage /> */}
			{/* <LoginPage /> */}
			{/* <ProfilePage /> */}
			{/* <UserOrdersPage /> */}
			{/* <SideBarAdminMenu /> */}
			<AdminHomePage />

			<div className="  m-auto">
				{/* <AdminMenu /> */}
				{/* <AdminChart /> */}
			</div>
			{/* <AdminOrdersPage /> */}
			{/* <AdminBooksPage /> */}
			{/* <EditBookPage /> */}
			{/* <AddBookPage /> */}
			{/* <AddAuthorPage /> */}
			{/* <EditAuthorPage /> */}
			{/* <Scratch /> */}
			<Footer />
		</React.Fragment>
	);
}
