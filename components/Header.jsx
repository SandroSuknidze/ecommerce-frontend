import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import SearchIcon from "@/assets/SearchIcon";
import AvatarIcon from "@/assets/AvatarIcon";
import WishlistIcon from "@/assets/WishlistIcon";
import CartIcon from "@/assets/CartIcon";
import en from "@/assets/en.webp";
import geo from "@/assets/geo.webp";
import arrowDown from "@/assets/arrow-down-icon.svg";
import arrowUp from "@/assets/arrow-up-icon.svg";
import {useState} from "react";

export function Header() {

    const [language, setLanguage] = useState('en');
    const [dropdown, setDropdown] = useState(false);


    function toggleDropdown() {
        setDropdown(!dropdown);
    }

    function selectLanguage(lang) {
        setLanguage(lang);
        setDropdown(false);
    }
    
    return (
        <header className="flex flex-row border-y-[1px] border-y-[#ebebeb]">
            <div className="py-[11px] my-[11px] px-[30px] w-full">
                <div className="flex flex-row justify-between w-full">
                    <div className="w-1/4">
                        <div className="w-[95px]">
                            <Link href="/">
                                <Image src={logo} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row 2/4">
                        <nav>
                            <ul className="font-medium">
                                <li className="inline">
                                    <Link href="/"
                                          className="px-[15px] py-[10px] hover:text-red-600 transition duration-300 cursor-pointer">
                                        Home
                                    </Link>
                                </li>
                                <li className="inline">
                                    <Link href="/shop"
                                          className="px-[15px] py-[10px] hover:text-red-600 transition duration-300 cursor-pointer">
                                        Shop
                                    </Link>
                                </li>
                                <li className="inline">
                                    <Link href="/"
                                          className="px-[15px] py-[10px] hover:text-red-600 transition duration-300 cursor-pointer">
                                        Brands
                                    </Link>
                                </li>
                                <li className="inline relative  hover:text-red-600 transition duration-300 cursor-pointer">
                                    <Link href="/"
                                          className="px-[15px] py-[10px]">
                                        Sale
                                    </Link>
                                    <div
                                        className="absolute bottom-[94%] right-[-4px] uppercase text-[9px] font-bold py-[3px] px-[6px] border-transparent rounded-sm bg-red-600 border-red-600 text-white leading-[9px]">
                                        hot
                                    </div>
                                    <div
                                        className="absolute bottom-[81%] right-[15px]  border-l-solid border-l-[3px] border-l-transparent border-r-solid border-r-[3px] border-r-transparent
                                        border-b-solid border-b-[3px] border-b-red-600 w-0 h-0 rotate-180"></div>

                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-row justify-end w-1/4">
                        <div className="my-auto ml-[20px]">
                            <SearchIcon
                                className="hover:fill-red-600 transition duration-300 cursor-pointer "/>
                        </div>
                        <div className="my-auto ml-[20px]">
                            <Link href="/">
                                <AvatarIcon
                                    className="hover:fill-red-600 transition duration-300 cursor-pointer"/>
                            </Link>
                        </div>
                        <div className="my-auto ml-[20px]">
                            <div className=" cursor-pointer py-1 flex flex-row" onClick={toggleDropdown}>
                                <Image src={language === 'en' ? en : geo} alt="" width="20" height="11" className="mr-2 "/>
                                <Image src={dropdown ? arrowUp : arrowDown} alt="arrow-icon"  width="10"/>


                            </div>
                            {dropdown && (
                                <div className="absolute z-10">
                                    <div onClick={() => selectLanguage("en")} className="cursor-pointer">
                                        <Image src={en} alt="" width="20" className="mr-2 pb-2"/>
                                    </div>
                                    <div onClick={() => selectLanguage("geo")} className="cursor-pointer">
                                        <Image src={geo} alt="" width="20" className="mr-2 pb-2"/>
                                    </div>
                                </div>
                            )}

                        </div>
                        <div className="my-auto relative ml-[20px]">
                            <Link href="/">
                                <WishlistIcon
                                    className="hover:fill-red-600 transition duration-300 cursor-pointer "/>
                                <div
                                    className="w-[18px] h-[18px] border border-red-600 rounded-full bg-red-600 text-white text-[10px] text-center absolute top-[-9px] left-[13px]">
                                    0
                                </div>
                            </Link>
                        </div>
                        <div className="my-auto relative ml-[20px]">
                            <Link href="/">
                                <CartIcon
                                    className="hover:fill-red-600 transition duration-300 cursor-pointer "/>
                                <div className="w-[18px] h-[18px] border border-red-600 rounded-full bg-red-600 text-white text-[10px] text-center absolute top-[-9px] left-[13px]">
                                    0
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </header>
    )
}