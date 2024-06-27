import Link from 'next/link'

function NewCustomer() {
    return (
        <div>
            <div className="flex w-full flex-col">
                <h3 className="mb-[25px] text-[24px] font-medium text-11black">
                    New Customer
                </h3>
                <p className="mb-[25px] text-55black">
                    Sign up for early Sale access plus tailored new arrivals, trends and
                    promotions. To opt out, click unsubscribe in our emails.
                </p>
                <Link href="/account/register">
                    <button
                        type="submit"
                        className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white"
                    >
                        Create Account
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NewCustomer
