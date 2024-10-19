import Link from 'next/link'
import logo from '@/public/assets/logo.png'
import Image from 'next/image'
import SearchIcon from '@/public/assets/SearchIcon'
import AvatarIcon from '@/public/assets/AvatarIcon'
import WishlistIcon from '@/public/assets/WishlistIcon'
import CartIcon from '@/public/assets/CartIcon'
import en from '@/public/assets/en.webp'
import ka from '@/public/assets/ka.webp'
import arrowDown from '@/public/assets/arrow-down-icon.svg'
import arrowUp from '@/public/assets/arrow-up-icon.svg'
import {useEffect, useRef, useState} from 'react'
import correctIcon from '@/public/assets/correctIcon.svg'
import Search from '@/components/Search'
import burgerMenuIcon from '@/public/assets/burger-menu-icon.svg'
import BurgerMenu from '@/components/BurgerMenu'
import {useAuth} from '@/context/authContext'
import {useCart} from '@/context/CartContext'
import {useRouter} from 'next/router'
import {useTranslation} from 'next-i18next'
import {useWishlist} from '@/context/WishlistContext'
import {useClickAway} from 'react-use'


export function Header() {
    const router = useRouter();
    const {t} = useTranslation('common')

    const {isAuthenticated} = useAuth()
    const {totalItems} = useCart()
    const {totalWishlistItems} = useWishlist()

    type Language = 'en' | 'ka';
    const [language, setLanguage] = useState<Language>(router.locale as Language);
    const [dropdown, setDropdown] = useState(false)

    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)


    const dropdownRef = useRef(null);
    useClickAway(dropdownRef, () => {
        setDropdown(false);
    });

    function toggleDropdown() {
        setDropdown(!dropdown)
    }

    function selectLanguage(lang: any) {
        setLanguage(lang);
        router.push(router.pathname, router.asPath, {locale: lang});
        setDropdown(false);
    }

    function toggleSearch() {
        setIsSearchOpen(!isSearchOpen)
    }

    function toggleBurgerMenu() {
        setIsBurgerMenuOpen(!isBurgerMenuOpen)
    }

    useEffect(() => {
        setLanguage(router.locale as Language);
    }, [router.locale])


    const [translateY, setTranslateY] = useState(0);
    const lastScrollYRef = useRef(0);

    const getNavbarHeight = () => {
        return window.innerWidth <= 992 ? 52 : 70;
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - lastScrollYRef.current;
            console.log("currentScrollY: ", currentScrollY);
            console.log("current: ", lastScrollYRef.current);
            console.log("scrollDifference: ", scrollDifference);
            const navbarHeight = getNavbarHeight();

            if (scrollDifference > 0) {
                // Scrolling down
                setTranslateY(Math.max(-navbarHeight, translateY - scrollDifference));
            } else if (scrollDifference < 0) {
                // Scrolling up
                setTranslateY(Math.min(0, translateY - scrollDifference));
            }

            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [translateY]);
    return (
        <>
            {isSearchOpen && (
                <Search
                    toggleSearch={toggleSearch}
                />
            )}

            <BurgerMenu
                isOpen={isBurgerMenuOpen} toggleBurgerMenu={toggleBurgerMenu}
            />


            <header
                className={`z-[60] flex w-full transform flex-row border-y-[1px] border-y-[#ebebeb] bg-white sticky top-0`}
                style={{transform: `translateY(${translateY}px)`}}
            >
                <div className="my-[11px] w-full px-[30px] py-[11px] lg:my-0 md:px-[15px]">
                    <div className="flex w-full flex-row justify-between lg:h-[28px]">
                        <div className="my-auto hidden w-1/3 lg:block cursor-pointer">
                            <Image src={burgerMenuIcon} alt="Burger Menu Icon" onClick={toggleBurgerMenu}/>
                        </div>
                        <div className="my-auto w-1/4 lg:w-1/3 lg:flex lg:justify-center ">
                            <div className="w-[95px]">
                                <Link href="/">
                                    <Image src={logo} alt="logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="2/4 my-auto flex flex-row lg:hidden">
                            <nav>
                                <ul className="font-medium">
                                    <li className="inline">
                                        <Link
                                            href="/"
                                            className="cursor-pointer px-[15px] py-[10px] transition duration-300 hover:text-red-600"
                                        >
                                            {t('home')}
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link
                                            href="/shop"
                                            className="cursor-pointer px-[15px] py-[10px] transition duration-300 text-11black hover:text-red-600
                                                lg:hover:text-11black"
                                        >
                                            {t('shop')}
                                        </Link>
                                    </li>
                                    <li className="inline">
                                        <Link
                                            href="/brands"
                                            className="cursor-pointer px-[15px] py-[10px] transition duration-300 text-11black hover:text-red-600"
                                        >
                                            {t('brands')}
                                        </Link>
                                    </li>
                                    <li className="relative inline cursor-pointer transition duration-300 hover:text-red-600">
                                        <Link
                                            href="/sale"
                                            className="px-[15px] py-[10px]"
                                        >
                                            {t('sale')}
                                        </Link>
                                        <div
                                            className="absolute bottom-[94%] right-[-4px] rounded-sm border-red-600 border-transparent bg-red-600 px-[6px] py-[3px] text-[9px] font-bold uppercase leading-[9px] text-white">
                                            {t('hot')}
                                        </div>
                                        <div
                                            className="border-l-solid border-r-solid border-b-solid absolute bottom-[81%] right-[15px] h-0 w-0 rotate-180 border-b-[3px] border-l-[3px] border-r-[3px] border-b-red-600 border-l-transparent border-r-transparent"></div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex w-1/4 flex-row justify-end lg:w-1/3">
                            <div
                                className="my-auto ml-[20px]"
                                onClick={toggleSearch}
                            >
                                <SearchIcon className="cursor-pointer transition duration-300 hover:fill-red-600"/>
                            </div>
                            <div className="my-auto ml-[20px] lg:hidden">
                                <Link href={isAuthenticated ? '/account' : '/account/login'}>
                                    <AvatarIcon className="cursor-pointer transition duration-300 hover:fill-red-600"/>
                                </Link>
                            </div>
                            <div className="relative my-auto ml-[20px] lg:hidden">
                                <Link href="/wishlist">
                                    <div className="hover-parent">
                                        <WishlistIcon className="hover-child cursor-pointer"/>
                                        <div
                                            className="absolute left-[13px] top-[-9px] h-[18px] w-[18px] rounded-full border border-red-600 bg-red-600 text-center text-[10px] text-white">
                                            {totalWishlistItems()}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="relative my-auto ml-[20px] lg:pr-[10px]">
                                <Link href="/cart">
                                    <div className="hover-parent">
                                        <CartIcon className="hover-child cursor-pointer"/>
                                        <div
                                            className="absolute left-[13px] top-[-9px] h-[18px] w-[18px] rounded-full border border-red-600 bg-red-600 text-center text-[10px] text-white">
                                            {totalItems()}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="my-auto ml-[20px] select-none lg:hidden" ref={dropdownRef}
                            >
                                <div
                                    className="flex cursor-pointer flex-row rounded-[3px] border-[1px] p-[5px]"
                                    onClick={toggleDropdown}
                                >
                                    <Image
                                        src={language === 'en' ? en : ka}
                                        alt="Flag Icon"
                                        width={20}
                                        height={11}
                                        className="mr-2"
                                    />
                                    <Image
                                        src={dropdown ? arrowUp : arrowDown}
                                        alt="Arrow Icon"
                                        width={10}
                                        height={11}
                                    />
                                </div>
                                {dropdown && (
                                    <div
                                        className="absolute z-10 flex w-[50px] flex-col gap-[10px] rounded-[3px] border-[1px] bg-white py-[10px]">
                                        <div
                                            onClick={() => selectLanguage('en')}
                                            className="flex cursor-pointer gap-2 px-[5px] py-[5px] hover:bg-blue-600"
                                        >
                                            <Image
                                                src={en}
                                                alt="en"
                                                width={20}
                                                height={11}
                                            />
                                            {language === 'en' && (
                                                <Image
                                                    src={correctIcon}
                                                    alt="icon"
                                                    className="w-[10px]"
                                                />
                                            )}
                                        </div>
                                        <div
                                            onClick={() =>
                                                selectLanguage('ka')
                                            }
                                            className="flex cursor-pointer gap-2 px-[5px] py-[5px] hover:bg-blue-600"
                                        >
                                            <Image
                                                src={ka}
                                                alt="ka"
                                                width={20}
                                                height={11}
                                            />
                                            {language === 'ka' && (
                                                <Image
                                                    src={correctIcon}
                                                    alt="icon"
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
