import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className='mb-12'>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <button className='btn btn-outline border-0 border-b-4 shadow-2xl'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;