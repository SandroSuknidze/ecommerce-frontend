import Image from 'next/image'
import closeIcon from '@/public/assets/close.svg'
import copyIcon from '@/public/assets/copy.svg'
import correctIcon from '@/public/assets/correct-white-icon.svg'
import InstagramIcon from '@/public/assets/footer/InstagramIcon'
import TiktokIcon from '@/public/assets/footer/TiktokIcon'
import YoutubeIcon from '@/public/assets/footer/YoutubeIcon'
import TwitterIcon from '@/public/assets/footer/TwitterIcon'
import FacebookIcon from '@/public/assets/footer/FacebookIcon'
import { useState } from 'react'

interface ShareModalProps {
    toggleShareModal: () => void,
}

export function ShareModal({ toggleShareModal }: ShareModalProps) {
    const [copied, setCopied] = useState(false)

    const currentUrl = window.location.href

    const handleCopy = () => {
        navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
                setCopied(true)
            })
            .catch((err) => {
                console.error('Failed to copy URL: ', err)
            })
    }

    return (
        <>
            <div
                className="fixed inset-0 z-[60] cursor-close bg-black opacity-50"
                onClick={() => toggleShareModal()}
            ></div>
            <div className="fixed left-1/2 top-1/2 z-[61] h-[258px] w-[400px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-[5px] border border-gray-300 bg-white px-[40px] py-[35px] shadow-lg">
                <Image
                    src={closeIcon}
                    alt="close icon"
                    className="absolute right-[22px] top-[12px] h-[20px] w-[20px] cursor-pointer"
                    onClick={() => toggleShareModal()}
                />

                <div className="flex flex-col">
                    <label className="mb-[7px] text-[18px] font-medium leading-[32px] text-11black">
                        Copy Link
                    </label>
                    <div className="mb-[20px] flex gap-[10px]">
                        <input
                            type="text"
                            className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-white px-[20px] py-[10px] text-[14px] leading-[28px] outline-0 placeholder:text-[#555555]"
                            placeholder={currentUrl}
                            disabled
                        />
                        <button
                            onClick={handleCopy}
                            className="flex h-[50px] min-w-[50px] cursor-pointer justify-center rounded-full border-[1px] border-11black bg-11black"
                        >
                            <Image
                                src={copied ? correctIcon : copyIcon}
                                alt="copy icon"
                                className="m-auto"
                            />
                        </button>
                    </div>
                    <label className="mb-[7px] font-medium leading-[32px] text-11black">
                        Share
                    </label>
                    <div>
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
                </div>
            </div>
        </>
    )
}
