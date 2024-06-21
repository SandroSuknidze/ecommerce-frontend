import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {useState} from "react";

import HeartIcon from "@/assets/HeartIcon";

function CollectionCard({ imageSrc, title, sale, price}) {

    const discount = Math.round(100 - (sale * 100 / price));

    const [hovered, setHovered] = useState(false)

    return (
        <div className="mb-[40px] overflow-hidden rounded-xl px-[15px]">
            <div className="max-h-[453px] max-w-full overflow-hidden rounded-xl relative"
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
            >
                <Link href={`/shop`} className="z-10">
                    <Image src={imageSrc} alt="collection"
                           className={`rounded-xl ${hovered ? 'scale-105' : ''} transition duration-300 cursor-pointer max-h-[453px] max-w-full overflow-hidden`}/>
                </Link>
                <div
                    className="absolute rounded-[12px] leading-3 bg-red-600 text-white top-[16px] left-[20px] px-[12px] py-[6px] text-[13px]">
                    -{discount}%
                </div>
                <div
                    className={`absolute inset-0 flex flex-col cursor-pointer items-center justify-center transition-opacity duration-300 select-none ${
                        hovered ? 'opacity-100 ' : 'opacity-0 '
                    }`}
                >
                    <div className="bg-white ml-[75%] mt-[5%] hover-parent-heart hover:bg-black rounded-full p-4 cursor-pointer">
                        <HeartIcon className="transition duration-300 hover-child-heart border-[#ebebeb] uppercase hover:border-black"/>
                    </div>

                    <button className="w-[90%] p-[10px] mt-auto mb-[7%] border-[1px] text-[12px] bg-white transition duration-500
                                        text-black font-semibold border-[#ebebeb] rounded-[30px] uppercase hover:bg-black hover:text-white hover:border-black">
                        Add To Card
                    </button>
                </div>
            </div>
            <div className="bg-white pt-[15px]">
                <div className="">
                    <Link href={`/shop`}>{title}</Link>
                </div>
                <div className="text-[10px] leading-[28px]">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div className="mt-[3px] text-[14px] font-medium flex m-auto">
                    {sale && (
                        <div className="text-red-600">
                            ${sale}
                        </div>
                    )}
                    <div
                        className={`${sale ? 'line-through text-gray-400 my-auto ml-[5px] font-normal' : 'text-[#111111]'}`}>
                        ${price}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CollectionCard;