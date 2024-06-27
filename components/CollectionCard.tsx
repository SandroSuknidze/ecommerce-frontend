import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { useState } from 'react'

import HeartIcon from '@/public/assets/HeartIcon'

interface CollectionCardProps {
    imageSrc: StaticImageData,
    title: string,
    sale?: number | null,
    price: number,
}

function CollectionCard({ imageSrc, title, sale, price }: CollectionCardProps) {
    let discount: number | undefined;

    if (sale) {
        const salePrice = parseFloat(String(sale));
        discount = Math.round(100 - (salePrice * 100) / price);
    }

    const [hovered, setHovered] = useState(false);

    return (
        <div className="mb-[40px] overflow-hidden rounded-xl px-[15px]">
            <div
                className="relative max-h-[453px] max-w-full overflow-hidden rounded-xl"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Link href={`/shop`} className="z-10">
                    <Image
                        src={imageSrc}
                        alt="collection"
                        className={`rounded-xl ${hovered ? 'scale-105' : ''} max-h-[453px] max-w-full cursor-pointer overflow-hidden transition duration-300`}
                    />
                </Link>
                <div className="absolute left-[20px] top-[16px] rounded-[12px] bg-red-600 px-[12px] py-[6px] text-[13px] leading-3 text-white">
                    -{discount}%
                </div>
                <div
                    className={`absolute inset-0 flex cursor-pointer select-none flex-col items-center justify-center transition-opacity duration-300 ${
                        hovered ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="hover-parent-heart ml-[75%] mt-[5%] cursor-pointer rounded-full bg-white p-4 hover:bg-black">
                        <HeartIcon className="hover-child-heart border-[#ebebeb] uppercase transition duration-300 hover:border-black" />
                    </div>

                    <button className="mb-[7%] mt-auto w-[90%] rounded-[30px] border-[1px] border-[#ebebeb] bg-white p-[10px] text-[12px] font-semibold uppercase text-black transition duration-500 hover:border-black hover:bg-black hover:text-white">
                        Add To Card
                    </button>
                </div>
            </div>
            <div className="bg-white pt-[15px]">
                <div className="">
                    <Link href={`/shop`}>{title}</Link>
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
