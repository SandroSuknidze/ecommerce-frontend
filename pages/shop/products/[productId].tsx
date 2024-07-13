import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { CSSProperties, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import minusIcon from '@/public/assets/minus-icon.svg'
import plusIcon from '@/public/assets/plus-icon.svg'
import sizeIcon from '@/public/assets/size-icon.svg'
import askIcon from '@/public/assets/ask-icon.svg'
import shareIcon from '@/public/assets/share-icon.svg'
import estIcon from '@/public/assets/est-delivery-icon.svg'
import returnIcon from '@/public/assets/return-icon.svg'
import washIcon from '@/public/assets/description/wash.png'
import ironIcon from '@/public/assets/description/iron.png'
import bleachIcon from '@/public/assets/description/bleach.png'
import dryIcon from '@/public/assets/description/dry.png'
import tumbleIcon from '@/public/assets/description/tumble.png'
import paymentPicture from '@/public/assets/product-payment.png'

import HeartIcon from '@/public/assets/HeartIcon'
import SizeGuideModal from '@/components/SizeGuideModal'
import { AskQuestionModal } from '@/components/AskQuestionModal'
import { ShareModal } from '@/components/ShareModal'
import Link from 'next/link'
import collection2 from '@/public/assets/collections/collection2.webp'
import collection3 from '@/public/assets/collections/collection3.webp'
import collection4 from '@/public/assets/collections/collection4.webp'
import collection5 from '@/public/assets/collections/collection5.webp'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import FeaturedProducts from '@/components/FeaturedProducts'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/system'
import axiosInstance from '@/utils/axiosInstance'
import { useRouter } from 'next/router'
import { SkeletonLoader } from '@/components/SkeletonLoader'
import { useCart } from '@/context/CartContext'
import { toast } from 'react-toastify'


interface Size {
    id: number;
    name: string;
    pivot: {
        product_id: number;
        size_id: number;
    };
}

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#111111',
        fontSize: '12px',
    },
    '& .MuiRating-iconEmpty': {
        fontSize: '12px',
    },
})




