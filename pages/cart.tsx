import Link from "next/link";
import {CartItem} from "@/components/CartItem";
import { TextareaInputForm } from '@/components/TextareaInputForm'
import { useForm } from 'react-hook-form'
import { countries } from '@/data/countries'
import { zipCodeFormats } from '@/data/zipCodeFormats'


interface FormData {
    country: string;
    note: string;
    zipCode: string;
}

function Cart() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        mode: 'onSubmit',
    })

    const onSubmit = (data: object) => {
        console.log(data)
    }

    const selectedCountry = watch('country')

    const validateZipCode = (zipCode: string) => {
        if (!selectedCountry) return true; // No validation if no country is selected
        const format = zipCodeFormats[selectedCountry];
        if (!format) return true; // No validation if no format is defined for the selected country
        return format.test(zipCode) || `Invalid ZIP code for ${selectedCountry}`;
    };


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
                                    <th className="border border-[#ebebeb] p-4 w-6/12 text-left font-medium">Product</th>
                                    <th className="border border-[#ebebeb] p-4 w-3/12 text-left font-medium">Quantity</th>
                                    <th className="border border-[#ebebeb] p-4 w-2/12 text-left font-medium">Total</th>
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
                    <div className="w-1/4 py-[40px] px-[30px] bg-[#f5f5f5] rounded-[5px]">
                        <form onSubmit={handleSubmit(onSubmit)} method="post">
                            <div className="mb-[10px] flex flex-col">
                                <label htmlFor="" className="font-medium text-11black mb-[15px]">
                                    Add Order Note
                                </label>
                                <textarea placeholder="Add Order Note" {...register('note')}
                                          className={`h-[130px] overflow-hidden resize-none px-[20px] py-[10px] text-[14px] placeholder:text-[#555555] leading-[28px]
                               focus:border-[1px] focus:border-[#131313] focus:transition focus:duration-300
                               transition duration-300 outline-0 border-[1px] border-[#ebebeb] rounded-[20px]`}
                                />
                                <p className="text-red-600 text-[13px] mb-[5px] opacity-100 block">
                                    {errors?.note?.message || '\u00A0'}
                                </p>
                            </div>
                            <h2 className="text-11black mb-[10px] font-medium">Shipping</h2>
                            <div>
                                <label htmlFor="country" className="mb-[5px] text-[14px] text-55black">
                                    Country/region
                                </label>
                                <select
                                    id="country"
                                    {...register('country', { required: 'Country is required' })}
                                    className="px-[20px] py-[10px] w-full text-55black text-[14px] border-[1px] border-[#ebebeb] rounded-[30px]
                                    focus:border-[#131313] focus:transition focus:duration-300
                               transition duration-300 outline-0 classic"
                                >
                                    <option value="">Select a country</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                <p className="text-red-600 text-[13px] mb-[5px] opacity-100 block">
                                    {errors.country?.message || '\u00A0'}
                                </p>


                            </div>
                            <div className="mb-[20px] flex flex-col">
                                <label htmlFor="zipCode" className="mb-[5px] text-[14px] text-55black">
                                    Postal/ZIP Code
                                </label>
                                <input
                                    id="zipCode"
                                    type="text"
                                    placeholder="Enter ZIP code"
                                    {...register('zipCode', {
                                        required: 'ZIP code is required',
                                        validate: validateZipCode,
                                    })}
                                    className="px-[20px] py-[10px] text-[14px] border-[1px] border-[#ebebeb] rounded-[30px]"
                                />
                                <p className="text-red-600 text-[13px] mb-[5px] opacity-100 block">
                                    {errors.zipCode?.message || '\u00A0'}
                                </p>
                            </div>
                            <button type="submit" className="btn-submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;