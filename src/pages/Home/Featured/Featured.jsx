import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured bg-fixed text-white pt-4 my-20'>
            <SectionTitle
            subHeading="Check It Out"
            heading="From Our Menu"
            ></SectionTitle>
            <div className='md:flex justify-center md:gap-10 items-center px-36 pb-20 pt-12 bg-slate-500/40'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2026</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint non provident nisi quisquam ullam quidem totam expedita necessitatibus similique qui laudantium alias hic beatae fugiat exercitationem, repellendus quibusdam omnis est delectus obcaecati! Ullam sint quaerat, ad eligendi vero eaque aliquam ab inventore in illum consectetur, fugiat officia. Corrupti, iure accusamus.</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;