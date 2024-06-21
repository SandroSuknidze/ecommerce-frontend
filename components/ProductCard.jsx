import Image from "next/image";
import Link from "next/link";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ProductCard({ title, imageSrc, price, toggleSearch, sale=null}) {

    const formattedTitle = title.replace(/ /g, '-').toLowerCase();

    return (
        <div className="mb-[40px] overflow-hidden rounded-xl">
            <div className="max-h-[313px] max-w-full overflow-hidden rounded-xl">
                <Link href={`/shop/${formattedTitle}`} onClick={() => {toggleSearch()}}>
                    <Image src={imageSrc} alt="collection"
                           className="rounded-xl hover:scale-105 transition duration-300 cursor-pointer max-h-[313px] max-w-full overflow-hidden"/>
                </Link>
            </div>
            <div className="bg-white pt-[15px]">
                <div className="">
                    <Link href={`/shop/${formattedTitle}`} onClick={() => toggleSearch()}>{title}</Link>
                </div>
                <div className="text-[10px] leading-[28px]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="mt-[3px] text-[14px] font-medium flex m-auto">
                    {sale && (
                        <div className="text-red-600">
                            ${sale}
                        </div>
                    )}
                    <div className={`${sale ? 'line-through text-gray-400 my-auto ml-[5px] font-normal' : 'text-[#111111]'}`}>
                        ${price}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductCard;