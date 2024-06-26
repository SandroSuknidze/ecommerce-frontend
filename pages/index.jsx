import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import first from "@/assets/first.webp";

function Index() {


    return (
        <div>
            <main>
                <div className="relative">
                    <Swiper
                        effect={'fade'}
                        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}

                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper3 !-z-10"
                    >
                        <SwiperSlide>
                            <Image src={first} alt="slide" className="w-full h-[867px] object-cover"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="w-full h-[877px]"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="w-full h-[877px]"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="w-full h-[877px]"/>
                        </SwiperSlide>
                        <div>
                            <h2>test</h2>
                        </div>
                    </Swiper>
                    <button className="arrow-left arrow absolute top-1/2 z-10 left-10 w-[60px] h-[60px] rounded-full bg-white border-[1px] border-[#ebebeb] transition duration-500 hover:text-white hover:bg-black hover:border-black">
                        <div>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </div>
                    </button>
                    <button className="arrow-right arrow absolute top-1/2 z-10 right-10 w-[60px] h-[60px] bg-white rounded-full border-[1px] border-[#ebebeb] transition duration-500 hover:text-white hover:bg-black hover:border-black">
                        <div>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </button>
                </div>
            </main>

            <h1 className="pb-[1000px]">hi</h1>
        </div>
    );
}

export default Index;
