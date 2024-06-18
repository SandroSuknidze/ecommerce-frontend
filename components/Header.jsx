import Link from "next/link";
import arrowDown from "@/assets/chevron-down-solid.svg";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function Header() {
    return (
        <header className="py-[3px]">
            <div className="flex flex-row justify-between py-[5px] mx-[30px] text-[14px] ">
                <div className="flex flex-row justify-between gap-[25px] leading-[24.5px]">
                    <div>
                        <a href="tel:+222-1800-2628">
                            <span>+222-1800-2628</span>
                        </a>
                    </div>
                    <div>
                        <a href="mailto:blueskytechcompany@gmail.com">
                            <span>blueskytechcompany@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="leading-[24.5px]">
                        <p>Sign up for 10% off your first order:&nbsp;
                            <Link href="/account" className="underline">
                                <span className="font-medium">Sign Up</span>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-[25px] leading-[24.5px]">
                    <div>
                        Our Stores
                    </div>
                    <div className="flex">
                        United States (USD $)&nbsp; <Image src={arrowDown} width={12} height={12} alt="arrow-down" />
                    </div>
                    <div className="flex">
                    English <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                    </div>
                </div>

            </div>

            <div className="flex flex-row justify-between uppercase">
                <a href="#" className="p-[15px]">Menu</a>
                <a href="#" className="p-[15px]">Categories</a>
            </div>
            <div></div>
        </header>
    )
}