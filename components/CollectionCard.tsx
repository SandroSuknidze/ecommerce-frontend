import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import HeartIcon from '@/public/assets/HeartIcon'
import { XmarkIcon } from '@/public/assets/XmarkIcon'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/system'
import { toast } from 'react-toastify'
import { useCart } from '@/context/CartContext'
import { useTranslation } from 'next-i18next'

interface CollectionCardProps {
    id: number,
    imageSrc: string,
    title: string,
    sale?: number,
    price: number,
    isRemovable?: boolean,
    rating?: number
    size_id: number | undefined
    size_name: string
    color_id: number | undefined
    color_name: string
    colors: any
}

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#111111',
        fontSize: '12px',
    },
    '& .MuiRating-iconEmpty': {
        fontSize: '12px',
    }
})

function CollectionCard({
                            imageSrc,
                            title,
                            sale,
                            price,
                            rating,
                            size_id,
                            size_name,
                            color_id,
                            color_name,
                            id,
                            colors,
                            isRemovable = false,
                        }: CollectionCardProps) {
    let discount: number | undefined
    const { t } = useTranslation('common')

    const { addItem, items } = useCart();


    if (sale) {
        const salePrice = parseFloat(String(sale))
        discount = Math.round(100 - (salePrice * 100) / price)
    }

    const [hovered, setHovered] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 992px)')
        setIsLargeScreen(mediaQuery.matches)

        const handleResize = () => setIsLargeScreen(mediaQuery.matches)
        mediaQuery.addListener(handleResize)

        return () => {
            mediaQuery.removeListener(handleResize)
        }
    }, [])

    const handleMouseEnter = () => {
        if (isLargeScreen) {
            setHovered(true)
        }
    }

    const handleMouseLeave = () => {
        if (isLargeScreen) {
            setHovered(false)
        }
    }

    function func() {
        console.log('hi')
    }


    const addToCart = () => {
        toast.success('Item added to your cart!', {
            position: 'top-center'
        })
        const item = {
            id: id,
            title: title,
            price: price,
            sale_price: sale,
            image_path: imageSrc,
            quantity: 1,
            size_id: size_id,
            size_name: size_name,
            color_id: color_id,
            color_name: color_name,
        }
        addItem(item);
    };

    return (
        <div className="mb-[40px] overflow-hidden rounded-xl px-[15px]">
            <div
                className="relative max-h-[453px] max-w-full overflow-hidden rounded-xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link href={`/shop/products/${id}`} className="relative">
                    <Image
                        src={process.env.imageUrl + '' + imageSrc}
                        width={318}
                        height={423}
                        alt="collection"
                        className={`rounded-xl ${hovered ? 'scale-105' : ''} max-h-[453px] max-w-full cursor-pointer overflow-hidden transition duration-300`}
                    />
                </Link>
                {sale && <div className="absolute z-10 left-[20px] top-[16px] rounded-[12px] bg-red-600 px-[12px] py-[6px] text-[13px] leading-3 text-white
                                xs:text-[11px] xs:left-[10px] xs:top-[8px] xs:py-5px xs:px-[8px]">
                    -{discount}%
                </div>}
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

                    <button onClick={() => addToCart()} className={`${hovered ? 'opacity-100' : 'opacity-0'} 
                                    bottom-2 left-1/2 -translate-x-1/2 absolute mb-[7%] mt-auto w-[88%] rounded-[30px] 
                                    border-[1px] border-[#ebebeb] bg-white p-[10px] text-[12px] font-semibold uppercase 
                                    text-11black transition duration-500 hover:border-black hover:bg-black hover:text-white
                                    lg:opacity-100 xs:text-[11px] xs:p-[5px]`}>
                        {t('addToCart')}
                    </button>
                </div>
            </div>
            <div className="bg-white pt-[15px]  text-left">
                <div className="leading-[21px] h-[21px] xs:block xs:text-[16px]">
                    <Link href={`/shop/products/${id}`}>{title}</Link>
                </div>
                <div className="flex items-center h-[28px] text-[10px]">
                    <StyledRating name="read-only" value={rating} readOnly />
                </div>
                <div className="m-auto mt-[3px] h-[25px] items-center flex text-[14px] font-medium">
                    {sale !== null && <div className="text-red-600">${sale}</div>}
                    <div
                        className={`${sale !== null ? 'my-auto ml-[5px] font-normal text-gray-400 line-through' : 'text-[#111111]'}`}
                    >
                        ${price}
                    </div>
                </div>
                <div className="flex gap-[7px] mt-[10px]">
                    {colors?.map((color: any) => (
                        <div
                            key={color.id}
                            id={String(color.id)}
                            className={`h-[26px] w-[26px] rounded-full border-[1px] border-87black transition duration-500`}
                        >
                            <div
                                style={{ backgroundColor: color.color }}
                                className="h-[24px] w-[24px] rounded-full border-2 border-white"></div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default CollectionCard
