import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CollectionCard from '@/components/CollectionCard'
import { collections } from '@/pages'
import axiosInstance from '@/utils/axiosInstance'
import { useEffect, useState } from 'react'

function FeaturedProducts() {

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
                            <FontAwesomeIcon icon={faChevronLeft} className="md:text-[15px]" />
                        </div>
                    </button>
                    <button
                        className="arrow-right5 arrow h-[60px] w-[60px]
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
                    </Swiper>
                </div>
            </section>

        </>
    )
}

export default FeaturedProducts