function ProductId() {
    const router = useRouter()
    const { productId } = router.query

    const { addItem, items } = useCart();


    const [product, setProduct] = useState<any>({})
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

    const [selectedSize, setSelectedSize] = useState<{ id: number; name: string } | null>(null);
    const [selectedColor, setSelectedColor] = useState<{ id: number; name: string } | null>(null);
    const [itemCount, setItemCount] = useState(1)

    const [isSizeGuidModalOpen, setIsSizeGuidModalOpen] = useState(false)
    const [isAskQuestionModalOpen, setIsAskQuestionModalOpen] = useState(false)
    const [isShareModalOpen, setIsShareModalOpen] = useState(false)

    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
    const [isShippingOpen, setIsShippingOpen] = useState(false)
    const [isReturnOpen, setIsReturnOpen] = useState(false)

    type Section = 1 | 2 | 3;
    const [section, setSection] = useState<Section>(1)



    const sale = '20.00'
    const price = '40.00'

    function incrementCount() {
        setItemCount((prevItemCount) => prevItemCount + 1)
    }

    function decrementCount() {
        if (itemCount > 1) {
            setItemCount((prevItemCount) => prevItemCount - 1)
        }
    }

    function toggleSizeGuideModal() {
        setIsSizeGuidModalOpen(!isSizeGuidModalOpen)
    }

    function toggleAskQuestionModal() {
        setIsAskQuestionModalOpen(!isAskQuestionModalOpen)
    }

    function toggleShareModal() {
        setIsShareModalOpen(!isShareModalOpen)
    }

    function toggleDescription() {
        setIsDescriptionOpen(!isDescriptionOpen)
    }

    function toggleShipping() {
        setIsShippingOpen(!isShippingOpen)
    }

    function toggleReturn() {
        setIsReturnOpen(!isReturnOpen)
    }

    async function fetchProduct() {
        try {
            const response = await axiosInstance.get(`/product/${productId}`)
            const data = response.data
            setProduct(data)
            if (data.sizes.length > 0) {
                setSelectedSize({ id: data.sizes[0].id, name: data.sizes[0].name });
            }
            if (data.colors.length > 0) {
                setSelectedColor({ id: data.colors[0].id, name: data.colors[0].name });
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (productId) fetchProduct()
    }, [productId])


    const addToCart = (product: any) => {
        toast.success('Item added to your cart!', {
            position: 'top-center'
        })
        const item = {
            id: product.id,
            title: product.title,
            price: product.price,
            sale_price: product.sale_price,
            image_path: product.image_path[0],
            quantity: itemCount,
            size_id: selectedSize?.id,
            size_name: selectedSize?.name,
            color_id: selectedColor?.id,
            color_name: selectedColor?.name,
        }
        addItem(item);
        console.log(items);
    };


    return (
        <>
            {isSizeGuidModalOpen && (
                <SizeGuideModal toggleSizeGuideModal={toggleSizeGuideModal} />
            )}
            {isAskQuestionModalOpen && (
                <AskQuestionModal
                    toggleAskQuestionModal={toggleAskQuestionModal}
                />
            )}
            {isShareModalOpen && (
                <ShareModal toggleShareModal={toggleShareModal} />
            )}
            <div className="m-auto max-w-[1350px] px-[30px] md:px-[15px]">
                <nav className="py-[25px]">
                    {product.image_path?.length > 0 ? (
                        <ol className="text-[14px]">
                            <li className="inline text-11black"><Link href="/">Home</Link>&nbsp;/&nbsp;</li>
                            <li className="inline text-11black"><Link href={`/shop/${product.category?.id}`}>
                                {product.category?.name}</Link>&nbsp;/&nbsp;
                            </li>
                            <li className="inline text-55black">
                                {product.title}
                            </li>
                        </ol>
                    ) : (
                        <ol className="text-[14px]">
                            <li className="inline text-11black">
                                <SkeletonLoader className="w-[300px] h-[21px]" />
                            </li>
                        </ol>

                    )}
                </nav>
                <div className="m-auto flex justify-center mb-[100px] lg:flex-col">
                    {product.image_path?.length > 0 ? (
                        <div
                            className="flex max-h-[800px] w-1/2 flex-row gap-[10px] pr-[15px] lg:flex-col-reverse lg:max-h-max lg:w-full lg:p-0">
                            <div className="w-[8%] select-none lg:w-full h-[100%]">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper w-full h-fit"
                                    breakpoints={{
                                        992: {
                                            direction: 'vertical',
                                            slidesPerView: 10,
                                        },
                                        320: {
                                            direction: 'horizontal',
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                    {product.image_path?.map((image: any, index: number) => (
                                        <SwiperSlide key={'small-' + index}>
                                            <Image
                                                width={50}
                                                height={69}
                                                src={process.env.imageUrl + '' + image}
                                                alt="Product Image"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="w-[88%] select-none relative lg:w-full lg:h-full">
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#fff',
                                        '--swiper-pagination-color': '#fff',
                                    } as CSSProperties}
                                    spaceBetween={10}
                                    navigation={{
                                        nextEl: '.arrow-right7',
                                        prevEl: '.arrow-left7',
                                    }}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    loop={true}
                                    className="mySwiper2"
                                >
                                    {product.image_path?.map((image: any, index: number) => (
                                        <SwiperSlide key={'big-' + index}>
                                            <Image
                                                width={554}
                                                height={783}
                                                src={process.env.imageUrl + '' + image}
                                                alt="Product Image"
                                                loading={'lazy'}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <button
                                    className="arrow-left7 absolute z-10 top-1/2 -translate-y-1/2 left-5 arrow flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500 hover:border-black hover:bg-black hover:text-white xl:h-[40px] xl:w-[40px]"
                                >
                                    <div>
                                        <FontAwesomeIcon icon={faChevronLeft} className="md:text-[15px]" />
                                    </div>
                                </button>
                                <button
                                    className="arrow-right7 absolute z-10 top-1/2 -translate-y-1/2 right-5 arrow h-[60px] w-[60px] rounded-full border-[1px] border-[#ebebeb] bg-white transition duration-500 hover:border-black hover:bg-black hover:text-white ml-[20px] xl:h-[40px] xl:w-[40px]"
                                >
                                    <div>
                                        <FontAwesomeIcon icon={faChevronRight} className="md:text-[15px]" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="flex h-[800px] w-1/2 flex-row gap-[10px] pr-[15px] lg:flex-col-reverse lg:max-h-max lg:w-full lg:p-0">
                            <SkeletonLoader className="w-[8%] lg:w-full h-[100%] lg:h-[20%]" />
                            <SkeletonLoader className="w-[88%] lg:w-full  relative lg:h-[80%]" />
                        </div>
                    )}

                    <div className="w-1/2 px-[15px] lg:flex-col lg:w-full lg:p-0 lg:mt-[30px]">
                        {product.title ? (
                            <>
                                <div>
                                    {product.sale_price && (
                                        <div
                                            className="mb-[5px] inline-block rounded-[12px] bg-red-600 px-[12px] py-[6px] text-[13px] leading-3 text-white">
                                            -{Math.round(100 - (product.sale_price * 100) / product.price)}%
                                        </div>
                                    )}
                                    <h1 className="mb-[5px] text-[30px] text-11black">
                                        {product.title}
                                    </h1>
                                    <div className="flex text-[10px] leading-[28px]">
                                        <div>
                                            <StyledRating name="read-only" value={product.rating ?? 0} readOnly />
                                        </div>
                                        <div className="ml-[10px] text-[14px] text-55black">
                                            2 reviews
                                        </div>
                                    </div>
                                    <div className="m-auto mt-[3px] flex py-[20px] font-medium">
                                        {product.sale_price && (
                                            <div className="text-[30px] text-red-600">
                                                ${(product.sale_price).toFixed(2)}
                                            </div>
                                        )}
                                        <div
                                            className={`${product.sale_price ? 'my-auto ml-[5px] text-[20px] font-normal text-gray-400 line-through' : 'text-[#111111]'}`}
                                        >
                                            ${(product.price).toFixed(2)}
                                        </div>
                                    </div>
                                    <div className="text-55black">
                                        {product.description}
                                    </div>
                                    <div className="mt-[20px]">
                                        <fieldset>
                                            <legend>
                                                <span className="text-55black">
                                                    Size:{' '}
                                                </span>
                                                <span className="font-medium text-11black">
                                                    {selectedSize?.name}
                                                </span>
                                            </legend>
                                            <div className="mt-[10px] flex gap-[10px]">
                                                {product.sizes?.map((size: any) => (
                                                    <div
                                                        key={size.id}
                                                        id={String(size.id)}
                                                        onClick={() => setSelectedSize({ id: size.id, name: size.name })}
                                                        className={`${selectedSize?.id === size.id ? 'bg-black text-white' : 'bg-white'} cursor-pointer rounded-[3px] border-[1px] border-[#ebebeb] px-[22px] py-[3px] transition duration-500 hover:bg-black hover:text-white`}
                                                    >
                                                        {size.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="mt-[20px]">
                                        <fieldset>
                                            <legend>
                                                <span className="text-55black">
                                                    Color:{' '}
                                                </span>
                                                <span className="font-medium text-11black">
                                                    {selectedColor?.name}
                                                </span>
                                            </legend>
                                            <div className="mt-[10px] flex gap-[10px]">
                                                {product.colors?.map((color: any) => (
                                                    <div
                                                        key={color.id}
                                                        id={String(color.id)}
                                                        onClick={() => setSelectedColor({
                                                            id: color.id,
                                                            name: color.name,
                                                        })}
                                                        className={`${selectedColor?.id === color.id ? 'border-black' : 'border-[#dddddd]'} h-[32px] w-[32px] cursor-pointer rounded-full border-[1px] transition duration-500`}
                                                    >
                                                        <div
                                                            style={{ backgroundColor: color.color }}
                                                            className="h-[30px] w-[30px] rounded-full border-2 border-white"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div className="mt-[25px] border-b-[1px] border-[#ebebeb] pb-[20px]">
                                        <div className="flex gap-[30px] xs:flex-col xs:gap-[10px]">
                                            <div className="flex cursor-pointer gap-[10px]"
                                                 onClick={toggleSizeGuideModal}>
                                                <Image src={sizeIcon} alt="Size Icon" />
                                                <div>Size Guide</div>
                                            </div>
                                            <div className="flex gap-[30px]">
                                                <div className="flex cursor-pointer gap-[10px]"
                                                     onClick={toggleAskQuestionModal}>
                                                    <Image src={askIcon} alt="Ask Icon" />
                                                    <div>Ask a Question</div>
                                                </div>
                                                <div className="flex cursor-pointer gap-[10px]"
                                                     onClick={toggleShareModal}>
                                                    <Image src={shareIcon} alt="Share Icon" />
                                                    <div>Share</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="mt-[20px] flex h-[50px] select-none gap-[20px] sm:flex-col sm:h-auto">
                                        <div className="h-[50px] flex">
                                            <div
                                                className="flex w-[150px] px-[10px] rounded-full border-[1px] border-[#ebebeb] bg-[#F5F5F5] sm:w-full">
                                                <div className="flex w-1/4 cursor-pointer justify-center"
                                                     onClick={decrementCount}>
                                                    <Image src={minusIcon} alt="Minus Icon" />
                                                </div>
                                                <div className="m-auto flex w-2/4 justify-center">
                                                    {itemCount}
                                                </div>
                                                <div className="flex w-1/4 cursor-pointer justify-center"
                                                     onClick={incrementCount}>
                                                    <Image src={plusIcon} alt="Plus Icon" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-[50px] flex gap-[20px]">
                                            <button
                                                onClick={() => addToCart(product)}
                                                type="submit"
                                                className="w-[300px] rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white xl:w-full xl:px-[45px] sm:!px-[30px] sm:w-full"
                                            >
                                                Add To Cart
                                            </button>
                                            <div
                                                className="hover-parent-heart cursor-pointer rounded-full border-[1px] border-[#ebebeb] bg-white p-[18px] transition duration-300 hover:bg-black">
                                                <HeartIcon
                                                    className="hover-child-heart border-[#ebebeb] uppercase transition duration-300 hover:border-black" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-[25px] border-b-[1px] border-[#ebebeb] pb-[25px] text-55black">
                                        <div className="mb-[10px] flex gap-[15px] leading-[28px]">
                                            <Image src={estIcon} alt="Estimate Delivery Icon" />
                                            <p>
                                                Estimate delivery times:{' '}
                                                <strong className="font-medium text-11black">
                                                    3-6 days
                                                </strong>{' '}
                                                (International)
                                            </p>
                                        </div>
                                        <div className="flex gap-[15px] leading-[28px]">
                                            <Image src={returnIcon} alt="Return Icon" />
                                            <p>
                                                Return within{' '}
                                                <strong className="font-medium text-11black">
                                                    45 days
                                                </strong>{' '}
                                                of purchase. Duties & taxes are non-refundable.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="relative mt-[30px] flex justify-center rounded-[5px] border-[1px] border-[#ebebeb] py-[25px]">
                                        <label className="absolute top-[-13px] bg-white px-[20px] font-medium">
                                            Guarantee safe checkout
                                        </label>
                                        <div>
                                            <Image src={paymentPicture} alt="Payment Methods" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div>
                                <SkeletonLoader className="h-[30px] w-[150px] mb-[5px] inline-block rounded-[12px]" />
                                <SkeletonLoader className="h-[40px] w-[300px] mb-[5px]" />
                                <SkeletonLoader className="h-[20px] w-[100px] mb-[5px]" />
                                <SkeletonLoader className="h-[40px] w-[200px] mt-[3px]" />
                                <SkeletonLoader className="h-[20px] w-[100%] mt-[20px]" />
                                <SkeletonLoader className="h-[20px] w-[100%] mt-[20px]" />
                                <div className="mt-[20px]">
                                    <fieldset>
                                        <legend>
                                            <span className="font-medium text-11black">
                                                <SkeletonLoader className="h-[20px] w-[50px]" />
                                            </span>
                                        </legend>
                                        <div className="mt-[10px] flex gap-[10px]">
                                            <SkeletonLoader className="h-[32px] w-[50px] rounded-[3px]" />
                                            <SkeletonLoader className="h-[32px] w-[50px] rounded-[3px]" />
                                            <SkeletonLoader className="h-[32px] w-[50px] rounded-[3px]" />
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="mt-[20px]">
                                    <fieldset>
                                        <legend>
                                            <span className="font-medium text-11black">
                                                <SkeletonLoader className="h-[20px] w-[50px]" />
                                            </span>
                                        </legend>
                                        <div className="mt-[10px] flex gap-[10px]">
                                            <SkeletonLoader className="h-[32px] w-[32px] rounded-full" />
                                            <SkeletonLoader className="h-[32px] w-[32px] rounded-full" />
                                            <SkeletonLoader className="h-[32px] w-[32px] rounded-full" />
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="mt-[25px] border-b-[1px] border-[#ebebeb] pb-[20px]">
                                    <div className="flex gap-[30px] xs:flex-col xs:gap-[10px]">
                                        <SkeletonLoader className="h-[20px] w-[100px]" />
                                        <SkeletonLoader className="h-[20px] w-[100px]" />
                                    </div>
                                </div>
                                <div className="mt-[20px] flex h-[50px] select-none gap-[20px] sm:flex-col sm:h-auto">
                                    <SkeletonLoader className="h-[50px] w-[150px] rounded-full" />
                                    <SkeletonLoader className="h-[50px] w-[300px] rounded-full" />
                                </div>
                                <div className="mt-[25px] border-b-[1px] border-[#ebebeb] pb-[25px] text-55black">
                                    <SkeletonLoader className="h-[20px] w-[300px] mb-[10px]" />
                                    <SkeletonLoader className="h-[20px] w-[300px]" />
                                </div>
                                <div
                                    className="relative mt-[30px] flex justify-center rounded-[5px] border-[1px] border-[#ebebeb] py-[25px]">
                                    <SkeletonLoader className="h-[20px] w-[150px] absolute top-[-13px] bg-white" />
                                    <SkeletonLoader className="h-[30px] w-[200px]" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <section className="border-y-[1px] border-[#ebebeb] py-[100px] px-[30px] md:px-[15px] lg:py-[60px]">
                <div className="m-auto max-w-[1290px] lg:hidden">
                    <ul className="mb-[45px] flex justify-center gap-[20px]">
                        <li
                            onClick={() => setSection(1)}
                            className={`${section === 1 ? 'bg-11black text-white' : 'bg-[#f5f5f5] text-11black'} inline-block cursor-pointer rounded-[30px] px-[30px] py-[10px] font-semibold transition duration-300 focus:bg-11black focus:text-white`}
                        >
                            Description
                        </li>
                        <li
                            onClick={() => setSection(2)}
                            className={`${section === 2 ? 'bg-11black text-white' : 'bg-[#f5f5f5] text-11black'} inline-block cursor-pointer rounded-[30px] px-[30px] py-[10px] font-semibold transition duration-300 focus:bg-11black focus:text-white`}
                        >
                            Shipping & Returns
                        </li>
                        <li
                            onClick={() => setSection(3)}
                            className={`${section === 3 ? 'bg-11black text-white' : 'bg-[#f5f5f5] text-11black'} inline-block cursor-pointer rounded-[30px] px-[30px] py-[10px] font-semibold transition duration-300 focus:bg-11black focus:text-white`}
                        >
                            Return Policies
                        </li>
                    </ul>

                    {section === 1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            <div>
                                <div className="flex w-full gap-[30px]">
                                    <div className="w-1/2">
                                        <h2 className="mb-[10px] text-[20px] font-medium">
                                            Outstanding Features
                                        </h2>
                                        <p className="leading-[28px] text-55black">
                                            The garments labelled as committed
                                            are products that have been produced
                                            using sustainable fibres or
                                            processes, reducing their
                                            environmental impact. Umino’s goal
                                            is to support the implementation of
                                            practices more committed to the
                                            environment.
                                        </p>
                                        <br />
                                        <p className="leading-[28px] text-55black">
                                            – Tonal stitching: 98% cotton, 2%
                                            elastane.
                                        </p>
                                        <p className="leading-[28px] text-55black">
                                            – Supple and stretch knit with a
                                            rich touch of wool.
                                        </p>
                                        <p className="leading-[28px] text-55black">
                                            – Model: Model is 6′1″, wearing a
                                            size M.
                                        </p>
                                        <p className="leading-[28px] text-55black">
                                            – Caring for your clothes is caring
                                            for the environment.
                                        </p>
                                    </div>
                                    <div className="w-1/2">
                                        <h2 className="mb-[10px] text-[20px] font-medium">
                                            Outstanding Features
                                        </h2>
                                        <div className="mb-[15px] flex gap-[10px]">
                                            <Image src={washIcon} alt="Wash" />
                                            <p className="leading-[28px] text-55black">
                                                Machine wash max. 30ºC. Short
                                                spin.
                                            </p>
                                        </div>
                                        <div className="mb-[15px] flex gap-[10px]">
                                            <Image src={ironIcon} alt="Iron" />
                                            <p className="leading-[28px] text-55black">
                                                Iron maximum 110ºC.
                                            </p>
                                        </div>
                                        <div className="mb-[15px] flex gap-[10px]">
                                            <Image
                                                src={bleachIcon}
                                                alt="Bleach"
                                            />
                                            <p className="leading-[28px] text-55black">
                                                Do not bleach/bleach.
                                            </p>
                                        </div>
                                        <div className="mb-[15px] flex gap-[10px]">
                                            <Image src={dryIcon} alt="Dry" />
                                            <p className="leading-[28px] text-55black">
                                                Do not dry clean.
                                            </p>
                                        </div>
                                        <div className="mb-[15px] flex gap-[10px]">
                                            <Image
                                                src={tumbleIcon}
                                                alt="Tumble"
                                            />
                                            <p className="leading-[28px] text-55black">
                                                Tumble dry, medium hear.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="leading-[28px] text-55black">
                                    We work with monitoring programmes to ensure
                                    compliance with our social, environmental
                                    and health and safety standards for our
                                    garments. To assess compliance, we have
                                    developed a programme of audits and
                                    continuous improvement plans. Made of
                                    super-soft cotton, the Organic Cotton
                                    Cutaway Tank features a high neck and back,
                                    and a slight curve at the shoulders, which
                                    makes it extra flattering. If there’s one
                                    thing the ’90s got right, it’s the basics.
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {section === 2 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            <div>
                                <p className="mb-[15px] leading-[28px] text-55black">
                                    For all orders exceeding a value of 100USD
                                    shipping is offered for free.
                                </p>
                                <p className="mb-[15px] leading-[28px] text-55black">
                                    Returns will be accepted for up to 10 days
                                    of Customer’s receipt or tracking number on
                                    unworn items. You, as a Customer, are
                                    obliged to inform us via email before you
                                    return the item.
                                </p>
                                <p className="mb-[15px] leading-[28px] text-55black">
                                    Otherwise, standard shipping charges apply.
                                    Check out our delivery
                                    <Link href="/" className="text-11black">
                                        {' '}
                                        Terms & Conditions
                                    </Link>{' '}
                                    for more details.
                                </p>
                            </div>
                        </motion.div>
                    )}
                    {section === 3 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            <div>
                                <p className="mb-[15px] leading-[28px] text-55black">
                                    Returns will be accepted for up to 10 days
                                    of Customer’s receipt or tracking number on
                                    unworn items. You, as a Customer, are
                                    obliged to inform us via email before you
                                    return the item, only in the case of:
                                </p>
                                <p className="leading-[28px] text-55black">
                                    – Received the wrong item.
                                </p>
                                <p className="leading-[28px] text-55black">
                                    – Item arrived not as expected (ie. damaged
                                    packaging).
                                </p>
                                <p className="leading-[28px] text-55black">
                                    – Item had defects.
                                </p>
                                <p className="leading-[28px] text-55black">
                                    – Over delivery time.
                                </p>
                                <p className="mb-[15px] leading-[28px] text-55black">
                                    – The shipper does not allow the goods to be
                                    inspected before payment.
                                </p>
                                <p className="leading-[28px] text-55black">
                                    The returned product(s) must be in the
                                    original packaging, safety wrapped,
                                    undamaged and unworn. This means that the
                                    item(s) must be safely packed in a carton
                                    box for protection during transport,
                                    possibly the same carton used to ship to you
                                    as a customer.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>


                <div className="overflow-hidden hidden lg:block">
                    <div
                        onClick={() => toggleDescription()}
                        className="mb-[10px] flex cursor-pointer justify-between px-[15px] py-[15px] bg-[#f5f5f5] rounded-[5px]"
                    >
                        <h4 className="font-medium text-11black">Description</h4>
                        <div className="relative">
                            <FontAwesomeIcon
                                icon={faMinus}
                                className="text-87black"
                            />
                            <FontAwesomeIcon
                                icon={faMinus}
                                className={`${isDescriptionOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                            />
                        </div>
                    </div>
                    <AnimatePresence initial={false}>
                        {isDescriptionOpen && (
                            <motion.section
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{ type: 'spring', duration: 1, bounce: 0 }}
                            >
                                <div className="pb-[20px] px-[15px]">
                                    <div className="flex w-full gap-[30px] flex-col">
                                        <div className="w-full">
                                            <h2 className="mb-[10px] text-[20px] font-medium">
                                                Outstanding Features
                                            </h2>
                                            <p className="leading-[28px] text-55black">
                                                The garments labelled as committed
                                                are products that have been produced
                                                using sustainable fibres or
                                                processes, reducing their
                                                environmental impact. Umino’s goal
                                                is to support the implementation of
                                                practices more committed to the
                                                environment.
                                            </p>
                                            <br />
                                            <p className="leading-[28px] text-55black">
                                                – Tonal stitching: 98% cotton, 2%
                                                elastane.
                                            </p>
                                            <p className="leading-[28px] text-55black">
                                                – Supple and stretch knit with a
                                                rich touch of wool.
                                            </p>
                                            <p className="leading-[28px] text-55black">
                                                – Model: Model is 6′1″, wearing a
                                                size M.
                                            </p>
                                            <p className="leading-[28px] text-55black">
                                                – Caring for your clothes is caring
                                                for the environment.
                                            </p>
                                        </div>
                                        <div className="w-full">
                                            <h2 className="mb-[10px] text-[20px] font-medium">
                                                Outstanding Features
                                            </h2>
                                            <div className="mb-[15px] flex gap-[10px]">
                                                <Image src={washIcon} alt="Wash" />
                                                <p className="leading-[28px] text-55black">
                                                    Machine wash max. 30ºC. Short
                                                    spin.
                                                </p>
                                            </div>
                                            <div className="mb-[15px] flex gap-[10px]">
                                                <Image src={ironIcon} alt="Iron" />
                                                <p className="leading-[28px] text-55black">
                                                    Iron maximum 110ºC.
                                                </p>
                                            </div>
                                            <div className="mb-[15px] flex gap-[10px]">
                                                <Image
                                                    src={bleachIcon}
                                                    alt="Bleach"
                                                />
                                                <p className="leading-[28px] text-55black">
                                                    Do not bleach/bleach.
                                                </p>
                                            </div>
                                            <div className="mb-[15px] flex gap-[10px]">
                                                <Image src={dryIcon} alt="Dry" />
                                                <p className="leading-[28px] text-55black">
                                                    Do not dry clean.
                                                </p>
                                            </div>
                                            <div className="mb-[15px] flex gap-[10px]">
                                                <Image
                                                    src={tumbleIcon}
                                                    alt="Tumble"
                                                />
                                                <p className="leading-[28px] text-55black">
                                                    Tumble dry, medium hear.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="leading-[28px] text-55black">
                                        We work with monitoring programmes to ensure
                                        compliance with our social, environmental
                                        and health and safety standards for our
                                        garments. To assess compliance, we have
                                        developed a programme of audits and
                                        continuous improvement plans. Made of
                                        super-soft cotton, the Organic Cotton
                                        Cutaway Tank features a high neck and back,
                                        and a slight curve at the shoulders, which
                                        makes it extra flattering. If there’s one
                                        thing the ’90s got right, it’s the basics.
                                    </div>
                                </div>

                            </motion.section>
                        )}
                    </AnimatePresence>
                </div>


                <div className="overflow-hidden hidden lg:block">
                    <div
                        onClick={() => toggleShipping()}
                        className="mb-[10px] flex cursor-pointer justify-between px-[15px] py-[15px] bg-[#f5f5f5] rounded-[5px]"
                    >
                        <h4 className="font-medium text-11black">Shipping & Returns</h4>
                        <div className="relative">
                            <FontAwesomeIcon
                                icon={faMinus}
                                className="text-87black"
                            />
                            <FontAwesomeIcon
                                icon={faMinus}
                                className={`${isShippingOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                            />
                        </div>
                    </div>
                    <AnimatePresence initial={false}>
                        {isShippingOpen && (
                            <motion.section
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{ type: 'spring', duration: 1, bounce: 0 }}
                            >
                                <div className="pb-[20px] px-[15px]">
                                    <p className="mb-[15px] leading-[28px] text-55black">
                                        For all orders exceeding a value of 100USD
                                        shipping is offered for free.
                                    </p>
                                    <p className="mb-[15px] leading-[28px] text-55black">
                                        Returns will be accepted for up to 10 days
                                        of Customer’s receipt or tracking number on
                                        unworn items. You, as a Customer, are
                                        obliged to inform us via email before you
                                        return the item.
                                    </p>
                                    <p className="mb-[15px] leading-[28px] text-55black">
                                        Otherwise, standard shipping charges apply.
                                        Check out our delivery
                                        <Link href="/" className="text-11black">
                                            {' '}
                                            Terms & Conditions
                                        </Link>{' '}
                                        for more details.
                                    </p>
                                </div>

                            </motion.section>
                        )}
                    </AnimatePresence>
                </div>


                <div className="overflow-hidden hidden lg:block">
                    <div
                        onClick={() => toggleReturn()}
                        className="mb-[20px] flex cursor-pointer justify-between px-[15px] py-[15px] bg-[#f5f5f5] rounded-[5px]"
                    >
                        <h4 className="font-medium text-11black">Return Policies</h4>
                        <div className="relative">
                            <FontAwesomeIcon
                                icon={faMinus}
                                className="text-87black"
                            />
                            <FontAwesomeIcon
                                icon={faMinus}
                                className={`${isReturnOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                            />
                        </div>
                    </div>
                    <AnimatePresence initial={false}>
                        {isReturnOpen && (
                            <motion.section
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{ type: 'spring', duration: 1, bounce: 0 }}
                            >
                                <div className="pb-[20px] px-[15px]">
                                    <p className="mb-[15px] leading-[28px] text-55black">
                                        Returns will be accepted for up to 10 days
                                        of Customer’s receipt or tracking number on
                                        unworn items. You, as a Customer, are
                                        obliged to inform us via email before you
                                        return the item, only in the case of:
                                    </p>
                                    <p className="leading-[28px] text-55black">
                                        – Received the wrong item.
                                    </p>
                                    <p className="leading-[28px] text-55black">
                                        – Item arrived not as expected (ie. damaged
                                        packaging).
                                    </p>
                                    <p className="leading-[28px] text-55black">
                                        – Item had defects.
                                    </p>
                                    <p className="leading-[28px] text-55black">
                                        – Over delivery time.
                                    </p>
                                    <p className="mb-[15px] leading-[28px] text-55black">
                                        – The shipper does not allow the goods to be
                                        inspected before payment.
                                    </p>
                                    <p className="leading-[28px] text-55black">
                                        The returned product(s) must be in the
                                        original packaging, safety wrapped,
                                        undamaged and unworn. This means that the
                                        item(s) must be safely packed in a carton
                                        box for protection during transport,
                                        possibly the same carton used to ship to you
                                        as a customer.
                                    </p>
                                </div>
                            </motion.section>
                        )}
                    </AnimatePresence>
                </div>
            </section>
            <FeaturedProducts />
        </>
    )
}

export default ProductId
