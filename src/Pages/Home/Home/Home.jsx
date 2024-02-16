import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Popularmenu from "../PopularMenu/Popularmenu";
import Callus from "./Callus";
import Category from "./Category/Category";
import ChefRecomend from "./Chefrecomend/ChefRecomend";
import ChefService from "./Chefservice/ChefService";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import Testimonial from "./Testimonials/Testimonial";


const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Bistro Bos | Home</title>
          </Helmet>
          <Banner></Banner> 
          <Category></Category>
          <ChefService></ChefService>
          <Popularmenu></Popularmenu>
          <Callus></Callus>
          <ChefRecomend></ChefRecomend>
          <FeaturedItem></FeaturedItem>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;