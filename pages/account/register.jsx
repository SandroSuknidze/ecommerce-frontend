import InputForm from "@/components/InputForm";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

import sadEmojiIcon from "@/assets/sad-emoji-icon.svg";

function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        setEmailAlreadyExists(true);

    };

    const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);


    useEffect(() => {
        return () => {
            setEmailAlreadyExists(false);
        };
    }, []);


    return (
        <div className="flex justify-center">
            <div className="w-[1320px]">
                <div className="flex flex-col justify-center py-[60px] mx-auto text-center">
                    <h1 className="text-4xl leading-[47px mb-[5px]">Create account</h1>
                    <nav>
                        <ol className="text-55black  text-[14px]">
                            <li className="inline"><Link href="/">Home / </Link></li>
                            <li className="inline">Create Account</li>
                        </ol>
                    </nav>
                </div>
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} method="post" action="" className="w-1/2">
                        {emailAlreadyExists &&
                            <div
                                className="flex gap-4 mt-[16px] mb-[10px] px-[20px] py-[11px] bg-[#fadfdf] border-[1px] border-[#eabdbd] text-[#9d666a] rounded-[5px]">
                                <Image src={sadEmojiIcon} alt="Sad Emoji"/>
                                <p>This email address is already associated with an account.
                                    If this account is yours, you can <span className="text-black cursor-pointer">reset your password</span>
                                </p>
                            </div>
                        }
                        <InputForm name="First name" type="text" register={register("first_name")}/>
                        <InputForm name="Last name" type="text" register={register("last_name")}/>
                        <InputForm name="Email" type="email" register={register("email")}/>
                        <InputForm name="Password" type="password" register={register("password")}/>
                        <p className="text-55black">Your personal data will be used to support your experience throughout this website,
                            to manage access to your account and for other purposes described in our privacy policy.</p>
                        <div className="mt-[30px]">
                            <button type="submit" className="w-full px-[55px] py-[14px] border-[1px] text-[12px] bg-black
                                        text-white font-semibold border-[#ebebeb] rounded-[30px] uppercase">Create Account
                            </button>
                        </div>
                        <div className="mt-[20px]">
                            <Link href="/account/login">
                                <button type="submit" className="w-full px-[55px] py-[14px] border-[1px] text-[12px] bg-white transition duration-500
                                        text-black font-semibold border-[#ebebeb] rounded-[30px] uppercase hover:bg-black hover:text-white">
                                    Log In
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
