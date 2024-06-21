import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {useState} from "react";


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


function Product() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="max-w-[1290px] m-auto">
            <nav className="">
                <ol>
                    <li className="inline">Home / </li>
                    <li className="inline">Winter Coat / </li>
                    <li className="inline">Square Textured Striped</li>
                </ol>
            </nav>
            <div className=" justify-center m-auto flex mt-[20px]">
                <div className="w-1/2 max-h-[800px] flex flex-row px-[15px]">
                    <div className=" w-1/4 select-none">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper w-full"
                            direction="vertical"
                        >
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="w-3/4 select-none">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{swiper: thumbsSwiper}}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>


                </div>
                <div className="w-1/2 px-[15px]">
                    <div>
                        <div
                            className="rounded-[12px] inline-block mb-[5px] leading-3 bg-red-600 text-white px-[12px] py-[6px] text-[13px]">
                            -50%
                        </div>
                        <h1 className="mb-[15px] text-[30px]">
                            Square Textured Striped
                        </h1>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Product;



