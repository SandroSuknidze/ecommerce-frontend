import Link from "next/link";
import collection1 from "@/public/assets/collections/fashion.webp";
import Image from "next/image";
import {CartItem} from "@/components/CartItem";


function Cart() {
    return (
        <>
            <div className="w-[1260px] m-auto">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[59px] mb-[5px] text-[45px]">Your Cart</h1>
                    <nav>
                        <ol className="text-55black">
                            <li className="inline">
                                <Link href="/">Home / </Link>
                            </li>
                            <li className="inline">Your Shopping Cart</li>
                        </ol>
                    </nav>
                </div>
                <div className="flex gap-[30px]">
                    <div className="w-3/4">
                        <table className="border-collapse border border-[#ebebeb] w-full">
                            <thead>
                                <tr>
                                    <th className="border border-[#ebebeb] p-4 text-left font-medium">Product</th>
                                    <th className="border border-[#ebebeb] p-4 text-left font-medium">Quantity</th>
                                    <th className="border border-[#ebebeb] p-4 text-left font-medium">Total</th>
                                    <th className="border border-[#ebebeb] p-4 w-1/12"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartItem />
                                <CartItem />
                                <CartItem />

                            </tbody>
                        </table>
                    </div>
                    <div className="w-1/4"></div>
                </div>
            </div>
        </>
    );
}

export default Cart;