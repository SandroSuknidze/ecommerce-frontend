import { useForm } from 'react-hook-form'
import Link from 'next/link'
import InputForm from '@/components/InputForm'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axiosInstance from '@/utils/axiosInstance'
import { toast } from 'react-toastify'
import RequireGuest from '@/utils/requireGuest'
import { useAuth } from '@/context/authContext'
import { withTranslations } from '@/utils/i18nHelper'
import { useTranslation } from 'next-i18next'

export const getStaticProps = withTranslations(['common']);

interface FormData {
    email: string
    password: string
    repeat_password: string
}

function ResetPassword() {
    const { t } = useTranslation('common')

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

    const [loading, setLoading] = useState(true)

    const { isAuthenticated, login } = useAuth()

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false)


    if (isAuthenticated) {
        router.push('/')
    }

    useEffect(() => {
        const validateToken = async () => {
            if (!token) return

            try {
                await axiosInstance.post('/validate-password-token', {
                    token: token,
                })

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
        setLoading(true)
        try {
            const response = await axiosInstance.post('/reset-password', {
                password: data.password,
                token: token,
            })

            if (response.status === 200) {
                toast.success('Your password has been successfully reset.', {
                    position: 'top-center',
                })
                await router.push('/account/login')
            } else {
                console.log("Failed to reset password: " + response.status);
            }

        } catch (error) {
            console.error('Error resetting password:', error)
        }
    }

    function togglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible)
    }

    function toggleRepeatPasswordVisibility() {
        setIsRepeatPasswordVisible(!isRepeatPasswordVisible)
    }


    return (
        <div className="flex justify-center">
            <div className="max-w-[1320px] w-full">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[47px] mb-[5px] text-4xl">
                        {t('resetAccountPassword')}
                    </h1>
                    <nav>
                        <ol className="text-[14px] text-55black">
                            <li className="inline">
                                <Link href="/">{t('home')} / </Link>
                            </li>
                            <li className="inline">{t('resetAccount')}</li>
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
                                type={isPasswordVisible ? 'text' : 'password'}
                                register={register('password', {
                                    required: `${t('passwordRequired')}`,
                                    validate: (value) => value.trim() !== "" || `${t('passwordNotEmpty')}`,
                                    minLength: {
                                        value: 8,
                                        message: `${t('passwordMinLength')}`,
                                    },
                                    maxLength: {
                                        value: 320,
                                        message: `${t('emailMaxLength')}`,
                                    },
                                })}
                                errorMessage={errors.password?.message}
                                disabled={loading}
                                togglePassword={togglePasswordVisibility}
                                isPasswordVisible={isPasswordVisible}
                            />
                            <InputForm
                                name="Repeat Password"
                                type={isRepeatPasswordVisible ? 'text' : 'password'}
                                register={register('repeat_password', {
                                    required: `${t('passwordRequired')}`,
                                    validate: {
                                        notEmpty: (value) => value.trim() !== '' || `${t('passwordNotEmpty')}`,
                                        matchesPassword: (value) => value === watch('password') || `${t('passwordDontMatch')}`,
                                    },
                                    minLength: {
                                        value: 8,
                                        message: `${t('passwordMinLength')}`,
                                    },
                                    maxLength: {
                                        value: 320,
                                        message: `${t('emailMaxLength')}`,
                                    },
                                })}
                                errorMessage={errors.repeat_password?.message}
                                disabled={loading}
                                togglePassword={toggleRepeatPasswordVisibility}
                                isPasswordVisible={isRepeatPasswordVisible}
                            />
                            <div className="mt-[30px]">
                                <button
                                    type="submit"
                                    className={`${loading && 'animate-pulse  bg-gray-400'} w-full rounded-[30px] border-[1px] 
                                    border-[#ebebeb] bg-11black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white`}
                                    disabled={loading}
                                >
                                    {t('resetPassword')}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RequireGuest(ResetPassword)
