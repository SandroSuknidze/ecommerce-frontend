import Link from "next/link";

function NewCustomer() {
    return (
        <div>
            <div className="flex flex-col w-full">
                <h3 className="text-11black text-[24px] font-medium mb-[25px]">New Customer</h3>
                <p className="mb-[25px] text-55black">Sign up for early Sale access plus tailored new
                    arrivals, trends and promotions.
                    To opt out, click unsubscribe in our emails.</p>
                <Link href="/account/register">
                    <button type="submit" className="w-full px-[55px] py-[14px] border-[1px] text-[12px] bg-black
                                        text-white font-semibold border-[#ebebeb] rounded-[30px] uppercase">Create
                        Account
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NewCustomer;