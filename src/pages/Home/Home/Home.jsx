import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BB from '../BB/BB';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BB></BB>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;