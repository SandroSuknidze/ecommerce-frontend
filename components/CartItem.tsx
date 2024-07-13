import Image from 'next/image'
import collection1 from '@/public/assets/collections/fashion.webp'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { useEffect, useState } from 'react'
import minusIcon from '@/public/assets/minus-icon.svg'
import plusIcon from '@/public/assets/plus-icon.svg'
import { useCart } from '@/context/CartContext'

interface CartItemProps {
    dynamicCount?: boolean;
    id: string;
    title: string;
    price: number;
    sale_price?: number;
    image_path: string;
    quantity: number;
    size_id?: number;
    size_name?: string;
    color_id?: number;
    color_name?: string;
    onRemove: (id: string, color_id: number | undefined, size_id: number | undefined) => void;

}

export function CartItem({
                             id,
                             title,
                             price,
                             sale_price,
                             image_path,
                             quantity,
                             size_id,
                             size_name,
                             color_id,
                             color_name,
                             onRemove,
                             dynamicCount = true,
                         }: CartItemProps) {

    const [itemQuantity, setItemQuantity] = useState(quantity);
    const { removeItem, updateQuantity } = useCart();

    useEffect(() => {
        updateQuantity(id, itemQuantity, size_id, color_id);
    }, [itemQuantity]);

    const incrementCount = () => {
        setItemQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementCount = () => {
        if (itemQuantity > 1) {
            setItemQuantity(prevQuantity => prevQuantity - 1);
        }
    };



    return (
        <>
            <tr className="md:border-[#ebebeb] md:border-b-[1px]">
                <td className="border border-[#ebebeb] border-r-0 p-4 pr-0 w-1/12 md:border-0 md:p-0 md:py-8">
                    <div className="flex items-left">
                        <div className="w-[79px] h-[106px] mr-[20px] md:h-[133px] md:min-w-[100px]">
                            <Image
                                src={process.env.imageUrl + '' + image_path}
                                width={79}
                                height={106}
                                alt="picture"
                                className="rounded-[5px]"
                            />
                        </div>
                    </div>
                </td>
                <td className="border border-[#ebebeb] border-l-0 p-4 pl-0 md:border-0 md:flex md:justify-start md:p-0 md:pt-8">
                    <div className="flex flex-col justify-center">
                        <div className="text-11black font-medium">
                            <Link href="/shop">{title}</Link>
                        </div>
                        <div className="text-55black text-[14px]">{size_name} / {color_name}</div>
                        <div className="text-55black text-[14px]">${(sale_price || price).toFixed(2)}</div>
                    </div>
                </td>
                <td className="border border-[#ebebeb] p-4 md:border-0 md:w-full md:flex md:justify-start md:p-0 md:pt-2">
                    {dynamicCount ?
                        (
                            <div className="flex h-[47px] w-[112px] select-none rounded-[5px] border-[1px] border-[#ebebeb] bg-[#F5F5F5] md:h-[32px]">
                                <div className={`${itemQuantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} flex w-1/3 justify-center`} onClick={decrementCount}>
                                    <Image src={minusIcon} alt="Minus Icon" />
                                </div>
                                <div className="m-auto flex w-1/3 justify-center">{itemQuantity}</div>
                                <div className="flex w-1/3 cursor-pointer justify-center" onClick={incrementCount}>
                                    <Image src={plusIcon} alt="Plus Icon" />
                                </div>
                            </div>
                        ) : (
                            <div>{quantity}</div>
                        )}
                </td>
                <td className="border border-[#ebebeb] p-4 md:border-0 md:flex md:justify-start md:p-0 md:text-[14px] md:font-medium md:pt-1">
                    ${((sale_price || price) * quantity).toFixed(2)}
                </td>
                {dynamicCount ? (
                    <td className="border border-[#ebebeb] p-4 text-center md:border-0">
                        <button onClick={() => onRemove(id, color_id, size_id)} className="text-gray-500 hover:text-gray-800">
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </td>
                ) : (
                    <td className="border border-[#ebebeb] p-4 text-left md:border-0 md:text-right md:w-auto sm:text-[14px]">
                        <div>2024/07/06</div>
                    </td>
                )}

            </tr>

        </>
    )
}