import React from "react";
import BlogSection from "../components/BlogSection";
import CategoriesSlider from "../components/CategoriesSlider";
import HomeBadges from "../components/HomeBadges";
import HomeBookTestimonials from "../components/HomeBookTestimonials";
import HomeSection from "../components/HomeSection";
import HomeStatsBadges from "../components/HomeStatsBadges";
import NewArrivals from "../components/NewArrivals";
import NewsLetter from "../components/NewsLetter";
import RecommendedSlider from "../components/RecommendedSlider";

export default function HomePage() {
	return (
		<React.Fragment>
			<HomeSection />
			<NewArrivals />
			<HomeBadges />
			<CategoriesSlider />
			<RecommendedSlider />
			<HomeBookTestimonials />
			<HomeStatsBadges />
			<BlogSection />
			<NewsLetter />
		</React.Fragment>
	);
}
