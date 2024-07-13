import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/system'

interface ProductCardProps {
    title: string,
    imageSrc: StaticImageData,
    price: string,
    toggleSearch: () => void,
    sale?: string | null,
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

function ProductCard({ title, imageSrc, price, toggleSearch, sale = null }: ProductCardProps) {

    const formattedTitle = title.replace(/ /g, '-').toLowerCase()

    return (
        <div className="mb-[40px] overflow-hidden rounded-xl">
            <div className="max-w-full overflow-hidden rounded-xl">
                <Link href={`/shop/${formattedTitle}`} onClick={() => {
                    toggleSearch()
                }}>
                    <Image src={imageSrc} alt="collection"
                           className="rounded-xl hover:scale-105 transition duration-300 cursor-pointer max-h-[313px] max-w-full overflow-hidden lg:hover:scale-100" />
                </Link>
            </div>
            <div className="bg-white pt-[15px]">
                <div className="">
                    <Link href={`/shop/${formattedTitle}`} onClick={() => toggleSearch()}>{title}</Link>
                </div>
                <div className="text-[10px] leading-[28px]">
                    <StyledRating name="read-only" value={5} readOnly />
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
    )
}

export default ProductCard