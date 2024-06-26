import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {useState} from "react";
import Image from "next/image";
import {motion} from 'framer-motion'


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

import minusIcon from "@/assets/minus-icon.svg";
import plusIcon from "@/assets/plus-icon.svg";
import sizeIcon from "@/assets/size-icon.svg";
import askIcon from "@/assets/ask-icon.svg";
import shareIcon from "@/assets/share-icon.svg";
import estIcon from "@/assets/est-delivery-icon.svg";
import returnIcon from "@/assets/return-icon.svg";
import washIcon from "@/assets/description/wash.png";
import ironIcon from "@/assets/description/iron.png";
import bleachIcon from "@/assets/description/bleach.png";
import dryIcon from "@/assets/description/dry.png";
import tumbleIcon from "@/assets/description/tumble.png";
import paymentPicture from "@/assets/product-payment.png";


import HeartIcon from "@/assets/HeartIcon";
import SizeGuideModal from "@/components/SizeGuideModal";
import {AskQuestionModal} from "@/components/AskQuestionModal";
import {ShareModal} from "@/components/ShareModal";
import Link from "next/link";
import CollectionCard from "@/components/CollectionCard";
import collection2 from "@/assets/collections/collection2.webp";

function Product() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [size, setSize] = useState("S");
    const [color, setColor] = useState("blue");
    const [itemCount, setItemCount] = useState(1);

    const [isSizeGuidModalOpen, setIsSizeGuidModalOpen] = useState(false);
    const [isAskQuestionModalOpen, setIsAskQuestionModalOpen] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const [section, setSection] = useState(1);

    const sale = "20.00";
    const price = "40.00";

    function incrementCount() {
        setItemCount(prevItemCount => prevItemCount + 1);
    }

    function decrementCount() {
        if (itemCount > 1) {
            setItemCount(prevItemCount => prevItemCount - 1);
        }
    }

    function toggleSizeGuideModal() {
        setIsSizeGuidModalOpen(!isSizeGuidModalOpen);
    }

    function toggleAskQuestionModal() {
        setIsAskQuestionModalOpen(!isAskQuestionModalOpen);
    }

    function toggleShareModal() {
        setIsShareModalOpen(!isShareModalOpen);
    }

    return (
        <>
            {isSizeGuidModalOpen && <SizeGuideModal toggleSizeGuideModal={toggleSizeGuideModal}/>}
            {isAskQuestionModalOpen && <AskQuestionModal toggleAskQuestionModal={toggleAskQuestionModal}/>}
            {isShareModalOpen && <ShareModal toggleShareModal={toggleShareModal}/>}
            <div className="max-w-[1290px] m-auto">
                <nav className="py-[25px]">
                    <ol className="text-[14px]">
                        <li className="inline text-11black">Home /</li>
                        <li className="inline text-11black">Winter Coat /</li>
                        <li className="inline text-55black">Square Textured Striped</li>
                    </ol>
                </nav>
                <div className="justify-center m-auto flex">
                    <div className="w-1/2 max-h-[800px] flex flex-row pr-[15px] gap-[10px]">
                        <div className=" w-[8%] select-none">
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
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
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
                                thumbs={{swiper: thumbsSwiper}}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                                </SwiperSlide>
                            </Swiper>
                        </div>


                    </div>
                    <div className="w-1/2 px-[15px]">
                        <div>
                            <div
                                className="rounded-[12px] inline-block mb-[5px] leading-3 bg-red-600 text-white px-[12px] py-[6px] text-[13px]">
                                -50%
                            </div>
                            <h1 className="mb-[5px] text-[30px] text-11black">
                                Square Textured Striped
                            </h1>
                            <div className="text-[10px] leading-[28px] flex">
                                <div>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                </div>
                                <div className="text-[14px] ml-[10px] text-55black">
                                    2 reviews
                                </div>
                            </div>
                            <div className="mt-[3px] py-[20px] font-medium flex m-auto">
                                {sale && (
                                    <div className="text-red-600 text-[30px]">
                                        ${sale}
                                    </div>
                                )}
                                <div
                                    className={`${sale ? 'line-through text-gray-400 my-auto ml-[5px] font-normal text-[20px]' : 'text-[#111111]'}`}>
                                    ${price}
                                </div>

                            </div>
                            <div className="text-55black">
                                The garments labelled as committed are products that have been produced using
                                sustainable
                                fibres or processes, reducing their environmental impact.
                            </div>
                            <div className="mt-[20px]">
                                <fieldset>
                                    <legend>
                                        <span className="text-55black ">Size: </span>
                                        <span className="text-11black font-medium">{size}</span>
                                    </legend>
                                    <div className="flex gap-[10px] mt-[10px]">
                                        <div onClick={() => setSize("S")}
                                             className={`${size === "S" ? 'bg-black text-white' : 'bg-white'} 
                                             border-[1px] rounded-[3px] px-[22px] py-[3px] border-[#ebebeb] cursor-pointer
                                             hover:bg-black hover:text-white transition duration-500`}>
                                            S
                                        </div>
                                        <div onClick={() => setSize("M")}
                                             className={`${size === "M" ? 'bg-black text-white' : 'bg-white'} 
                                             border-[1px] rounded-[3px] px-[22px] py-[3px] border-[#ebebeb] cursor-pointer
                                             hover:bg-black hover:text-white transition duration-500`}> M
                                        </div>
                                        <div onClick={() => setSize("L")}
                                             className={`${size === "L" ? 'bg-black text-white' : 'bg-white'} 
                                             border-[1px] rounded-[3px] px-[22px] py-[3px] border-[#ebebeb] cursor-pointer
                                             hover:bg-black hover:text-white transition duration-500`}> L
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="mt-[20px]">
                                <fieldset>
                                    <legend>
                                        <span className="text-55black ">Color: </span>
                                        <span className="text-11black font-medium">{color}</span>
                                    </legend>
                                    <div className="flex gap-[10px] mt-[10px]">
                                        <div onClick={() => setColor("blue")}
                                             className={`${color === "blue" && 'border-black'} 
                                             border-[1px] w-[32px] h-[32px] bg-[#3f8ad1] rounded-full border-[#ebebeb] cursor-pointer
                                             hover:border-black transition duration-500`}>
                                            <div className="border-2 border-white w-[30px] h-[30px] rounded-full">

                                            </div>
                                        </div>
                                        <div onClick={() => setColor("beige")}
                                             className={`${color === "beige" && 'border-black'} 
                                             border-[1px] w-[32px] h-[32px] bg-[#f5f5dc] rounded-full border-[#ebebeb] cursor-pointer
                                             hover:border-black transition duration-500`}>
                                            <div className="border-2 border-white w-[30px] h-[30px] rounded-full">

                                            </div>
                                        </div>
                                        <div onClick={() => setColor("pink")}
                                             className={`${color === "pink" && 'border-black'} 
                                             border-[1px] w-[32px] h-[32px] bg-[#fcd1db] rounded-full border-[#ebebeb] cursor-pointer
                                             hover:border-black transition duration-500`}>
                                            <div className="border-2 border-white w-[30px] h-[30px] rounded-full">

                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="mt-[25px] border-b-[1px] border-[#ebebeb] pb-[20px]">
                                <div className="flex gap-[30px]">
                                    <div className="flex gap-[10px] cursor-pointer" onClick={toggleSizeGuideModal}>
                                        <Image src={sizeIcon} alt="Size Icon"/>
                                        <div>Size Guide</div>
                                    </div>
                                    <div className="flex gap-[10px] cursor-pointer" onClick={toggleAskQuestionModal}>
                                        <Image src={askIcon} alt="Ask Icon"/>
                                        <div>Ask a Question</div>
                                    </div>
                                    <div className="flex gap-[10px] cursor-pointer" onClick={toggleShareModal}>
                                        <Image src={shareIcon} alt="Share Icon"/>
                                        <div>Share</div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex h-[50px] select-none mt-[20px] gap-[20px]">
                                <div className="flex w-full bg-[#F5F5F5] rounded-full border-[1px] border-[#ebebeb]">
                                    <div className="w-1/4 cursor-pointer flex justify-center" onClick={decrementCount}>
                                        <Image src={minusIcon} alt="Minus Icon"/>
                                    </div>
                                    <div className="w-2/4 flex justify-center m-auto">{itemCount}</div>
                                    <div className="w-1/4 cursor-pointer flex justify-center" onClick={incrementCount}>
                                        <Image src={plusIcon} alt="Plus Icon"/>
                                    </div>
                                </div>

                                <button type="submit" className="w-full px-[55px] py-[14px] border-[1px] text-[12px] bg-black
                                            text-white font-semibold border-[#ebebeb] rounded-[30px] uppercase">Add To
                                    Cart
                                </button>
                                <div
                                    className="bg-white hover-parent-heart transition duration-300 border-[1px] border-[#ebebeb] hover:bg-black rounded-full p-[18px] cursor-pointer">
                                    <HeartIcon
                                        className="transition duration-300 hover-child-heart border-[#ebebeb] uppercase hover:border-black"/>
                                </div>

                            </div>

                            <div className="mt-[25px] border-b-[1px] border-[#ebebeb] pb-[25px] text-55black">
                                <div className="flex gap-[15px] leading-[28px] mb-[10px]">
                                    <Image src={estIcon} alt="Estimate Delivery Icon"/>
                                    <p>Estimate delivery times: <strong className="text-11black font-medium">3-6
                                        days</strong> (International)</p>
                                </div>
                                <div className="flex gap-[15px] leading-[28px]">
                                    <Image src={returnIcon} alt="Return Icon"/>
                                    <p>Return within <strong className="text-11black font-medium">45 days</strong> of
                                        purchase. Duties & taxes are non-refundable.</p>
                                </div>
                            </div>
                            <div className="mt-[30px] py-[25px] border-[1px] border-[#ebebeb] rounded-[5px] flex justify-center relative">
                                <label className="absolute top-[-13px] bg-white px-[20px] font-medium">Guarantee safe checkout</label>
                                <div>
                                    <Image src={paymentPicture} alt="Payment Methods"/>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>


            </div>
            <section className="py-[100px] border-y-[1px] border-[#ebebeb]">
                <div className="max-w-[1290px] m-auto">
                    <ul className="flex justify-center gap-[20px] mb-[45px]">
                        <li onClick={() => setSection(1)}
                            className={`${section === 1 ? "bg-11black text-white" : "bg-[#f5f5f5] text-11black"} inline-block px-[30px] py-[10px] transition duration-300 cursor-pointer
                                        font-semibold rounded-[30px] focus:bg-11black focus:text-white`}>Description
                        </li>
                        <li onClick={() => setSection(2)}
                            className={`${section === 2 ? "bg-11black text-white" : "bg-[#f5f5f5] text-11black"} inline-block px-[30px] py-[10px] transition duration-300 cursor-pointer
                                        font-semibold rounded-[30px] focus:bg-11black focus:text-white`}>Shipping &
                            Returns
                        </li>
                        <li onClick={() => setSection(3)}
                            className={`${section === 3 ? "bg-11black text-white" : "bg-[#f5f5f5] text-11black"} inline-block px-[30px] py-[10px] transition duration-300 cursor-pointer
                                        font-semibold rounded-[30px] focus:bg-11black focus:text-white`}>Return Policies
                        </li>
                    </ul>


                    {section === 1 &&
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.7, ease: "easeOut"}}
                        >
                            <div>
                                <div className="flex w-full gap-[30px]">
                                    <div className="w-1/2">
                                        <h2 className="text-[20px] mb-[10px] font-medium">Outstanding Features</h2>
                                        <p className="text-55black leading-[28px]">The garments labelled as
                                            committed are products that have been produced using
                                            sustainable fibres or processes, reducing their environmental impact.
                                            Umino’s goal is to support the implementation of practices more
                                            committed to the environment.
                                        </p>
                                        <br/>
                                        <p className="text-55black leading-[28px]">– Tonal stitching: 98% cotton, 2%
                                            elastane.</p>
                                        <p className="text-55black leading-[28px]">– Supple and stretch knit with a
                                            rich touch of wool.</p>
                                        <p className="text-55black leading-[28px]">– Model: Model is 6′1″, wearing a
                                            size M.</p>
                                        <p className="text-55black leading-[28px]">– Caring for your clothes is
                                            caring for the environment.</p>
                                    </div>
                                    <div className="w-1/2">
                                        <h2 className="text-[20px] mb-[10px] font-medium">Outstanding Features</h2>
                                        <div className="flex gap-[10px] mb-[15px]">
                                            <Image src={washIcon} alt="Wash"/>
                                            <p className="text-55black leading-[28px]">Machine wash max. 30ºC. Short
                                                spin.</p>
                                        </div>
                                        <div className="flex gap-[10px] mb-[15px]">
                                            <Image src={ironIcon} alt="Iron"/>
                                            <p className="text-55black leading-[28px]">Iron maximum 110ºC.</p>
                                        </div>
                                        <div className="flex gap-[10px] mb-[15px]">
                                            <Image src={bleachIcon} alt="Bleach"/>
                                            <p className="text-55black leading-[28px]">Do not bleach/bleach.</p>
                                        </div>
                                        <div className="flex gap-[10px] mb-[15px]">
                                            <Image src={dryIcon} alt="Dry"/>
                                            <p className="text-55black leading-[28px]">Do not dry clean.</p>
                                        </div>
                                        <div className="flex gap-[10px] mb-[15px]">
                                            <Image src={tumbleIcon} alt="Tumble"/>
                                            <p className="text-55black leading-[28px]">Tumble dry, medium hear.</p>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="text-55black leading-[28px]">
                                    We work with monitoring programmes to ensure compliance with our social,
                                    environmental and
                                    health and safety standards for our garments. To assess compliance, we have
                                    developed a programme of audits and continuous improvement plans. Made of
                                    super-soft cotton, the Organic Cotton Cutaway Tank features a high neck and
                                    back, and a slight curve at the shoulders, which makes it extra flattering. If
                                    there’s one thing the ’90s got right, it’s the basics.

                                </div>
                            </div>
                        </motion.div>
                    }

                    {section === 2 &&
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.7, ease: "easeOut"}}
                        >
                            <div>
                                <p className="text-55black leading-[28px] mb-[15px]">
                                    For all orders exceeding a value of 100USD shipping is offered for free.
                                </p>
                                <p className="text-55black leading-[28px] mb-[15px]">
                                    Returns will be accepted for up to 10 days of Customer’s receipt or
                                    tracking number on unworn items.
                                    You, as a Customer, are obliged to inform us via email before you return
                                    the item.
                                </p>
                                <p className="text-55black leading-[28px] mb-[15px]">
                                    Otherwise, standard shipping charges apply. Check out our delivery
                                    <Link href="/" className="text-11black"> Terms & Conditions</Link> for
                                    more details.
                                </p>
                            </div>
                        </motion.div>
                    }
                    {section === 3 &&
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.7, ease: "easeOut"}}
                        >
                            <div>
                                <p className="text-55black leading-[28px] mb-[15px]">
                                    Returns will be accepted for up to 10 days of Customer’s receipt
                                    or
                                    tracking number on unworn items.
                                    You, as a Customer, are obliged to inform us via email before
                                    you return the item, only in the case of:
                                </p>
                                <p className="text-55black leading-[28px]">
                                    – Received the wrong item.
                                </p>
                                <p className="text-55black leading-[28px]">
                                    – Item arrived not as expected (ie. damaged packaging).
                                </p>
                                <p className="text-55black leading-[28px]">
                                    – Item had defects.
                                </p>
                                <p className="text-55black leading-[28px]">
                                    – Over delivery time.
                                </p>
                                <p className="text-55black leading-[28px] mb-[15px]">
                                    – The shipper does not allow the goods to be inspected before
                                    payment.
                                </p>
                                <p className="text-55black leading-[28px]">
                                    The returned product(s) must be in the original packaging,
                                    safety wrapped, undamaged and unworn.
                                    This means that the item(s) must be safely packed in a carton
                                    box for protection during transport,
                                    possibly the same carton used to ship to you as a customer.
                                </p>
                            </div>
                        </motion.div>
                    }


                </div>
            </section>
            <section className="py-[100px]">
                <div className="max-w-[1290px] m-auto">
                    <div className="mb-[15px]">
                        <h2 className="text-[40px] text-center mb-[5px]">Featured Products</h2>
                        <p className="text-55black text-center">Don&apos;t forget! The products that you viewed. Add it
                            to cart now.</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 max-w-[1290px] mx-auto px-[30px]">

                    <CollectionCard title={"Square Textured Striped"} imageSrc={collection2} price={"169.00"}
                                    sale={"143.00"}/>
                    <CollectionCard title={"Square Textured Striped"} imageSrc={collection2} price={"300.00"}
                                    sale={"150.00"}/>
                    <CollectionCard title={"Square Textured Striped"} imageSrc={collection2} price={"300.00"}
                                    sale={"150.00"}/>
                    <CollectionCard title={"Square Textured Striped"} imageSrc={collection2} price={"300.00"}
                                    sale={"150.00"}/>
                    <CollectionCard title={"Square Textured Striped"} imageSrc={collection2} price={"300.00"}
                                    sale={"150.00"}/>

                </div>

            </section>
        </>
);
}

export default Product;



