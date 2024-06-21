import Link from "next/link";
import InputForm from "@/components/InputForm";
import NewCustomer from "@/components/NewCustomer";
import {useForm} from "react-hook-form";
import {useState} from "react";
import Image from "next/image";

import correctIcon from "@/assets/correct.svg";



function Reset() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        setEmailSent(true);


    };


    const [emailSent, setEmailSent] = useState(false);


    return (
        <div className="flex justify-center">
            <div className="w-[1340px]">
                <div className="flex flex-col justify-center py-[60px] mx-auto text-center">
                    <h1 className="text-4xl leading-[47px mb-[5px]">Login</h1>
                    <nav>
                        <ol className="text-55black  text-[14px]">
                            <li className="inline"><Link href="/">Home / </Link></li>
                            <li className="inline">Account</li>
                        </ol>
                    </nav>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col justify-center w-1/2 px-[40px]">
                        <h3 className="text-11black text-[24px] font-medium mb-[25px]">Forgot Password</h3>
                        <p className="text-55black mb-[20px]">Lost your password? Please enter your email address.
                            You will receive a link to create a new password via email.</p>
                        <form onSubmit={handleSubmit(onSubmit)} method="post" action="" className="w-full ">
                            {emailSent &&
                                <div
                                    className="mt-[16px] mb-[10px] px-[20px] py-[11px] bg-[#e3fadf] border-[1px] border-[#B2E5AD] text-[#008A00] rounded-[5px]">
                                    <p className="flex gap-2">
                                        <Image src={correctIcon} alt="correct-icon" className="inline"/>
                                        If this email is registered, you will receive instructions to reset your password.
                                    </p>
                                </div>
                            }
                            <InputForm name="Email" type="email" register={register("email")}/>

                            <div className="mt-[30px]">
                                <button type="submit" className="w-full px-[55px] py-[14px] border-[1px] text-[12px] bg-black
                                        text-white font-semibold border-[#ebebeb] rounded-[30px] uppercase">Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center w-1/2 px-[40px]">
                        <NewCustomer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reset;