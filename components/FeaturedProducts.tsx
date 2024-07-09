import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CollectionCard from '@/components/CollectionCard'
import { collections } from '@/pages'

function FeaturedProducts() {
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

        </>
    )
}

export default FeaturedProducts