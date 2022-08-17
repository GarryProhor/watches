import React from 'react';
import HomeMain from "./Main/HomeMain/HomeMain";
import FeaturedMain from "./Main/FeaturedMain";
import StoryMain from "./Main/StoryMain";
import ProductsMain from "./Main/ProductsMain";
import TestimonialMain from "./Main/TestimonialMain";
import NewMain from "./Main/NewMain";
import NewLetterMain from "./Main/NewLetterMain";


const Main = () => {
    return (
        <>
            <main className="main">
                <HomeMain />

                <FeaturedMain />

                <StoryMain />

                <ProductsMain />

                <TestimonialMain />

                <NewMain />

                <NewLetterMain />
            </main>
        </>
    );
};

export default Main;