import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* Main Cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's offer" ></SectionTitle>
            {/* offered Menu Items */}
            <MenuCategory items={offered}  ></MenuCategory>
            {/* Desert Menu Items */}
            <MenuCategory items={dessert} title="dessert" img={dessertImg} ></MenuCategory>
            {/* Pizza Menu Items */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}  ></MenuCategory>
            {/* Salad Menu Items */}
            <MenuCategory items={salad} title="salad" img={saladImg}  ></MenuCategory>
            {/* Soup Menu Items */}
            <MenuCategory items={soup} title="soup" img={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;