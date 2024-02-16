import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg';
import './Featured.css';

const FeaturedItem = () => {
    return (
        <div className="featured-item bg-fixed mb-5">
            <div className="bg-slate-800 bg-opacity-50 text-white">
            <SectionTitle
                subHeading={'Check it Out'}
                heading={'from our menu'}
            ></SectionTitle>
            <div className="flex py-20 px-36 gap-4 items-center justify-center">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="text-white">
                    <p>Aug 20, 2019</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure tempora perspiciatis eum recusandae totam impedit esse! Deleniti ducimus quidem soluta doloremque commodi officia magnam repellendus, fuga sequi cumque dolores veniam quam magni enim ipsam! Pariatur, odit maxime laborum ducimus eligendi quasi repudiandae dolorem repellendus unde velit eum molestias ipsum.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FeaturedItem;