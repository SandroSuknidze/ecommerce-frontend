import { useForm } from 'react-hook-form'
import Link from 'next/link'
import InputForm from '@/components/InputForm'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axiosInstance from '@/utils/axiosInstance'


interface FormData {
    email: string
    password: string
    repeat_password: string
}

function ResetPassword() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        mode: 'onSubmit',
    })

    const router = useRouter()
    const { token } = router.query

    const [isValidToken, setIsValidToken] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const validateToken = async () => {
            if (!token) return

            try {
                const response = await axiosInstance.post('/validate-password-token', {
                    token: token,
                })

                if (response.status === 200) {
                    setIsValidToken(true)
                } else {
                    console.log('Invalid token: ' + response.status)
                    await router.push('/invalid-token')
                }
            } catch (error) {
                console.error('Error validating token:', error)
                await router.push('/invalid-token')
            } finally {
                setLoading(false)
            }
        }

        validateToken()
    }, [router, token])

    const onSubmit = async (data: FormData) => {
        try {
            const response = await axiosInstance.post('/reset-password', {
                password: data.password,
                token: token,
            })

            if (response.status === 200) {
                await router.push('/account/login')
            } else {
                console.log("Failed to reset password: " + response.status);
            }

        } catch (error) {
            console.error('Error resetting password:', error)
        }
    }

    return (
        <div className="flex justify-center">
            <div className="max-w-[1320px] w-full">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[47px] mb-[5px] text-4xl">
                        Reset account password
                    </h1>
                    <nav>
                        <ol className="text-[14px] text-55black">
                            <li className="inline">
                                <Link href="/">Home / </Link>
                            </li>
                            <li className="inline">Reset Account</li>
                        </ol>
                    </nav>
                </div>
                <div className="flex justify-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        method="post"
                        action=""
                        className="w-1/2 md:w-full md:px-[15px]"
                    >
                        <div className={`${loading && 'animate-pulse'}`}>
                            <InputForm
                                name="Password"
                                type="password"
                                register={register('password', {
                                    required: 'Password is required',
                                    validate: (value) => value.trim() !== '' || 'Password cannot be empty',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters long',
                                    },
                                    maxLength: {
                                        value: 320,
                                        message: 'Maximum number of characters reached',
                                    },
                                })}
                                errorMessage={errors.password?.message}
                                disabled={loading}
                            />
                            <InputForm
                                name="Repeat Password"
                                type="password"
                                register={register('repeat_password', {
                                    required: 'Repeat Password is required',
                                    validate: {
                                        notEmpty: (value) => value.trim() !== '' || 'Password cannot be empty',
                                        matchesPassword: (value) => value === watch('password') || 'Passwords do not match',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Repeat Password must be at least 8 characters long',
                                    },
                                    maxLength: {
                                        value: 320,
                                        message: 'Maximum number of characters reached',
                                    },
                                })}
                                errorMessage={errors.repeat_password?.message}
                                disabled={loading}
                            />
                            <div className="mt-[30px]">
                                <button
                                    type="submit"
                                    className={`${loading && 'animate-pulse  bg-gray-400'} w-full rounded-[30px] border-[1px] 
                                    border-[#ebebeb] bg-11black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white`}
                                    disabled={loading}
                                >
                                    Reset Password
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
