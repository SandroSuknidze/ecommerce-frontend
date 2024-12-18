import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Transition } from '@headlessui/react';
import Link from 'next/link'
import heartIcon from '@/public/assets/heart-icon.svg'
import Image from "next/image"
import AvatarIcon from '@/public/assets/AvatarIcon'
import en from '@/public/assets/en.webp'
import ka from '@/public/assets/ka.webp'
import closeIcon from '@/public/assets/white-close.svg'
import { useEffect, useState } from 'react'
import { useAuth } from '@/context/authContext'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

interface BurgerMenuProps {
    toggleBurgerMenu: () => void,
    isOpen: boolean;
}

const BurgerMenu = ({toggleBurgerMenu, isOpen}: BurgerMenuProps) => {
    const router = useRouter();
    const { t } = useTranslation('common')
    const [language, setLanguage] = useState<Language>(router.locale as Language);

    const { isAuthenticated, user, logout } = useAuth();

    type Language = 'en' | 'ka';

    async function selectLanguage(lang: any) {
        toggleBurgerMenu();
        await router.push(router.pathname, router.asPath, { locale: lang });
        setLanguage(lang);
    }

    async function Logout() {
        toggleBurgerMenu();
        await router.push('/')
        logout()
        toast.success(`${t('logoutSuccessful')}`, {
            position: 'top-center',
        })
    }

    useEffect(() => {
        setLanguage(router.locale as Language);
    }, [router.locale])

    return (
        <div className="absolute z-[70]">
            <Transition
                show={isOpen}
                enter="transition-transform duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <div className="fixed top-0 left-0 h-full max-w-[400px] bg-white shadow-lg z-[100] lg:w-[100%]">

                    <div className="px-[15px] bg-d7red uppercase text-[14px] text-white font-medium flex justify-between">
                        <div className="flex">
                            <div className="p-[15px] cursor-default">{t('menu')}</div>
                        </div>

                        <div className="flex mb-[1px]">
                            <button className="flex text-xl justify-center m-auto" onClick={toggleBurgerMenu}>
                                <Image src={closeIcon} alt="Close Icon" className="text-[12px]"/>
                            </button>
                        </div>
                    </div>
                    <nav className="px-[30px]">
                        <ul className="font-medium flex flex-col">
                            <li className="border-b-[1px] border-b-[#ebebeb]">
                                <Link
                                    href="/"
                                    className="cursor-pointer block py-[15px] w-[100%]"
                                    onClick={toggleBurgerMenu}
                                >
                                    {t('home')}
                                </Link>
                            </li>
                            <li className="border-b-[1px] border-b-[#ebebeb]">
                                <Link
                                    href="/shop"
                                    className="cursor-pointer block py-[15px] w-[100%]"
                                    onClick={toggleBurgerMenu}
                                >
                                    {t('shop')}
                                </Link>
                            </li>
                            <li className="border-b-[1px] border-b-[#ebebeb]">
                                <Link
                                    href="/brands"
                                    className="cursor-pointer block py-[15px] w-[100%]"
                                    onClick={toggleBurgerMenu}
                                >
                                    {t('brands')}
                                </Link>
                            </li>
                            <li className="relative cursor-pointer border-b-[1px] border-b-[#ebebeb]">
                                <Link
                                    href="/sale"
                                    className="cursor-pointer block py-[15px] w-[100%]"
                                    onClick={toggleBurgerMenu}
                                >
                                    {t('sale')}
                                </Link>
                                <div
                                    className={`${language === 'en' ? 'left-[44px]': 'left-[124px]'} absolute bottom-[39%] 
                                    rounded-sm border-red-600 border-transparent bg-red-600 px-[6px] py-[3px] text-[9px] 
                                    font-bold uppercase leading-[9px] text-white`}>
                                    {t('hot')}
                                </div>
                                <div
                                    className={`${language === 'en' ? 'left-[40px]': 'left-[120px]'} border-l-solid 
                                    border-r-solid border-b-solid absolute bottom-[51%] h-0 w-0 -rotate-90 border-b-[3px] 
                                    border-l-[3px] border-r-[3px] border-b-red-600 border-l-transparent 
                                    border-r-transparent`}></div>
                            </li>
                            <li className="cursor-pointer border-b-[1px] border-b-[#ebebeb] w-[100%]">
                                <Link href="/wishlist" className="flex gap-[15px] py-[15px]" onClick={toggleBurgerMenu} >
                                    <div className="w-[20px] flex items-center">
                                        <Image src={heartIcon} alt="Heart Icon" />
                                    </div>
                                    <div>{t('wishlist')}</div>
                                </Link>
                            </li>
                            <li className="cursor-pointer border-b-[1px] border-b-[#ebebeb] w-[100%] flex gap-[15px]">
                                <Link href={isAuthenticated ? '/account' : '/account/login'}
                                      className="flex gap-[15px] w-full py-[15px]" onClick={toggleBurgerMenu}>
                                    <div className="w-[20px] flex items-center">
                                        <AvatarIcon />
                                    </div>
                                    <p className="line-clamp ">{isAuthenticated ? user?.first_name : `${t('login/register')}`}</p>
                                </Link>
                            </li>
                            {isAuthenticated && (
                                <li className="cursor-pointer border-b-[1px] border-b-[#ebebeb] w-[100%]">
                                    <div className="flex gap-[15px] py-[15px]"
                                          onClick={Logout}>
                                        <div>{t('burgerLogOut')}</div>
                                    </div>
                                </li>
                            )}
                            <li className="border-b-[1px] border-b-[#ebebeb] py-[15px] w-[100%] flex gap-[15px] flex-col">
                                <div>{t('language')}</div>
                                <div className="flex gap-[15px]">
                                    <Image
                                        src={en}
                                        alt=""
                                        width="30"
                                        className={`${language === 'en' && 'bg-d7red'} 
                                        cursor-pointer rounded-[3px] border-[1px] p-[5px] hover:bg-d7red`}
                                        onClick={() => selectLanguage('en')}
                                    />
                                    <Image
                                        src={ka}
                                        alt=""
                                        width="30"
                                        className={`${language === 'ka' && 'bg-d7red'} 
                                        cursor-pointer rounded-[3px] border-[1px] p-[5px] hover:bg-d7red`}
                                        onClick={() => selectLanguage('ka')}
                                    />
                                </div>
                            </li>
                        </ul>
                    </nav>

                </div>
            </Transition>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 cursor-close"
                    onClick={toggleBurgerMenu}
                ></div>
            )}
        </div>
    );
};

export default BurgerMenu;
