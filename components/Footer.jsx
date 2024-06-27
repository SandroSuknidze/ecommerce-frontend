import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import InstagramIcon from '@/public/assets/footer/InstagramIcon'
import TiktokIcon from '@/public/assets/footer/TiktokIcon'
import YoutubeIcon from '@/public/assets/footer/YoutubeIcon'
import TwitterIcon from '@/public/assets/footer/TwitterIcon'
import FacebookIcon from '@/public/assets/footer/FacebookIcon'

function Footer() {
    return (
        <footer className="mt-[100px] border-t-[1px] border-[#ebebeb]">
            <div className="mx-auto max-w-[1470px] px-[30px]">
                <div className="mb-[60px] mt-[100px]">
                    <div className="flex h-[320px] flex-row justify-between">
                        <div className="flex w-2/6 flex-col pr-[15px]">
                            <Image
                                src={logo}
                                alt="logo"
                                width={90}
                                className="mb-[30px]"
                            />
                            <div className="mb-[24px] text-[#555555]">
                                <p className="leading-[28px]">
                                    268 St, South New York/NY 98944, United
                                    States.
                                </p>
                                <p className="leading-[32px]">+222-1800-2628</p>
                                <p className="leading-[32px]">
                                    blueskytechcompany@gmail.com
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
                        <div className="w-1/6 px-[15px]">
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
                        <div className="w-1/6 px-[15px]">
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
                        <div className="w-2/6 px-[15px]">
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
                                    <form method="post" className="flex">
                                        <input
                                            type="email"
                                            placeholder="Enter your email..."
                                            autoComplete="off"
                                            className="mr-[10px] w-2/3 rounded-[30px] border-[1px] border-[#ebebeb] px-[20px] py-[10px] text-[14px] leading-[28px] outline-0 transition duration-300 placeholder:text-[#555555] focus:border-[1px] focus:border-[#131313] focus:transition focus:duration-300"
                                        />
                                        <button className="w-1/3 rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[20px] py-[10px] text-[12px] font-semibold uppercase text-white">
                                            Subscribe
                                        </button>
                                    </form>
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
