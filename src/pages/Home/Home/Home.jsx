import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BB from '../BB/BB';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BB></BB>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;