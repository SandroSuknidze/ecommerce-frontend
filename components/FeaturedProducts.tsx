import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CollectionCard from '@/components/CollectionCard'
import axiosInstance from '@/utils/axiosInstance'
import { useEffect, useState } from 'react'
import { SkeletonLoader } from '@/components/SkeletonLoader'
import { useTranslation } from 'next-i18next'

function FeaturedProducts() {
    const { t } = useTranslation('common')

    const [featuredProducts, setFeaturedProducts] = useState([])

    async function fetchFeatureProducts() {
        try {
            const response = await axiosInstance('/products/featured')
            const data = await response.data;

            setFeaturedProducts(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchFeatureProducts()
    }, [])
    return (
        <>
            <section className="py-[100px] md:py-[50px]">
                <div className="m-auto max-w-[1290px] md:px-[15px]">
                    <div className="mb-[15px]">
                        <h2 className="mb-[5px] text-center text-[40px] md:text-[30px]">
                            {t('featuredProducts')}
                        </h2>
                        <p className="text-center text-55black">
                            {t('dontForgetTheProductsThatYouViewedAddItToCartNow')}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="arrow-left5 arrow flex h-[60px] w-[60px]
                    items-center justify-center rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500
                    hover:border-black hover:bg-black hover:text-white
                    xl:hover:bg-white xl:hover:text-black xl:hover:border-[#ebebeb] xl:h-[40px] xl:w-[40px]"
                        aria-label="Arrow left">
                        <div>
                            <FontAwesomeIcon icon={faChevronLeft} className="md:text-[15px]" />
                        </div>
                    </button>
                    <button
                        className="arrow-right5 arrow h-[60px] w-[60px]
                    rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500
                    hover:border-black hover:bg-black hover:text-white ml-[20px]
                    xl:hover:bg-white xl:hover:text-black xl:hover:border-[#ebebeb] xl:h-[40px] xl:w-[40px]"
                        aria-label="Arrow right">
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} className="md:text-[15px]" />
                        </div>
                    </button>
                </div>
                <div className="mx-auto max-w-[1470px] mt-[50px] px-[15px] md:px-0">
                    {featuredProducts.length > 0 ? (
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
                        {featuredProducts.map((featuredProduct: any) => (
                            <SwiperSlide key={featuredProduct.id}>
                                <CollectionCard
                                    key={featuredProduct.id}
                                    id={featuredProduct.id}
                                    title={featuredProduct.title}
                                    imageSrc={featuredProduct.image_path[0]}
                                    price={featuredProduct.price}
                                    sale={featuredProduct.sale_price}
                                    rating={featuredProduct.rating}
                                    size_id={featuredProduct.sizes[0].id}
                                    size_name={featuredProduct.sizes[0].name}
                                    color_id={featuredProduct.colors[0].id}
                                    color_name={featuredProduct.colors[0].name}
                                    colors={featuredProduct.colors}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>) : (
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

        </>
    )
}

export default FeaturedProducts