import Image from 'next/image'
import collection1 from '@/public/assets/collections/fashion.webp'
import Link from 'next/link'

interface YouMayAlsoLikeItemProps {
    price: number,
    sale?: number | null,
}

export function YouMayAlsoLikeItem({ price, sale }: YouMayAlsoLikeItemProps) {
    return (
        <>
            <div className="flex items-center p-[10px] rounded-[10px] border-[1px] border-[#ebebeb] mr-[1px]">
                <div className="w-[79px] h-[106px] mr-[20px]">
                    <Image src={collection1} alt="picture" className="rounded-[5px]"/>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-11black text-left xs:text-[14px]">
                        <Link href="/shop/products/1">Square Textured Striped</Link>
                    </div>
                    <div className="mt-[3px] flex py-[20px] font-medium ">
                        {sale && (
                            <div className="text-[14px] text-red-600">
                                ${sale.toFixed(2)}
                            </div>
                        )}
                        <div
                            className={`${sale ? 'my-auto ml-[5px] text-[14px] font-normal text-gray-400 line-through' : 'text-[#111111]'}`}
                        >
                            ${price.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}