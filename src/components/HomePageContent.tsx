import React from 'react'
import BlogSection from './BlogSection'
import CategoriesSlider from './CategoriesSlider'
import HomeBadges from './HomeBadges'
import HomeBookTestimonials from './HomeBookTestimonials'
import HomeSection from './HomeSection'
import HomeStatsBadges from './HomeStatsBadges'
import NewArrivals from './NewArrivals'
import NewsLetter from './NewsLetter'
import RecommendedSlider from './RecommendedSlider'

export default function HomePageContent(){
    return(
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
    )
}