import Image from "next/image";
import logo from "@/assets/logo.png";
import Instagram from "@/assets/footer/Instagram";

function Footer() {
    return (
        <footer className="border-t-[1px] border-[#ebebeb]">
            <div className="mt-[100px] mb-[30px] ">
                <div className="px-[38.5px] flex flex-row">
                    <div className="pr-[15px] flex flex-col">
                        <Image src={logo} alt="logo" width={90} className="mb-[30px]"/>
                        <div className="mb-[24px]">
                            <p className="leading-[28px]">268 St, South New York/NY 98944, United States.</p>
                            <p className="leading-[28px]">+222-1800-2628</p>
                            <p className="leading-[28px]">blueskytechcompany@gmail.com</p>
                        </div>
                        <ul className="flex flex-row gap-[12px]">
                            <li className="w-[36px] h-[36px] rounded-full border-[1px] border-[#ebebeb]"></li>
                            <li>
                                <Instagram className="hover:stroke-black hover:fill-black"/>
                            </li>

                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="17.5" stroke="#555555"></circle>
                                <path
                                    d="M16.9886 24C15.9308 24 14.9163 23.5966 14.1682 22.8785C13.4202 22.1604 13 21.1864 13 20.1709C13 19.1554 13.4202 18.1814 14.1682 17.4633C14.9163 16.7452 15.9308 16.3418 16.9886 16.3418H17.9625V18.2105H16.9886C16.5841 18.2105 16.1886 18.3257 15.8522 18.5415C15.5159 18.7572 15.2537 19.0639 15.0989 19.4227C14.9441 19.7815 14.9036 20.1764 14.9825 20.5573C15.0614 20.9382 15.2562 21.2881 15.5423 21.5627C15.8283 21.8373 16.1928 22.0243 16.5896 22.1001C16.9864 22.1759 17.3976 22.137 17.7714 21.9883C18.1452 21.8397 18.4646 21.588 18.6894 21.2651C18.9141 20.9422 19.0341 20.5626 19.0341 20.1742V12H20.9807V12.9338C20.9807 13.4546 21.1962 13.9541 21.5798 14.3223C21.9634 14.6906 22.4836 14.8975 23.0261 14.8975H24V16.7629H23.0193C22.2984 16.7639 21.591 16.5753 20.9739 16.2175V20.1709C20.973 21.1856 20.5529 22.1586 19.8058 22.8764C19.0587 23.5942 18.0456 23.9983 16.9886 24Z"
                                    fill="#555555"></path>
                            </svg>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>

                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div></div>
        </footer>
    );
}

export default Footer;