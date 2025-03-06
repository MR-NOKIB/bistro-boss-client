import { Link } from 'react-router-dom';
import CategoryBanner from '../../shared/CategoryBanner/CategoryBanner';
import Cover from '../../shared/Cover/Cover';
import MenuItem from '../../shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <CategoryBanner img={img} title={title}></CategoryBanner>}
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    items.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center flex items-center justify-center mt-8'>
                <Link className='' to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 bg-slate-100 hover:bg-black text-yellow-600 shadow-2xl'>Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;