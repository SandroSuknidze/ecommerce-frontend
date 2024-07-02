import Link from 'next/link'
import logo from '@/public/assets/logo.png'
import Image from 'next/image'
import SearchIcon from '@/public/assets/SearchIcon'
import AvatarIcon from '@/public/assets/AvatarIcon'
import WishlistIcon from '@/public/assets/WishlistIcon'
import CartIcon from '@/public/assets/CartIcon'
import en from '@/public/assets/en.webp'
import geo from '@/public/assets/geo.webp'
import arrowDown from '@/public/assets/arrow-down-icon.svg'
import arrowUp from '@/public/assets/arrow-up-icon.svg'
import { useEffect, useState } from 'react'
import correctIcon from '@/public/assets/correctIcon.svg'
import Search from '@/components/Search'

export function Header() {

    type Language = 'en' | 'geo';
    const [language, setLanguage] = useState<Language>('en')
    const [dropdown, setDropdown] = useState(false)

    const [isSearchOpen, setIsSearchOpen] = useState(false)

    function toggleDropdown() {
        setDropdown(!dropdown)
    }

    function selectLanguage(lang: string) {
        if (lang === 'en' || lang === 'geo') {
            setLanguage(lang as Language)
            setDropdown(false)
        }
    }

    function toggleSearch() {
        setIsSearchOpen(!isSearchOpen)
    }

    const [scrollPosition, setScrollPosition] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY
            setScrollPosition(position)

            if (position > 80) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {isSearchOpen && (
                <Search
                    toggleSearch={toggleSearch}
                />
            )}

            <header
                className={`relative z-[60] flex w-full transform flex-row border-y-[1px] border-y-[#ebebeb] bg-white duration-500`}
            >
                {/*${isVisible ? 'translate-y-0 fixed z-20 ' : ''}*/}
                <div className="my-[11px] w-full px-[30px] py-[11px]">
                    <div className="flex w-full flex-row justify-between">
                        <div className="my-auto w-1/4">
                            <div className="w-[95px]">
                                <Link href="/">
                                    <Image src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="2/4 my-auto flex flex-row">
                            <nav>
                                <ul className="font-medium">
                                    <li className="inline">
                                        <Link
                                            href="/"
                                            className="cursor-pointer px-[15px] py-[10px] transition duration-300 hover:text-red-600"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link
                                            href="/shop"
                                            className="cursor-pointer px-[15px] py-[10px] transition duration-300 hover:text-red-600"
                                        >
                                            Shop
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link
                                            href="/brands"
                                            className="cursor-pointer px-[15px] py-[10px] transition duration-300 hover:text-red-600"
                                        >
                                            Brands
                                        </Link>
                                    </li>
                                    <li className="relative inline cursor-pointer transition duration-300 hover:text-red-600">
                                        <Link
                                            href="/"
                                            className="px-[15px] py-[10px]"
                                        >
                                            Sale
                                        </Link>
                                        <div className="absolute bottom-[94%] right-[-4px] rounded-sm border-red-600 border-transparent bg-red-600 px-[6px] py-[3px] text-[9px] font-bold uppercase leading-[9px] text-white">
                                            hot
                                        </div>
                                        <div className="border-l-solid border-r-solid border-b-solid absolute bottom-[81%] right-[15px] h-0 w-0 rotate-180 border-b-[3px] border-l-[3px] border-r-[3px] border-b-red-600 border-l-transparent border-r-transparent"></div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex w-1/4 flex-row justify-end">
                            <div
                                className="my-auto ml-[20px]"
                                onClick={toggleSearch}
                            >
                                <SearchIcon className="cursor-pointer transition duration-300 hover:fill-red-600" />
                            </div>
                            <div className="my-auto ml-[20px]">
                                <Link href="/account/login">
                                    <AvatarIcon className="cursor-pointer transition duration-300 hover:fill-red-600" />
                                </Link>
                            </div>
                            <div className="relative my-auto ml-[20px]">
                                <Link href="/">
                                    <div className="hover-parent">
                                        <WishlistIcon className="hover-child cursor-pointer" />
                                        <div className="absolute left-[13px] top-[-9px] h-[18px] w-[18px] rounded-full border border-red-600 bg-red-600 text-center text-[10px] text-white">
                                            0
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="relative my-auto ml-[20px]">
                                <Link href="/cart">
                                    <div className="hover-parent">
                                        <CartIcon className="hover-child cursor-pointer" />
                                        <div className="absolute left-[13px] top-[-9px] h-[18px] w-[18px] rounded-full border border-red-600 bg-red-600 text-center text-[10px] text-white">
                                            0
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="my-auto ml-[20px]">
                                <div
                                    className="flex cursor-pointer flex-row rounded-[3px] border-[1px] p-[10px]"
                                    onClick={toggleDropdown}
                                >
                                    <Image
                                        src={language === 'en' ? en : geo}
                                        alt="Flag Icon"
                                        width="20"
                                        height="11"
                                        className="mr-2"
                                    />
                                    <Image
                                        src={dropdown ? arrowUp : arrowDown}
                                        alt="Arrow Icon"
                                        width="10"
                                    />
                                </div>
                                {dropdown && (
                                    <div className="absolute z-10 flex w-[60px] flex-col gap-[10px] rounded-[3px] border-[1px] bg-white py-[10px]">
                                        <div
                                            onClick={() => selectLanguage('en')}
                                            className="flex cursor-pointer gap-2 px-[10px] py-[5px] hover:bg-blue-600"
                                        >
                                            <Image
                                                src={en}
                                                alt=""
                                                width="20"
                                                className=""
                                            />
                                            {language === 'en' && (
                                                <Image
                                                    src={correctIcon}
                                                    alt=""
                                                    className="w-[10px]"
                                                />
                                            )}
                                        </div>
                                        <div
                                            onClick={() =>
                                                selectLanguage('geo')
                                            }
                                            className="flex cursor-pointer gap-2 px-[10px] py-[5px] hover:bg-blue-600"
                                        >
                                            <Image
                                                src={geo}
                                                alt=""
                                                width="20"
                                                className=""
                                            />
                                            {language === 'geo' && (
                                                <Image
                                                    src={correctIcon}
                                                    alt=""
                                                    className="w-[10px]"
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
