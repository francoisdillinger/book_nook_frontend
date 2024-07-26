import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import SearchResultsPage from "./pages/SearchResultPage.tsx";
import AdminHomePage from "./pages/AdminHomePage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />, // App as the layout
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/search",
				element: <SearchResultsPage />,
			},
			{
				path: "/admin",
				element: <AdminHomePage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
