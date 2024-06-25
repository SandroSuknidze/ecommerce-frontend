import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {useState} from "react";
import Image from "next/image";


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
import HeartIcon from "@/assets/HeartIcon";
import SizeGuideModal from "@/components/SizeGuideModal";
import sizeGuideModal from "@/components/SizeGuideModal";

function Product() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [size, setSize] = useState("S");
    const [color, setColor] = useState("blue");
    const [itemCount, setItemCount] = useState(1);

    const [isSizeGuidModalOpen, setIsSizeGuidModalOpen] = useState(false);


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

    return (
        <>
            {isSizeGuidModalOpen && <SizeGuideModal toggleSizeGuideModal={toggleSizeGuideModal}/>}
            <div className="max-w-[1290px] m-auto">
            <nav className="py-[25px]">
                <ol className="text-[14px]">
                    <li className="inline text-11black">Home / </li>
                    <li className="inline text-11black">Winter Coat / </li>
                    <li className="inline text-55black">Square Textured Striped</li>
                </ol>
            </nav>
            <div className=" justify-center m-auto flex">
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
                            The garments labelled as committed are products that have been produced using sustainable
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
                                <div className="flex gap-[10px] cursor-pointer">
                                    <Image src={askIcon} alt="Ask Icon" />
                                    <div>Ask a Question</div>
                                </div>
                                <div className="flex gap-[10px] cursor-pointer">
                                    <Image src={shareIcon} alt="Share Icon" />
                                    <div>Share</div>
                                </div>
                            </div>
                        </div>

                        <div>
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
                                        text-white font-semibold border-[#ebebeb] rounded-[30px] uppercase">Add To Cart
                                </button>
                                <div
                                    className="bg-white hover-parent-heart transition duration-300 border-[1px] border-[#ebebeb] hover:bg-black rounded-full p-[18px] cursor-pointer">
                                    <HeartIcon
                                        className="transition duration-300 hover-child-heart border-[#ebebeb] uppercase hover:border-black"/>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        </>
    );
}

export default Product;



