import Image from "next/image";
import closeIcon from "@/assets/close.svg";
import copyIcon from "@/assets/copy.svg";
import correctIcon from "@/assets/correct-white-icon.svg";
import InstagramIcon from "@/assets/footer/InstagramIcon";
import TiktokIcon from "@/assets/footer/TiktokIcon";
import YoutubeIcon from "@/assets/footer/YoutubeIcon";
import TwitterIcon from "@/assets/footer/TwitterIcon";
import FacebookIcon from "@/assets/footer/FacebookIcon";
import {useState} from "react";

export function ShareModal({ toggleShareModal }) {

    const [copied, setCopied] = useState(false);

    const currentUrl = window.location.href;

    const handleCopy = () => {
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                setCopied(true);
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
            });
    }


    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-[60] cursor-close"
                 onClick={() => toggleShareModal()}></div>
            <div
                className="fixed top-1/2 left-1/2 px-[40px] py-[35px] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[258px]
                bg-white border border-gray-300 rounded-[5px] shadow-lg z-[61] overflow-hidden">
                <Image src={closeIcon} alt="close icon"
                       className="absolute top-[12px] right-[22px] w-[20px] h-[20px] cursor-pointer"
                       onClick={() => toggleShareModal()}/>

                <div className="flex flex-col">
                    <label className="text-11black text-[18px] font-medium mb-[7px] leading-[32px]">Copy Link</label>
                    <div className="flex gap-[10px] mb-[20px]">
                        <input type="text" className="px-[20px] w-full py-[10px] text-[14px] placeholder:text-[#555555] leading-[28px]
                               bg-white outline-0 border-[1px] border-[#ebebeb] rounded-[30px]" placeholder={currentUrl} disabled/>
                        <button onClick={handleCopy} className="flex border-[1px] border-11black bg-11black rounded-full h-[50px] min-w-[50px] cursor-pointer justify-center">
                            <Image src={copied ? correctIcon : copyIcon} alt="copy icon" className="m-auto"/>
                        </button>
                    </div>
                    <label className="text-11black font-medium mb-[7px] leading-[32px]">Share</label>
                    <div>
                        <ul className="flex flex-row gap-[12px]">
                            <li className="cursor-pointer">
                                <InstagramIcon/>
                            </li>
                            <li className="cursor-pointer">
                                <TiktokIcon/>
                            </li>
                            <li className="cursor-pointer">
                                <YoutubeIcon/>
                            </li>
                            <li className="cursor-pointer">
                                <TwitterIcon/>
                            </li>
                            <li className="cursor-pointer">
                                <FacebookIcon/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}