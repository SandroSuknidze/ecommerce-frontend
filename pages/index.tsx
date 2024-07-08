import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

import first from '@/public/assets/homeSlider/slide-1.webp'
import second from '@/public/assets/homeSlider/slide-2.webp'
import third from '@/public/assets/homeSlider/slide-3.webp'

import grid1 from '@/public/assets/homeFeatured/main-cate-1.webp'
import grid2 from '@/public/assets/homeFeatured/main-cate-2.webp'
import grid3 from '@/public/assets/homeFeatured/main-cate-3.webp'
import grid4 from '@/public/assets/homeFeatured/main-cate-4.webp'
import Link from 'next/link'
import CollectionCard from '@/components/CollectionCard'
import collection2 from '@/public/assets/collections/collection2.webp'
import Collection from '@/components/Collection'

export const collections = [
    { id: 1, title: "Square Textured Striped", imageSrc: collection2, price: 300, sale: 190 },
    { id: 2, title: "Square Textured Striped", imageSrc: collection2, price: 300, sale: 190 },
    { id: 3, title: "Square Textured Striped", imageSrc: collection2, price: 300, sale: 190 },
    { id: 4, title: "Square Textured Striped", imageSrc: collection2, price: 300, sale: 190 },
    { id: 5, title: "Square Textured Striped", imageSrc: collection2, price: 300, sale: 190 },
    { id: 6, title: "Square Textured Striped", imageSrc: collection2, price: 300, sale: 190 },
    { id: 7, title: "Square Textured Striped", imageSrc: collection2, price: 300, sale: 190 },
]


