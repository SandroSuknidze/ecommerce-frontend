import Image from "next/image";
import collection1 from "@/public/assets/collections/fashion.webp";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { useState } from 'react'
import minusIcon from '@/public/assets/minus-icon.svg'
import plusIcon from '@/public/assets/plus-icon.svg'

export function CartItem() {

    const [itemCount, setItemCount] = useState(1)

    function incrementCount() {
        setItemCount((prevItemCount) => prevItemCount + 1)
    }

    function decrementCount() {
        if (itemCount > 1) {
            setItemCount((prevItemCount) => prevItemCount - 1)
        }
    }

    const price = 20;


    return (
        <>
            <tr className="md:border-[#ebebeb] md:border-b-[1px]">
                <td className="border border-[#ebebeb] border-r-0 p-4 pr-0 w-1/12 md:border-0 md:p-0 md:py-8">
                    <div className="flex items-left">
                        <div className="w-[79px] h-[106px] mr-[20px] md:h-[133px] md:min-w-[100px]">
                            <Image src={collection1} alt="picture" className="rounded-[5px]"/>
                        </div>
                    </div>
                </td>
                <td className="border border-[#ebebeb] border-l-0 p-4 pl-0 md:border-0 md:flex md:justify-start md:p-0 md:pt-8">
                    <div className="flex flex-col justify-center">
                        <div className="text-11black font-medium">
                            <Link href="/shop">Square Textured Striped</Link>
                        </div>
                        <div className="text-55black text-[14px]">S / Blue</div>
                        <div className="text-55black text-[14px]">$20.00</div>
                    </div>
                </td>
                <td className="border border-[#ebebeb] p-4 md:border-0 md:w-full md:flex md:justify-start md:p-0 md:pt-2">
                    <div
                        className="flex h-[47px] w-[112px] select-none rounded-[5px] border-[1px] border-[#ebebeb] bg-[#F5F5F5] md:h-[32px]">
                        <div
                            className={`${itemCount === 1 && 'cursor-not-allowed'} flex w-1/3 cursor-pointer justify-center`}
                            onClick={decrementCount}
                        >
                            <Image
                                src={minusIcon}
                                alt="Minus Icon"
                            />
                        </div>
                        <div className="m-auto flex w-1/3 justify-center">
                            {itemCount}
                        </div>
                        <div
                            className="flex w-1/3 cursor-pointer justify-center"
                            onClick={incrementCount}
                        >
                            <Image src={plusIcon} alt="Plus Icon" />
                        </div>
                    </div>
                </td>
                <td className="border border-[#ebebeb] p-4 md:border-0 md:flex md:justify-start md:p-0 md:text-[14px] md:font-medium md:pt-1">
                    ${(price*itemCount).toFixed(2)}
                </td>
                <td className="border border-[#ebebeb] p-4 text-center md:border-0">
                    <button className="text-gray-500 hover:text-gray-800">
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </td>
            </tr>

        </>
    );
}