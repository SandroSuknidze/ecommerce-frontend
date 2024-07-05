import Link from 'next/link'
import InputForm from '@/components/InputForm'
import NewCustomer from '@/components/NewCustomer'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Image from 'next/image'

import correctIcon from '@/public/assets/correct.svg'

function Reset() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: object) => {
        console.log(data)

        setEmailSent(true)

        reset()
    }

    const [emailSent, setEmailSent] = useState(false)

    return (
        <div className="flex justify-center">
            <div className="w-[1340px]">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[47px mb-[5px] text-4xl">Login</h1>
                    <nav>
                        <ol className="text-[14px] text-55black">
                            <li className="inline">
                                <Link href="/">Home / </Link>
                            </li>
                            <li className="inline">Account</li>
                        </ol>
                    </nav>
                </div>
                <div className="flex w-full md:flex-col">
                    <div className="flex w-1/2 flex-col justify-center px-[40px] md:w-full md:px-[15px]">
                        <h3 className="mb-[25px] text-[24px] font-medium text-11black">
                            Forgot Password
                        </h3>
                        <p className="mb-[20px] text-55black">
                            Lost your password? Please enter your email address.
                            You will receive a link to create a new password via
                            email.
                        </p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            method="post"
                            action=""
                            className="w-full"
                        >
                            {emailSent && (
                                <div className="mb-[10px] mt-[16px] rounded-[5px] border-[1px] border-[#B2E5AD] bg-[#e3fadf] px-[20px] py-[11px] text-[#008A00]">
                                    <p className="flex gap-2">
                                        <Image
                                            src={correctIcon}
                                            alt="Correct Icon"
                                            className="inline"
                                        />
                                        If this email is registered, you will
                                        receive instructions to reset your
                                        password.
                                    </p>
                                </div>
                            )}
                            <InputForm
                                name="Email"
                                type="email"
                                register={register('email', {
                                    required: 'Email is required',
                                    validate: (value) => value.trim() !== "" || "Email cannot be empty",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Please enter a valid email address',
                                    },
                                })}
                                errorMessage={errors.email?.message}
                            />

                            <div className="mt-[30px]">
                                <button
                                    type="submit"
                                    className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex w-1/2 justify-center px-[40px] md:w-full md:mt-[50px] md:px-[15px]">
                        <NewCustomer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reset
