import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

import first from '@/public/assets/homeSlider/slide-1.webp'
import second from '@/public/assets/homeSlider/slide-2.webp'
import third from '@/public/assets/homeSlider/slide-3.webp'

function Index() {
    return (
        <div>
            <main>
                <Swiper
                    effect={'fade'}
                    navigation={{
                        nextEl: '.arrow-right',
                        prevEl: '.arrow-left',
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper3 !-z-10"
                >
                    <SwiperSlide>
                        {/*<Image src={first} alt="slide" />*/}
                        <div className="bg-first-image w-auto h-full bg-cover bg-no-repeat bg-center flex">
                            <div className="w-1/2 flex flex-col justify-center ml-[100px] mb-[100px]">
                                <h2 className="text-[73px] leading-[84px]">Stylish</h2>
                                <h2 className="text-[73px] leading-[84px]">Top Trending</h2>
                                <p className="leading-[24px] text-55black mt-[20px]">So soft, you don&apos;t want to take it
                                    off.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/*<Image src={second} alt="slide" />*/}
                        <div className="bg-second-image w-auto h-full bg-cover bg-no-repeat bg-center flex">
                            <div className="w-1/2 flex flex-col justify-center ml-[100px] mb-[100px]">
                                <h2 className="text-[73px] leading-[84px]">Hulton</h2>
                                <h2 className="text-[73px] leading-[84px]">Perfect Simple</h2>
                                <p className="leading-[24px] text-55black mt-[20px]">So soft, you don&apos;t want to take it
                                    off.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/*<Image src={third} alt="slide" />*/}
                        <div className="bg-third-image w-auto h-full bg-cover bg-no-repeat bg-center flex">
                            <div className="w-1/2 flex flex-col justify-center ml-[100px] mb-[100px]">
                                <h2 className="text-[73px] leading-[84px]">Online</h2>
                                <h2 className="text-[73px] leading-[84px]">Limited Edition</h2>
                                <p className="leading-[24px] text-55black mt-[20px]">So soft, you don&apos;t want to take it
                                    off.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button
                    className="arrow-left arrow absolute left-10 top-1/2 z-10 flex h-[60px] w-[60px] -translate-y-1/2 transform items-center justify-center rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500 hover:border-black hover:bg-black hover:text-white">
                    <div>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                </button>
                <button
                    className="arrow-right arrow absolute right-10 top-1/2 z-10 h-[60px] w-[60px] -translate-y-1/2 transform rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500 hover:border-black hover:bg-black hover:text-white">
                    <div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </button>
                <button
                    className="absolute top-[65%] left-[25%] z-10 rounded-[30px] border-[1px] border-[#ebebeb]
                    bg-black px-[66px] py-[14.5px] text-[12px] font-semibold uppercase text-white"
                >
                    Shop Now
                </button>
            </main>
            <section className="mt-[100px]">
                <div className="flex flex-col justify-center">
                    <h2 className="text-11black leading-[52px] text-[40px] text-center">
                        Featured Collections
                    </h2>
                    <p className="text-55black text-center mt-[5px]">
                        Upgrade your style with our curated sets. Choose confidence, embrace your unique look.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-[20px] mt-[40px]">
                    <div className=" row-span-2 p-20 bg-black text-white">1</div>
                    <div className=" p-20 bg-black text-white">2</div>
                    <div className=" row-span-2 p-20 bg-black text-white">3</div>
                    <div className="  p-20 bg-black text-white">4</div>

                </div>
            </section>

            <h1 className="pb-[1000px]">hi</h1>
        </div>
    )
}

export default Index
