import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const BB = () => {
    return (
        <section className=' h-[500px] flex items-center bg-no-repeat bg-center' style={{ backgroundImage: `url(${img})`, backgroundSize: 'fill' }}>
            <div className='w-4/5 mx-auto bg-white text-black text-center p-20'>
                <h3 className='text-3xl uppercase mb-4'>Bistro Boss</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid officiis doloribus, dignissimos dicta molestias pariatur illum necessitatibus ratione assumenda perspiciatis reiciendis explicabo nobis quasi voluptatibus vel rerum fuga magnam.</p>
            </div>
        </section>
    );
};

export default BB;