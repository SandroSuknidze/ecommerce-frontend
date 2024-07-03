import Link from 'next/link'

export function EmptyCart() {
    return (
        <>
            <div className="flex flex-col items-center py-[60px]">
                <h2 className="text-[20px] mb-[20px]">Your cart is currently empty.</h2>
                <Link href="/shop"
                      className=" rounded-[30px] border-[1px] border-[#ebebeb] bg-white px-[55px] py-[14px] text-[12px] font-semibold uppercase text-black transition duration-500 hover:bg-black hover:text-white"
                >
                    Continue Shopping
                </Link>
            </div>
        </>
    )
}