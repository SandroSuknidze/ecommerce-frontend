import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'

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
import CollectionCard from '@/components/CollectionCard'
import collection2 from '@/public/assets/collections/collection2.webp'

function Product() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [size, setSize] = useState('S')
    const [color, setColor] = useState('blue')
    const [itemCount, setItemCount] = useState(1)

    const [isSizeGuidModalOpen, setIsSizeGuidModalOpen] = useState(false)
    const [isAskQuestionModalOpen, setIsAskQuestionModalOpen] = useState(false)
    const [isShareModalOpen, setIsShareModalOpen] = useState(false)

    const [section, setSection] = useState(1)

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
            <div className="m-auto max-w-[1290px]">
                <nav className="py-[25px]">
                    <ol className="text-[14px]">
                        <li className="inline text-11black">Home /</li>
                        <li className="inline text-11black">Winter Coat /</li>
                        <li className="inline text-55black">
                            Square Textured Striped
                        </li>
                    </ol>
                </nav>
                <div className="m-auto flex justify-center">
                    <div className="flex max-h-[800px] w-1/2 flex-row gap-[10px] pr-[15px]">
                        <div className="w-[8%] select-none">
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
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="w-[88%] select-none">
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="w-1/2 px-[15px]">
                        <div>
                            <div className="mb-[5px] inline-block rounded-[12px] bg-red-600 px-[12px] py-[6px] text-[13px] leading-3 text-white">
                                -50%
                            </div>
                            <h1 className="mb-[5px] text-[30px] text-11black">
                                Square Textured Striped
                            </h1>
                            <div className="flex text-[10px] leading-[28px]">
                                <div>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="ml-[10px] text-[14px] text-55black">
                                    2 reviews
                                </div>
                            </div>
                            <div className="m-auto mt-[3px] flex py-[20px] font-medium">
                                {sale && (
                                    <div className="text-[30px] text-red-600">
                                        ${sale}
                                    </div>
                                )}
                                <div
                                    className={`${sale ? 'my-auto ml-[5px] text-[20px] font-normal text-gray-400 line-through' : 'text-[#111111]'}`}
                                >
                                    ${price}
                                </div>
                            </div>
                            <div className="text-55black">
                                The garments labelled as committed are products
                                that have been produced using sustainable fibres
                                or processes, reducing their environmental
                                impact.
                            </div>
                            <div className="mt-[20px]">
                                <fieldset>
                                    <legend>
                                        <span className="text-55black">
                                            Size:{' '}
                                        </span>
                                        <span className="font-medium text-11black">
                                            {size}
                                        </span>
                                    </legend>
                                    <div className="mt-[10px] flex gap-[10px]">
                                        <div
                                            onClick={() => setSize('S')}
                                            className={`${size === 'S' ? 'bg-black text-white' : 'bg-white'} cursor-pointer rounded-[3px] border-[1px] border-[#ebebeb] px-[22px] py-[3px] transition duration-500 hover:bg-black hover:text-white`}
                                        >
                                            S
                                        </div>
                                        <div
                                            onClick={() => setSize('M')}
                                            className={`${size === 'M' ? 'bg-black text-white' : 'bg-white'} cursor-pointer rounded-[3px] border-[1px] border-[#ebebeb] px-[22px] py-[3px] transition duration-500 hover:bg-black hover:text-white`}
                                        >
                                            {' '}
                                            M
                                        </div>
                                        <div
                                            onClick={() => setSize('L')}
                                            className={`${size === 'L' ? 'bg-black text-white' : 'bg-white'} cursor-pointer rounded-[3px] border-[1px] border-[#ebebeb] px-[22px] py-[3px] transition duration-500 hover:bg-black hover:text-white`}
                                        >
                                            {' '}
                                            L
                                        </div>
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
                                            {color}
                                        </span>
                                    </legend>
                                    <div className="mt-[10px] flex gap-[10px]">
                                        <div
                                            onClick={() => setColor('blue')}
                                            className={`${color === 'blue' && 'border-black'} h-[32px] w-[32px] cursor-pointer rounded-full border-[1px] border-[#ebebeb] bg-[#3f8ad1] transition duration-500 hover:border-black`}
                                        >
                                            <div className="h-[30px] w-[30px] rounded-full border-2 border-white"></div>
                                        </div>
                                        <div
                                            onClick={() => setColor('beige')}
                                            className={`${color === 'beige' && 'border-black'} h-[32px] w-[32px] cursor-pointer rounded-full border-[1px] border-[#ebebeb] bg-[#f5f5dc] transition duration-500 hover:border-black`}
                                        >
                                            <div className="h-[30px] w-[30px] rounded-full border-2 border-white"></div>
                                        </div>
                                        <div
                                            onClick={() => setColor('pink')}
                                            className={`${color === 'pink' && 'border-black'} h-[32px] w-[32px] cursor-pointer rounded-full border-[1px] border-[#ebebeb] bg-[#fcd1db] transition duration-500 hover:border-black`}
                                        >
                                            <div className="h-[30px] w-[30px] rounded-full border-2 border-white"></div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="mt-[25px] border-b-[1px] border-[#ebebeb] pb-[20px]">
                                <div className="flex gap-[30px]">
                                    <div
                                        className="flex cursor-pointer gap-[10px]"
                                        onClick={toggleSizeGuideModal}
                                    >
                                        <Image src={sizeIcon} alt="Size Icon" />
                                        <div>Size Guide</div>
                                    </div>
                                    <div
                                        className="flex cursor-pointer gap-[10px]"
                                        onClick={toggleAskQuestionModal}
                                    >
                                        <Image src={askIcon} alt="Ask Icon" />
                                        <div>Ask a Question</div>
                                    </div>
                                    <div
                                        className="flex cursor-pointer gap-[10px]"
                                        onClick={toggleShareModal}
                                    >
                                        <Image
                                            src={shareIcon}
                                            alt="Share Icon"
                                        />
                                        <div>Share</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[20px] flex h-[50px] select-none gap-[20px]">
                                <div className="flex w-full rounded-full border-[1px] border-[#ebebeb] bg-[#F5F5F5]">
                                    <div
                                        className="flex w-1/4 cursor-pointer justify-center"
                                        onClick={decrementCount}
                                    >
                                        <Image
                                            src={minusIcon}
                                            alt="Minus Icon"
                                        />
                                    </div>
                                    <div className="m-auto flex w-2/4 justify-center">
                                        {itemCount}
                                    </div>
                                    <div
                                        className="flex w-1/4 cursor-pointer justify-center"
                                        onClick={incrementCount}
                                    >
                                        <Image src={plusIcon} alt="Plus Icon" />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white"
                                >
                                    Add To Cart
                                </button>
                                <div className="hover-parent-heart cursor-pointer rounded-full border-[1px] border-[#ebebeb] bg-white p-[18px] transition duration-300 hover:bg-black">
                                    <HeartIcon className="hover-child-heart border-[#ebebeb] uppercase transition duration-300 hover:border-black" />
                                </div>
                            </div>

                            <div className="mt-[25px] border-b-[1px] border-[#ebebeb] pb-[25px] text-55black">
                                <div className="mb-[10px] flex gap-[15px] leading-[28px]">
                                    <Image
                                        src={estIcon}
                                        alt="Estimate Delivery Icon"
                                    />
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
                                        of purchase. Duties & taxes are
                                        non-refundable.
                                    </p>
                                </div>
                            </div>
                            <div className="relative mt-[30px] flex justify-center rounded-[5px] border-[1px] border-[#ebebeb] py-[25px]">
                                <label className="absolute top-[-13px] bg-white px-[20px] font-medium">
                                    Guarantee safe checkout
                                </label>
                                <div>
                                    <Image
                                        src={paymentPicture}
                                        alt="Payment Methods"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="border-y-[1px] border-[#ebebeb] py-[100px]">
                <div className="m-auto max-w-[1290px]">
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
            </section>
            <section className="py-[100px]">
                <div className="m-auto max-w-[1290px]">
                    <div className="mb-[15px]">
                        <h2 className="mb-[5px] text-center text-[40px]">
                            Featured Products
                        </h2>
                        <p className="text-center text-55black">
                            Don&apos;t forget! The products that you viewed. Add
                            it to cart now.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-[1290px] grid-cols-4 px-[30px]">
                    <CollectionCard
                        title={'Square Textured Striped'}
                        imageSrc={collection2}
                        price={'169.00'}
                        sale={'143.00'}
                    />
                    <CollectionCard
                        title={'Square Textured Striped'}
                        imageSrc={collection2}
                        price={'300.00'}
                        sale={'150.00'}
                    />
                    <CollectionCard
                        title={'Square Textured Striped'}
                        imageSrc={collection2}
                        price={'300.00'}
                        sale={'150.00'}
                    />
                    <CollectionCard
                        title={'Square Textured Striped'}
                        imageSrc={collection2}
                        price={'300.00'}
                        sale={'150.00'}
                    />
                    <CollectionCard
                        title={'Square Textured Striped'}
                        imageSrc={collection2}
                        price={'300.00'}
                        sale={'150.00'}
                    />
                </div>
            </section>
        </>
    )
}

export default Product
