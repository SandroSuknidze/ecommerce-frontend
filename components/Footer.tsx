import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import InstagramIcon from '@/public/assets/footer/InstagramIcon'
import TiktokIcon from '@/public/assets/footer/TiktokIcon'
import YoutubeIcon from '@/public/assets/footer/YoutubeIcon'
import TwitterIcon from '@/public/assets/footer/TwitterIcon'
import FacebookIcon from '@/public/assets/footer/FacebookIcon'
import InputForm from '@/components/InputForm'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Footer() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
    })

    const onSubmit = (data: object) => {
        console.log(data)

        toast.error('You have already subscribed to our newsletter.', {
            position: 'top-center',
        })
        reset();
    }

    return (
        <footer className="mt-[50px] border-t-[1px] border-[#ebebeb]">
            <div className="mx-auto max-w-[1470px] px-[30px] md:px-[15px] ">
                <div className="mb-[60px] mt-[100px] sm:mb-[10px] sm:mt-[50px]">
                    <div className="flex min-h-[320px] flex-row justify-between sm:flex-col sm:gap-[30px]">
                        <div className="flex w-3/6 xl:flex-col xl:w-1/2 xl:h-[500px] sm:!w-full sm:!h-auto sm:gap-[30px]">
                            <div className="flex w-2/3 flex-col pr-[15px] xl:w-full xl:h-[350px] sm:!h-auto">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={90}
                                    className="mb-[30px]"
                                />
                                <div className="mb-[24px] text-[#555555]">
                                    <p className="leading-[28px]">
                                        <a href="" target="_blank">
                                            268 St, South New York/NY 98944, United
                                            States.
                                        </a>
                                    </p>
                                    <p className="leading-[32px]">
                                        <a href="tel:+222-1800-2628">+222-1800-2628</a>
                                    </p>
                                    <p className="leading-[32px]">
                                        <a href="mailto:blueskytechcompany@gmail.com">blueskytechcompany@gmail.com</a>
                                    </p>
                                </div>
                                <ul className="flex flex-row gap-[12px]">
                                    <li className="cursor-pointer">
                                        <InstagramIcon />
                                    </li>
                                    <li className="cursor-pointer">
                                        <TiktokIcon />
                                    </li>
                                    <li className="cursor-pointer">
                                        <YoutubeIcon />
                                    </li>
                                    <li className="cursor-pointer">
                                        <TwitterIcon />
                                    </li>
                                    <li className="cursor-pointer">
                                        <FacebookIcon />
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/3 px-[15px] xl:w-full xl:px-0 xl:h-[200px] sm:!h-auto">
                                <h3 className="pb-[10px] text-[18px] font-medium leading-[23px]">
                                    Company
                                </h3>
                                <div className="pt-[15px]">
                                    <ul className="flex flex-col gap-[10px] text-[#555555]">
                                        <li className="leading-[28px]">About Us</li>
                                        <li className="leading-[28px]">
                                            Our Stores
                                        </li>
                                        <li className="leading-[28px]">
                                            Contact Us
                                        </li>
                                        <li className="leading-[28px]">
                                            Size Guide
                                        </li>
                                        <li className="leading-[28px]">
                                            My Account
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-3/6 xl:flex-col xl:w-1/2 sm:!w-full sm:!h-auto sm:gap-[30px]">
                            <div className="w-1/3 px-[15px] xl:w-full xl:h-[350px] xl:pr-0 sm:px-0 sm:!h-auto">
                                <h3 className="pb-[10px] text-[18px] font-medium leading-[23px]">
                                    Customer Service
                                </h3>
                                <div className="pt-[15px]">
                                    <ul className="flex flex-col gap-[10px] text-[#555555]">
                                        <li className="leading-[28px]">
                                            Privacy Policy
                                        </li>
                                        <li className="leading-[28px]">
                                            Refund Policy
                                        </li>
                                        <li className="leading-[28px]">
                                            Shipping & Return
                                        </li>
                                        <li className="leading-[28px]">
                                            Term & Conditions
                                        </li>
                                        <li className="leading-[28px]">
                                            Advanced Search
                                        </li>
                                        <li className="leading-[28px]">
                                            Theme FAQs
                                        </li>
                                        <li className="leading-[28px]">
                                            Store Locations
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-2/3 pl-[15px] xl:w-full xl:h-[200px] xl:pr-0 sm:px-0 sm:!w-full sm:!h-auto">
                                <h3 className="pb-[10px] text-[18px] font-medium leading-[23px]">
                                    Sign Up to Newsletter
                                </h3>
                                <div className="pt-[15px] text-[#555555]">
                                    <p className="leading-[28px]">
                                        Enter your email address to get $10 off your
                                        first order and free shipping.Updates
                                        information on Sales and Offers.
                                    </p>
                                    <div className="mt-[30px]">
                                        <form onSubmit={handleSubmit(onSubmit)} method="post" className="flex">
                                            <div className="w-2/3 mr-[10px]">
                                                <InputForm
                                                    name="Email"
                                                    type="email"
                                                    label={false}
                                                    register={register('email', {
                                                        required: 'Email is required',
                                                        validate: (value) => value.trim() !== '' || 'Email cannot be empty',
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                            message: 'Please enter a valid email address',
                                                        },
                                                        maxLength: {
                                                            value: 320,
                                                            message: 'Maximum number of characters reached',
                                                        },
                                                    })}
                                                    errorMessage={errors.email?.message}
                                                />
                                            </div>

                                            <button type="submit"
                                                    className="w-1/3 h-[50px] rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[20px] py-[10px] text-[12px] font-semibold uppercase text-white
                                                    md:px-[10px] md:text-[10px]">
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1410px] border-t-[1px] border-[#ebebeb] py-[30px] text-center">
                    <div>
                        <p className="leading-[38px] text-[#555555]">
                            © 2024 Umino Store. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
