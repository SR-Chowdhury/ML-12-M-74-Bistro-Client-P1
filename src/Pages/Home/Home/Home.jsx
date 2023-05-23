import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';
import FeaturedSection from '../FeaturedSection/FeaturedSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <FeaturedSection/>
        </div>
    );
};

export default Home;