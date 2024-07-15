import InputForm from '@/components/InputForm'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import sadEmojiIcon from '@/public/assets/sad-emoji-icon.svg'
import axiosInstance from '@/utils/axiosInstance'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { useAuth } from '@/context/authContext'
import RequireGuest from '@/utils/requireGuest'



interface FormData {
    first_name: string
    last_name: string
    email: string
    password: string
}

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        mode: 'onSubmit',
    })

    const router = useRouter();
    const { isAuthenticated, login } = useAuth()

    const [isSubmittable, setIsSubmittable] = useState(true)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)


    if (isAuthenticated) {
        router.push('/')
    }

    const onSubmit = async (data: FormData) => {
        setIsSubmittable(false)
        try {
            const response = await axiosInstance.post('/register', {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password,
            })

            if (response.status === 200) {
                await router.push('/')

                const { access_token, user } = response.data;
                Cookies.set('access_token', access_token, { expires: 1 });
                Cookies.set('user', JSON.stringify(user), { expires: 1 });
                login(user)
                toast.success('Registration successful!', {
                    position: 'top-center',
                })

                const savedCart:any = localStorage.getItem('cart');
                const jsonSavedCart = JSON.parse(savedCart);
                if(jsonSavedCart.items.length > 0) {
                    await axiosInstance.post('/cart/sync', { cart: jsonSavedCart.items });

                }
                localStorage.removeItem('cart');
            }
        } catch (error: any) {
            setIsSubmittable(true)
            if (error.response && error.response.status === 422) {
                setEmailAlreadyExists(true);
            } else {
                console.error("Error registering user:", error);
            }
        }
    }

    const [emailAlreadyExists, setEmailAlreadyExists] = useState(false)

    useEffect(() => {
        return () => {
            setEmailAlreadyExists(false)
        }
    }, [])

    function togglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible)
    }


    return (
        <div className="flex justify-center">
            <div className="max-w-[1320px]">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[47px] mb-[5px] text-4xl">
                        Create account
                    </h1>
                    <nav>
                        <ol className="text-[14px] text-55black">
                            <li className="inline">
                                <Link href="/">Home / </Link>
                            </li>
                            <li className="inline">Create Account</li>
                        </ol>
                    </nav>
                </div>
                <div className="flex justify-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        method="post"
                        className="w-1/2 md:w-full md:px-[15px]"
                    >
                        {emailAlreadyExists && (
                            <div
                                className="mb-[10px] mt-[16px] flex gap-4 rounded-[5px] border-[1px] border-[#eabdbd] bg-[#fadfdf] px-[20px] py-[11px] text-[#9d666a]">
                                <Image src={sadEmojiIcon} alt="Sad Emoji" />
                                <p>
                                    This email address is already associated
                                    with an account. If this account is yours,
                                    you can{' '}
                                    <Link href="/account/reset" className="cursor-pointer text-11black inline">
                                        reset your password
                                    </Link>
                                </p>
                            </div>
                        )}
                        <InputForm
                            name="First name"
                            type="text"
                            register={register('first_name', {
                                required: 'First name is required',
                                validate: (value) => value.trim() !== "" || "First name cannot be empty",
                                maxLength: {
                                    value: 30,
                                    message: 'Maximum number of characters reached',
                                },
                            })}
                            errorMessage={errors.first_name?.message}
                        />
                        <InputForm
                            name="Last name"
                            type="text"
                            register={register('last_name', {
                                required: 'Last name is required',
                                validate: (value) => value.trim() !== "" || "Last name cannot be empty",
                                maxLength: {
                                    value: 30,
                                    message: 'Maximum number of characters reached',
                                },
                            })}
                            errorMessage={errors.last_name?.message}
                        />
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
                                maxLength: {
                                    value: 320,
                                    message: 'Maximum number of characters reached',
                                },
                            })}
                            errorMessage={errors.email?.message}
                        />
                        <InputForm
                            name="Password"
                            type={isPasswordVisible ? 'text' : 'password'}
                            register={register('password', {
                                required: 'Password is required',
                                validate: (value) => value.trim() !== "" || "Password cannot be empty",
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long'
                                },
                                maxLength: {
                                    value: 320,
                                    message: 'Maximum number of characters reached',
                                }
                            })}
                            errorMessage={errors.password?.message}
                            togglePassword={togglePasswordVisibility}
                            isPasswordVisible={isPasswordVisible}
                        />
                        <p className="text-55black">
                            Your personal data will be used to support your
                            experience throughout this website, to manage access
                            to your account and for other purposes described in
                            our privacy policy.
                        </p>
                        <div className="mt-[30px]">
                            <button
                                type="submit"
                                className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white"
                                disabled={!isSubmittable}
                            >
                                Create Account
                            </button>
                        </div>
                        <div className="mt-[20px]">
                            <Link href="/account/login">
                                <button
                                    type="submit"
                                    className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-white px-[55px]
                                    py-[14px] text-[12px] font-semibold uppercase text-11black transition duration-500 hover:bg-black hover:text-white"
                                >
                                    Log In
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RequireGuest(Register)
