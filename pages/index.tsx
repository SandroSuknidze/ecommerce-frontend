import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

import first from '@/public/assets/first.webp'

function Index() {
    return (
        <div>
            <main>
                <div className="relative">
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
                            {/*<div className="bg-first-image w-full h-[867px] object-cover"></div>*/}
                            <Image src={first} alt="slide" className="h-[867px] w-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={first} className="h-[877px] w-full" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={first} className="h-[877px] w-full" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={first} className="h-[877px] w-full" alt="" />
                        </SwiperSlide>
                        <div>
                            <h2>test</h2>
                        </div>
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
                </div>
            </main>

            <h1 className="pb-[1000px]">hi</h1>
        </div>
    )
}

export default Index
