import Link from "next/link";
import {CartItem} from "@/components/CartItem";
import { useForm } from 'react-hook-form'
import { countries } from '@/data/countries'
import { zipCodeFormats } from '@/data/zipCodeFormats'
import { toast } from 'react-toastify'
import { Empty } from '@/components/Empty'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import { YouMayAlsoLikeItem } from '@/components/YouMayAlsoLikeItem'
import { useCart } from '@/context/CartContext'


interface FormData {
    country: string;
    note: string;
    zipCode: string;
    city: string;
}

function Index() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        mode: 'onSubmit',
    })

    const { items, totalItems, removeItem, addItem, totalPrice } = useCart()


    const onSubmit = (data: object) => {
        console.log(data)
        toast.success('Order placed successfully!', {
            position: 'top-center',
        })
        reset();
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
            <div className="max-w-[1290px] m-auto px-[30px] lg:px-[15px]">
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
                {items.length > 0 ? (
                    <div className="flex lg:flex-col">
                    <div className="w-3/4 pr-[30px] lg:w-full lg:p-0">
                        <table className="border-collapse border border-[#ebebeb] w-full md:border-0">
                            <thead className="md:hidden">
                                <tr>
                                    <th className="border border-[#ebebeb] p-4 w-6/12 text-left font-medium" colSpan={2}>Product</th>
                                    <th className="border border-[#ebebeb] p-4 w-3/12 text-left font-medium">Quantity</th>
                                    <th className="border border-[#ebebeb] p-4 w-2/12 text-left font-medium">Total</th>
                                    <th className="border border-[#ebebeb] p-4 w-1/12"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {items.map((item, index) => (
                                <CartItem
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    sale_price={item.sale_price}
                                    image_path={item.image_path}
                                    quantity={item.quantity}
                                    size_name={item.size_name}
                                    color_name={item.color_name}
                                    size_id={item.size_id}
                                    color_id={item.color_id}
                                    onRemove={removeItem}
                                />
                            ))}
                            </tbody>
                        </table>
                        <div className="mt-[100px]">
                            <h2 className="mb-[15px] font-medium text-[20px]">You may also like</h2>
                            <Swiper
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                }}
                                modules={[Pagination]}
                                className="mySwiper4"
                            >
                                <SwiperSlide>
                                    <YouMayAlsoLikeItem price={125} sale={116} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <YouMayAlsoLikeItem price={125} sale={116} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <YouMayAlsoLikeItem price={125} sale={116} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <YouMayAlsoLikeItem price={125} sale={116} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="w-1/4 py-[40px] px-[30px] bg-[#f5f5f5] rounded-[5px] lg:w-full">
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
                                    {errors.note?.message || '\u00A0'}
                                </p>
                            </div>
                            <h2 className="text-11black mb-[10px] font-medium">Shipping</h2>
                            <div className="mb-[10px] flex flex-col">
                                <label htmlFor="country" className="mb-[5px] text-[14px] text-55black">
                                    Country/region
                                </label>
                                <select
                                    id="country"
                                    {...register('country', { required: 'Country is required' })}
                                    className="px-[20px] py-[10px] w-full text-55black text-[14px] border-[1px] border-[#ebebeb] rounded-[30px]
                                        focus:border-[#131313] focus:transition focus:duration-300 transition duration-300 outline-0 classic"
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
                            <div className="mb-[10px] flex flex-col">
                                <label htmlFor="city" className="mb-[5px] text-[14px] text-55black">
                                    City
                                </label>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder="Enter city"
                                    {...register('city', {
                                        required: 'City is required',
                                    })}
                                    className="px-[20px] py-[10px] text-[14px] border-[1px] border-[#ebebeb] rounded-[30px]"
                                />
                                <p className="text-red-600 text-[13px] mb-[5px] opacity-100 block">
                                    {errors.city?.message || '\u00A0'}
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
                            <div className="border-t-[1px] border-[#DEDEDE]">
                                <div className="flex justify-between text-[20px] font-medium mb-[5px] mt-[30px]">
                                    <p>Subtotal</p>
                                    <p>$115.00</p>
                                </div>
                                <div>
                                    <p className="text-[14px] text-55black">Taxes and shipping calculated at checkout</p>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-full h-[50px] mt-[30px] rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[20px] py-[10px] text-[12px] font-semibold uppercase text-white"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
                ) : (
                    <Empty title={"Your cart is currently empty."}/>
                )}


            </div>
        </>
    );
}

export default Index;