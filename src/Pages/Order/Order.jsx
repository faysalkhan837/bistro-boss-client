import Cover from "../Shared/Cover/Cover";
import orderImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import OrderTab from "./OrderTab/OrderTab";
import UseMenu from "../../Components/Hooks/UseMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drink"];
    const { categori } = useParams();
    const initialIndex = categories.indexOf(categori);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu()

    const drinks = menu.filter(items => items.category === "drinks");
    const dessert = menu.filter(items => items.category === "dessert");
    const pizza = menu.filter(items => items.category === "pizza");
    const salad = menu.filter(items => items.category === "salad");
    const soup = menu.filter(items => items.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Bistro Bos | Order Food</title>
            </Helmet>
            <Cover
                image={orderImg}
                title={"our shop"}
                hight={"600px"}
                para={"Would you like to try a dish?"}
            ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALSD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;