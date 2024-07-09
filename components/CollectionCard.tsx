import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { useState } from 'react'

import HeartIcon from '@/public/assets/HeartIcon'
import { XmarkIcon } from '@/public/assets/XmarkIcon'

interface CollectionCardProps {
    imageSrc: StaticImageData,
    title: string,
    sale?: number | null,
    price: number,
    isRemovable?: boolean,
}

function CollectionCard({ imageSrc, title, sale, price, isRemovable = false}: CollectionCardProps) {
    let discount: number | undefined;

    if (sale) {
        const salePrice = parseFloat(String(sale));
        discount = Math.round(100 - (salePrice * 100) / price);
    }

    const [hovered, setHovered] = useState(false);

    function func(){
        console.log("hi");
    }

    return (
        <div className="mb-[40px] overflow-hidden rounded-xl px-[15px]">
            <div
                className="relative max-h-[453px] max-w-full overflow-hidden rounded-xl"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Link href={`/shop/products/1`} className="relative" >
                    <Image
                        src={imageSrc}
                        alt="collection"
                        className={`rounded-xl ${hovered ? 'scale-105' : ''} max-h-[453px] max-w-full cursor-pointer overflow-hidden transition duration-300`}
                    />
                </Link>
                <div className="absolute z-10 left-[20px] top-[16px] rounded-[12px] bg-red-600 px-[12px] py-[6px] text-[13px] leading-3 text-white
                                xs:text-[11px] xs:left-[10px] xs:top-[8px] xs:py-5px xs:px-[8px]">
                    -{discount}%
                </div>
                <div>
                    <div onClick={func} className={`${hovered || isRemovable ? 'opacity-100' : 'opacity-0'} 
                    h-[45px] w-[45px] m-auto flex
                    top-0 right-5 absolute hover-parent-heart mt-[5%] cursor-pointer rounded-full bg-white p-4 transition duration-500 hover:bg-black
                    lg:opacity-100 xs:h-[35px] xs:w-[35px] xs:p-[11px] xs:right-[10px]`}>
                        {isRemovable ? (
                            <XmarkIcon className="transition duration-300 hover-child-heart" />
                        ) : (
                            <HeartIcon
                                className="hover-child-heart border-[#ebebeb] uppercase transition duration-300" />
                        )}
                    </div>

                    <button onClick={func} className={`${hovered ? 'opacity-100' : 'opacity-0'} 
                                    bottom-2 left-1/2 -translate-x-1/2 absolute mb-[7%] mt-auto w-[88%] rounded-[30px] 
                                    border-[1px] border-[#ebebeb] bg-white p-[10px] text-[12px] font-semibold uppercase 
                                    text-17black transition duration-500 hover:border-black hover:bg-black hover:text-white
                                    lg:opacity-100 xs:text-[11px] xs:p-[5px]`}>
                        Add To Cart
                    </button>
                </div>
            </div>
            <div className="bg-white pt-[15px]  text-left">
                <div className="xs:block xs:text-[16px]">
                    <Link href={`/shop/products/1`}>{title}</Link>
                </div>
                <div className="text-[10px] leading-[28px]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="m-auto mt-[3px] flex text-[14px] font-medium">
                    {sale && <div className="text-red-600">${sale}</div>}
                    <div
                        className={`${sale ? 'my-auto ml-[5px] font-normal text-gray-400 line-through' : 'text-[#111111]'}`}
                    >
                        ${price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
