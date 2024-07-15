import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

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

import grid1 from '@/public/assets/homeFeatured/main-cate-1.webp'
import grid2 from '@/public/assets/homeFeatured/main-cate-2.webp'
import grid3 from '@/public/assets/homeFeatured/main-cate-3.webp'
import grid4 from '@/public/assets/homeFeatured/main-cate-4.webp'
import Link from 'next/link'
import CollectionCard from '@/components/CollectionCard'
import FeaturedProducts from '@/components/FeaturedProducts'
import { useEffect, useState } from 'react'
import axiosInstance from '@/utils/axiosInstance'
import { SkeletonLoader } from '@/components/SkeletonLoader'
import { useTranslation } from 'next-i18next'
import { withTranslations } from '@/utils/i18nHelper'

export const getStaticProps = withTranslations(['common']);


function Index() {
    const { t } = useTranslation('common')
    const [newArrivals, setNewArrivals] = useState([])

    async function fetchNewArrivals() {
        try {
            const response = await axiosInstance('/products/new-arrivals')
            const data = await response.data

            setNewArrivals(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchNewArrivals()
    }, [])


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
                        <div className="bg-first-image w-auto h-full bg-cover bg-no-repeat bg-center flex slide-move">
                            <div className="fixed inset-0 bg-black opacity-20 hidden sm:block"></div>
                            <div className="w-1/2 flex flex-col justify-center ml-[100px] mb-[100px]
                    md:ml-[10px] md:text-left md:w-full z-10">
                                <h2 className="text-[73px] leading-[84px] text-11black lg:text-[45px] lg:leading-[51px]
                        md:!text-[36px] md:!leading-[41px] xs:text-white">{t('stylish')}<br />{t('topTrending')}</h2>
                                <p className="leading-[24px] text-55black mt-[20px] lg:text-[16px]
                         xs:text-white">{t("soSoftYouDontWantToTakeItOff")}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-second-image w-auto h-full bg-cover bg-no-repeat bg-center flex slide-move">
                            <div className="fixed inset-0 bg-black opacity-20 hidden sm:block"></div>
                            <div className="w-1/2 flex flex-col justify-center ml-[100px] mb-[100px]
                    md:ml-[10px] md:text-left md:w-full z-10">
                                <h2 className="text-[73px] leading-[84px] text-11black lg:text-[45px] lg:leading-[51px]
                        md:!text-[36px] md:!leading-[41px] xs:text-white">{t('hulton')}<br />{t('perfectSimple')}</h2>
                                <p className="leading-[24px] text-55black mt-[20px] lg:text-[16px] xs:text-white">{t("soSoftYouDontWantToTakeItOff")}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-third-image w-auto h-full bg-cover bg-no-repeat bg-center flex slide-move">
                            <div className="fixed inset-0 bg-black opacity-20 hidden sm:block"></div>
                            <div className="w-1/2 flex flex-col justify-center ml-[100px] mb-[100px]
                                md:ml-[10px] md:text-left md:w-full z-10">
                                <h2 className="text-[73px] leading-[84px] text-11black lg:text-[45px] lg:leading-[51px]
                        md:!text-[36px] md:!leading-[41px] xs:text-white">{t('online')}<br />{t('limitedEdition')}</h2>
                                <p className="leading-[24px] text-55black mt-[20px] lg:text-[16px] xs:text-white">{t("soSoftYouDontWantToTakeItOff")}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button
                    className="arrow-left arrow absolute left-10 top-1/2 z-10 flex h-[60px] w-[60px] -translate-y-1/2
            transform items-center justify-center rounded-full border-[1px] border-[#ebebeb] bg-white transition
            duration-500 text-11black hover:border-black hover:bg-black hover:text-white xl:h-[40px] xl:w-[40px]
            md:hidden">
                    <div>
                        <FontAwesomeIcon icon={faChevronLeft} className="text-[15px]" />
                    </div>
                </button>
                <button
                    className="arrow-right arrow absolute right-10 top-1/2 z-10 h-[60px] w-[60px] -translate-y-1/2
            transform rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500 text-11black
            hover:border-black hover:bg-black hover:text-white xl:h-[40px] xl:w-[40px]
            md:hidden">
                    <div>
                        <FontAwesomeIcon icon={faChevronRight} className="text-[15px]" />
                    </div>
                </button>
                <Link href="/shop">
                    <button
                        className="absolute top-[65%] left-[25%] z-10 rounded-[30px] border-[1px] border-black
                    bg-black px-[66px] py-[14.5px] text-[12px] font-semibold uppercase text-white
                    lg:top-[60%] lg:px-[40px] lg:py-[11px] lg:left-[28%]
                    md:!left-[10px] md:!top-[57%]"
                    >
                        {t('shopNow')}
                    </button>
                </Link>
            </section>
            <section className="mt-[100px] max-w-[1470px] flex flex-col justify-center m-auto md:mt-[50px]">
                <div className="flex flex-col justify-center md:px-[15px]">
                    <h2 className="text-11black leading-[52px] text-[40px] text-center md:text-[30px]">
                        {t('featuredCollections')}
                    </h2>
                    <p className="text-55black text-center mt-[5px]">
                        {t('upgradeYourStyleWithOurCuratedSetsChooseConfidenceEmbraceYourUniqueLook')}
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
                                {t('clothing')}
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
                                {t('sunglasses')}
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
                                {t('sneaker')}
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
                                {t('bags')}
                            </div>
                        </Link>
                    </div>
                </div>

            </section>
            <FeaturedProducts />
            <section>
                <div className="m-auto max-w-[1290px] md:px-[15px]">
                    <div className="mb-[15px]">
                        <h2 className="mb-[5px] text-center text-[40px] md:text-[30px] text-11black">
                            {t('newArrivals')}
                        </h2>
                        <p className="text-center text-55black">
                            {t('findTheTopMostPopularItemsInUminoBestSellers')}
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
                    {newArrivals.length > 0 ? (
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
                            {newArrivals.map((newArrival: any) => (
                                <SwiperSlide key={newArrival.id}>
                                    <CollectionCard
                                        key={newArrival.id}
                                        id={newArrival.id}
                                        title={newArrival.title}
                                        imageSrc={newArrival.image_path[0]}
                                        price={newArrival.price}
                                        sale={newArrival.sale_price}
                                        rating={newArrival.rating}
                                        size_id={newArrival.sizes[0].id}
                                        size_name={newArrival.sizes[0].name}
                                        color_id={newArrival.colors[0].id}
                                        color_name={newArrival.colors[0].name}
                                        colors={newArrival.colors}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
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
                            {[...Array(6)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div key={index}
                                         className="flex flex-col flex-wrap justify-center mx-[15px] mb-[20px]">
                                        <SkeletonLoader className="h-[380px] w-[100%] rounded-xl" />
                                        <SkeletonLoader className="h-[20px] w-[100%] rounded-xl mt-[10px]" />
                                        <SkeletonLoader className="h-[20px] w-[40%] rounded-xl mt-[10px]" />
                                        <SkeletonLoader className="h-[20px] w-[30%] rounded-xl mt-[10px]" />
                                        <SkeletonLoader className="h-[20px] w-[30%] rounded-xl mt-[10px]" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Index
