import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../../../../assets/home/slide1.jpg';
import image2 from '../../../../assets/home/slide2.jpg';
import image3 from '../../../../assets/home/slide3.jpg';
import image4 from '../../../../assets/home/slide4.jpg';
import image5 from '../../../../assets/home/slide5.jpg';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-5"
            >
                <SwiperSlide>
                    <img src={image1} />
                    <h1 className='uppercase -mt-20 text-center text-white'>salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} />
                    <h1 className='uppercase -mt-20 text-center text-white'>piza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} />
                    <h1 className='uppercase -mt-20 text-center text-white'>supe</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} />
                    <h1 className='uppercase -mt-20 text-center text-white'>cake</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} />
                    <h1 className='uppercase -mt-12 text-center text-white'>salad</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;