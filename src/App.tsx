// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // import AdminHomePage from "./pages/AdminHomePage";
// // import HomePage from "./pages/HomePage";
// // import SearchResultsPage from "./pages/SearchResultPage";
// // import BookPage from "./pages/BookPage";
// // import AddReviewPage from "./pages/AddReviewPage";
// // import EditReviewPage from "./pages/EditReviewPage";
// // import SignUpPage from "./pages/SignUpPage";
// // import LoginPage from "./pages/LoginPage";
// // import ProfilePage from "./pages/ProfilePage";
// // import UserOrdersPage from "./pages/UserOrdersPage";
// // import AdminOrdersPage from "./pages/AdminOrdersPage";
// // import AdminBooksPage from "./components/AdminBooksPage";
// // import EditBookPage from "./pages/EditBookPage";
// // import AddBookPage from "./pages/AddBookPage";
// // import AddAuthorPage from "./pages/AddAuthorPage";
// // import EditAuthorPage from "./pages/EditAuthorPage";
// // import Scratch from "./components/Scratch";

// export default function App() {
// 	return (
// 		<React.Fragment>
// 			<Navbar />
// 			{/* <HomePage /> */}
// 			{/* <SearchResultsPage /> */}
// 			{/* <BookPage /> */}
// 			{/* <AddReviewPage /> */}
// 			{/* <EditReviewPage /> */}
// 			{/* <SignUpPage /> */}
// 			{/* <LoginPage /> */}
// 			{/* <ProfilePage /> */}
// 			{/* <UserOrdersPage /> */}
// 			{/* <SideBarAdminMenu /> */}
// 			<AdminHomePage />

// 			<div className="  m-auto">
// 				{/* <AdminMenu /> */}
// 				{/* <AdminChart /> */}
// 			</div>
// 			{/* <AdminOrdersPage /> */}
// 			{/* <AdminBooksPage /> */}
// 			{/* <EditBookPage /> */}
// 			{/* <AddBookPage /> */}
// 			{/* <AddAuthorPage /> */}
// 			{/* <EditAuthorPage /> */}
// 			{/* <Scratch /> */}
// 			<Footer />
// 		</React.Fragment>
// 	);
// }

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
	<div>
		<Navbar />
		<main>
			<Outlet /> {/* This renders the matched route component */}
		</main>
		<Footer />
	</div>
);

export default App;