function Index() {
    return (
        <main>
            <section className="relative">
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
                    className="mySwiper3 !-z-10 lg:!z-0"
                >
                    <SwiperSlide>
                        {/*<Image src={first} alt="slide" />*/}
                        <div className="bg-first-image w-auto h-full bg-cover bg-no-repeat bg-center flex slide-move">
                            <div className="fixed inset-0 bg-black opacity-20 hidden sm:block"></div>
                            <div className="w-1/2 flex flex-col justify-center ml-[100px] mb-[100px]
                            md:ml-[10px] md:text-left md:w-full z-10">
                                <h2 className="text-[73px] leading-[84px] lg:text-[45px] lg:leading-[51px]
                                md:!text-[36px] md:!leading-[41px] xs:text-white">Stylish<br />Top Trending</h2>
                                <p className="leading-[24px] text-55black mt-[20px] lg:text-[16px]
                                 xs:text-white">So soft, you don&apos;t want to
                                    take it
                                    off.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/*<Image src={second} alt="slide" />*/}
                        <div className="bg-second-image w-auto h-full bg-cover bg-no-repeat bg-center flex slide-move">
                            <div className="fixed inset-0 bg-black opacity-20 hidden sm:block"></div>
                            <div className="w-1/2 flex flex-col justify-center ml-[100px] mb-[100px]
                            md:ml-[10px] md:text-left md:w-full z-10">
                                <h2 className="text-[73px] leading-[84px] lg:text-[45px] lg:leading-[51px]
                                md:!text-[36px] md:!leading-[41px] xs:text-white">Hulton<br />Perfect Simple</h2>
                                <p className="leading-[24px] text-55black mt-[20px] lg:text-[16px] xs:text-white">So
                                    soft, you don&apos;t want to
                                    take it
                                    off.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/*<Image src={third} alt="slide" />*/}
                        <div className="bg-third-image w-auto h-full bg-cover bg-no-repeat bg-center flex slide-move">
                            <div className="fixed inset-0 bg-black opacity-20 hidden sm:block"></div>
                            <div className="w-1/2 flex flex-col justify-center ml-[100px] mb-[100px]
                                        md:ml-[10px] md:text-left md:w-full z-10">
                                <h2 className="text-[73px] leading-[84px] lg:text-[45px] lg:leading-[51px]
                                md:!text-[36px] md:!leading-[41px] xs:text-white">Online<br />Limited Edition</h2>
                                <p className="leading-[24px] text-55black mt-[20px] lg:text-[16px] xs:text-white">So soft, you
                                    don&apos;t want to
                                    take it
                                    off.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button
                    className="arrow-left arrow absolute left-10 top-1/2 z-10 flex h-[60px] w-[60px] -translate-y-1/2
                    transform items-center justify-center rounded-full border-[1px] border-[#ebebeb] bg-white transition
                    duration-500 hover:border-black hover:bg-black hover:text-white xl:h-[40px] xl:w-[40px]
                    md:hidden">
                    <div>
                        <FontAwesomeIcon icon={faChevronLeft} className="text-[15px]"/>
                    </div>
                </button>
                <button
                    className="arrow-right arrow absolute right-10 top-1/2 z-10 h-[60px] w-[60px] -translate-y-1/2
                    transform rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500 hover:border-black
                    hover:bg-black hover:text-white xl:h-[40px] xl:w-[40px]
                    md:hidden">
                    <div>
                        <FontAwesomeIcon icon={faChevronRight} className="text-[15px]"/>
                    </div>
                </button>
                <Link href="/shop">
                    <button
                        className="absolute top-[65%] left-[25%] z-10 rounded-[30px] border-[1px] border-black
                            bg-black px-[66px] py-[14.5px] text-[12px] font-semibold uppercase text-white
                            lg:top-[60%] lg:px-[40px] lg:py-[11px] lg:left-[28%]
                            md:!left-[10px] md:!top-[57%]"
                    >
                        Shop Now
                    </button>
                </Link>
            </section>
            <section className="mt-[100px] max-w-[1470px] flex flex-col justify-center m-auto">
                <div className="flex flex-col justify-center md:px-[15px]">
                    <h2 className="text-11black leading-[52px] text-[40px] text-center md:text-[30px]">
                        Featured Collections
                    </h2>
                    <p className="text-55black text-center mt-[5px]">
                        Upgrade your style with our curated sets. Choose confidence, embrace your unique look.
                    </p>
                </div>
                <div
                    className="grid grid-cols-3 gap-[3%] max-w-[1470px] px-[30px] mt-[40px] md:grid-cols-2 md:grid-rows-3 md:px-[15px] ">
                    <div className="row-span-2 text-white rounded-xl overflow-hidden relative ">
                        <Link href="/">
                            <Image src={grid1} alt="Clothing"
                                   className="rounded-xl hover:scale-110 transition duration-500 cursor-pointer" />
                            <div
                                className="rounded-full px-[10px] py-[13px] w-[200px] text-center font-medium bg-white text-11black h-min absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                                lg:bottom-4 lg:py-[5px] lg:px-[30px] lg:w-auto xs:px-[20px]">
                                Clothing
                            </div>
                        </Link>
                    </div>
                    <div className="rounded-xl overflow-hidden relative">
                        <Link href="/">
                            <Image src={grid2} alt="Sunglasses"
                                   className="w-full rounded-xl hover:scale-110 transition duration-500 cursor-pointer" />
                            <div
                                className="rounded-full px-[10px] py-[13px] w-[200px] text-center font-medium bg-white text-11black h-min absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                                lg:bottom-4 lg:py-[5px] lg:px-[30px] lg:w-auto xs:px-[20px]">
                                Sunglasses
                            </div>
                        </Link>
                    </div>
                    <div className="row-span-2 text-white rounded-xl overflow-hidden relative ">
                        <Link href="/">
                            <Image src={grid4} alt="Sneaker"
                                   className="rounded-xl hover:scale-110 transition duration-500 cursor-pointer" />
                            <div
                                className="rounded-full px-[10px] py-[13px] w-[200px] text-center font-medium bg-white text-11black h-min absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                                lg:bottom-4 lg:py-[5px] lg:px-[30px] lg:w-auto xs:px-[20px]">
                                Sneaker
                            </div>
                        </Link>
                    </div>
                    <div className="text-white rounded-xl overflow-hidden relative ">
                        <Link href="/">
                            <Image src={grid3} alt="Bags"
                                   className="rounded-xl hover:scale-110 transition duration-500 cursor-pointer h-[100%]" />
                            <div
                                className="rounded-full px-[10px] py-[13px] w-[200px] text-center font-medium bg-white text-11black h-min absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                                lg:bottom-4 lg:py-[5px] lg:px-[30px] lg:w-auto xs:px-[20px]">
                                Bags
                            </div>
                        </Link>
                    </div>
                </div>

            </section>
            <section className="py-[100px]">
                <div className="m-auto max-w-[1290px] md:px-[15px]">
                    <div className="mb-[15px]">
                        <h2 className="mb-[5px] text-center text-[40px] md:text-[30px]">
                            Featured Products
                        </h2>
                        <p className="text-center text-55black">
                            Don&apos;t forget! The products that you viewed. Add
                            it to cart now.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="arrow-left5 arrow flex h-[60px] w-[60px]
                    items-center justify-center rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500
                    hover:border-black hover:bg-black hover:text-white
                    xl:h-[40px] xl:w-[40px]">
                        <div>
                            <FontAwesomeIcon icon={faChevronLeft} className="md:text-[15px]"/>
                        </div>
                    </button>
                    <button
                        className="arrow-right5 arrow h-[60px] w-[60px]
                    rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500
                    hover:border-black hover:bg-black hover:text-white ml-[20px]
                    xl:h-[40px] xl:w-[40px]">
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} className="md:text-[15px]"/>
                        </div>
                    </button>
                </div>
                <div className="mx-auto max-w-[1470px] mt-[50px] px-[15px] md:px-0">
                    <Swiper
                        navigation={{
                            nextEl: '.arrow-right5',
                            prevEl: '.arrow-left5',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        loop={true}
                        modules={[Navigation]}
                        className="mySwiper5"
                    >
                        {collections.map((collection) => (
                            <SwiperSlide key={collection.id}>
                                <CollectionCard title={collection.title}
                                                imageSrc={collection.imageSrc} price={collection.price}
                                                sale={collection.sale} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <section>
                <div className="m-auto max-w-[1290px] md:px-[15px]">
                    <div className="mb-[15px]">
                        <h2 className="mb-[5px] text-center text-[40px] md:text-[30px]">
                            New Arrivals
                        </h2>
                        <p className="text-center text-55black">
                            Find the top most popular items in Umino best sellers.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="arrow-left6 arrow flex h-[60px] w-[60px]
                    items-center justify-center rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500
                    hover:border-black hover:bg-black hover:text-white
                    xl:h-[40px] xl:w-[40px]">
                        <div>
                            <FontAwesomeIcon icon={faChevronLeft} className="md:text-[15px]" />
                        </div>
                    </button>
                    <button
                        className="arrow-right6 arrow h-[60px] w-[60px]
                    rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500
                    hover:border-black hover:bg-black hover:text-white ml-[20px]
                    xl:h-[40px] xl:w-[40px]">
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} className="md:text-[15px]" />
                        </div>
                    </button>
                </div>
                <div className="mx-auto max-w-[1470px] mt-[50px] px-[15px] md:px-0">
                    <Swiper
                        navigation={{
                            nextEl: '.arrow-right6',
                            prevEl: '.arrow-left6',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        loop={true}
                        modules={[Navigation]}
                        className="mySwiper5"
                    >
                        {collections.map((collection) => (
                            <SwiperSlide key={collection.id}>
                                <CollectionCard title={collection.title}
                                                imageSrc={collection.imageSrc} price={collection.price}
                                                sale={collection.sale} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>


        </main>
    )
}

export default Index
