import React from 'react';

const CategoryBanner = ({ title, img }) => {
    return (
        <section className=' md:h-[450px] flex items-center bg-no-repeat bg-center mb-20 mt-10' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
            <div className='w-4/5 mx-auto text-white bg-black/50 text-center p-16'>
                <h3 className='text-3xl uppercase mb-4'>{title}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quis illum, qui eum consequatur non alias nobis autem, iure excepturi eveniet labore ducimus tempore. Incidunt tempore eligendi id quidem impedit.</p>
            </div>
        </section>
    );
};

export default CategoryBanner;