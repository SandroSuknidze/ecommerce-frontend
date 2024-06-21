import InputForm from "@/components/InputForm";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import Link from "next/link";
import NewCustomer from "@/components/NewCustomer";
import Image from "next/image";
import sadEmojiIcon from "@/assets/sad-emoji-icon.svg";

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        setIncorrectCredentials(true);
    };


    const [incorrectCredentials, setIncorrectCredentials] = useState(false);


    useEffect(() => {
        return () => {
            setIncorrectCredentials(false);
        };
    }, []);


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
                        <h3 className="text-11black text-[24px] font-medium mb-[25px]">Login</h3>
                        <form onSubmit={handleSubmit(onSubmit)} method="post" action="" className="w-full ">
                            {incorrectCredentials &&
                                <div
                                    className="flex gap-4 mt-[16px] mb-[10px] px-[20px] py-[11px] bg-[#fadfdf] border-[1px] border-[#eabdbd] text-[#9d666a] rounded-[5px]">
                                    <Image src={sadEmojiIcon} alt="sad-emoji-icon"/>
                                    <p>Incorrect email or password.</p>
                                </div>
                            }
                            <InputForm name="Email" type="email" register={register("email")}/>
                            <InputForm name="Password" type="password" register={register("password")}/>
                            <p className="text-55black"><Link href="/account/reset">Forgot your password?</Link></p>
                            <div className="mt-[30px]">
                                <button type="submit" className="w-full px-[55px] py-[14px] border-[1px] text-[12px] bg-black
                                        text-white font-semibold border-[#ebebeb] rounded-[30px] uppercase">Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center w-1/2 px-[40px]">
                        <NewCustomer />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;