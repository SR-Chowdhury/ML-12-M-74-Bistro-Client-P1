import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularMenu/>
        </div>
    );
};

export default Home;