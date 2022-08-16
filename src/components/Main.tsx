import React from 'react';
import homePage from '../assets/img/home.png';
import featured1 from "../assets/img/featured1.png";
import featured2 from "../assets/img/featured2.png";
import featured3 from "../assets/img/featured3.png";
import story from "../assets/img/story.png";
import product1 from "../assets/img/product1.png";
import product2 from "../assets/img/product2.png";
import product3 from "../assets/img/product3.png";
import product4 from "../assets/img/product4.png";
import product5 from '../../src/assets/img/product5.png';
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