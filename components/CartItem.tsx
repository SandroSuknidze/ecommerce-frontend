import Image from "next/image";
import collection1 from "@/public/assets/collections/fashion.webp";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons/faTrashCan";

export function CartItem() {
    return (
        <>
            <tr>
                <td className="border border-[#ebebeb] p-4">
                    <div className="flex items-center">
                        <div className="w-[79px] h-[106px] mr-[20px]">
                            <Image src={collection1} alt="picture"/>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-11black font-medium">
                                <Link href="/shop">Square Textured Striped</Link>
                            </div>
                            <div className="text-55black text-[14px]">S / Blue</div>
                            <div className="text-55black text-[14px]">$20.00</div>
                        </div>
                    </div>
                </td>
                <td className="border border-[#ebebeb] p-4">1</td>
                <td className="border border-[#ebebeb] p-4">$99.99</td>
                <td className="border border-[#ebebeb] p-4 text-center">
                    <button className="text-gray-500 hover:text-gray-800">
                        <FontAwesomeIcon icon={faTrashCan}/>
                    </button>
                </td>
            </tr>

        </>
    );
}