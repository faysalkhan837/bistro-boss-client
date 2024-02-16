import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBner from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import UseMenu from "../../../Components/Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import MenuItem from "../../Shared/MenuItem/MenuItem";
import MenuCetagori from "../MenuCetagori/MenuCetagori";


const Menu = () => {
    const [menu] = UseMenu()
    const offer = menu.filter(items => items.category === "offered");
    const dessert = menu.filter(items => items.category === "dessert");
    const pizza = menu.filter(items => items.category === "pizza");
    const salad = menu.filter(items => items.category === "salad");
    const soup = menu.filter(items => items.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Bistro Bos | Menu</title>
            </Helmet>
            <Cover
                hight={"600px"}
                title={"our menu"}
                para={"would you like to try a dish"}
                opacity={0.5}
                image={menuBner}
            ></Cover>
            <div className="">
                <SectionTitle
                    subHeading={"Don't miss"}
                    heading={"today,s offer"}
                ></SectionTitle>
                <MenuCetagori items={offer}></MenuCetagori>
                {/* <button className="btn btn-outline bg-slate-300 border-0 border-b-4 uppercase">Order your favourite food</button> */}
            </div>
            {/* Desert */}
            <MenuCetagori items={dessert} image={desertImg} title={"dessert"} hight={"400px"}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCetagori>
            <MenuCetagori items={pizza} image={pizzaImg} title={"pizza"} hight={"400px"}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCetagori>
            <MenuCetagori items={salad} image={saladImg} title={"salad"} hight={"400px"}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCetagori>
            <MenuCetagori items={soup} image={soupImg} title={"soup"} hight={"400px"}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCetagori>
                
        </div>
    );
};

export default Menu;