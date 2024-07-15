import InputForm from '@/components/InputForm'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import NewCustomer from '@/components/NewCustomer'
import Image from 'next/image'
import sadEmojiIcon from '@/public/assets/sad-emoji-icon.svg'
import Cookies from 'js-cookie'
import axiosInstance from '@/utils/axiosInstance'
import { useAuth } from '@/context/authContext'
import RequireGuest from '@/utils/requireGuest'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { withTranslations } from '@/utils/i18nHelper'
import { useTranslation } from 'next-i18next'

export const getStaticProps = withTranslations(['common']);
function Login() {
    const { t } = useTranslation('common')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { isAuthenticated, login } = useAuth()
    const [isSubmittable, setIsSubmittable] = useState(true)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const router = useRouter();

    if (isAuthenticated) {
        router.push('/')
    }

    const onSubmit = async (data: object) => {
        setIsSubmittable(false)

        try {
            const response = await axiosInstance.post('/login', data);
            if (response.status === 200) {
                await router.push('/')
                const { access_token, user } = response.data;
                Cookies.set('access_token', access_token, { expires: 1 });
                Cookies.set('user', JSON.stringify(user), { expires: 1 });
                login(user)
                toast.success('Login successful!', {
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
            // console.error("Login error:", error);
            setIncorrectCredentials(true)
            setIsSubmittable(true)
        }
    }

    const [incorrectCredentials, setIncorrectCredentials] = useState(false)

    useEffect(() => {
        return () => {
            setIncorrectCredentials(false)
        }
    }, [])

    function togglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <div className="flex justify-center">
            <div className="w-[1340px]">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[47px] mb-[5px] text-4xl">{t('login')}</h1>
                    <nav>
                        <ol className="text-[14px] text-55black">
                            <li className="inline">
                                <Link href="/">{t('home')} / </Link>
                            </li>
                            <li className="inline">{t('account')}</li>
                        </ol>
                    </nav>
                </div>
                <div className="flex w-full md:flex-col">
                    <div className="flex w-1/2 flex-col justify-center px-[40px] md:w-full md:px-[15px]">
                        <h3 className="mb-[25px] text-[24px] font-medium text-11black">
                            {t('login')}
                        </h3>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            method="post"
                            action=""
                            className="w-full"
                        >
                            {incorrectCredentials && (
                                <div className="mb-[10px] mt-[16px] flex gap-4 rounded-[5px] border-[1px] border-[#eabdbd] bg-[#fadfdf] px-[20px] py-[11px] text-[#9d666a]">
                                    <Image src={sadEmojiIcon} alt="Sad Emoji" />
                                    <p>{t('inCorrectEmailOrPassword')}</p>
                                </div>
                            )}
                            <InputForm
                                name="Email"
                                type="email"
                                register={register('email', {
                                    required: `${t('emailRequired')}`,
                                    validate: (value) => value.trim() !== "" || `${t('emailNotEmpty')}`,
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: `${t('emailInvalid')}`,
                                    },
                                    maxLength: {
                                        value: 320,
                                        message: `${t('emailMaxLength')}`,
                                    },
                                })}
                                errorMessage={errors.email?.message}
                            />
                            <InputForm
                                name="Password"
                                type={isPasswordVisible ? 'text' : 'password'}
                                register={register('password', {
                                    required: `${t('passwordRequired')}`,
                                    validate: (value) => value.trim() !== "" || `${t('passwordNotEmpty')}`,
                                    maxLength: {
                                        value: 320,
                                        message: `${t('emailMaxLength')}`,
                                    }
                                })}
                                errorMessage={errors.password?.message}
                                togglePassword={togglePasswordVisibility}
                                isPasswordVisible={isPasswordVisible}
                            />
                            <p className="text-55black">
                                <Link href="/account/reset">
                                    {t('forgotPassword')}
                                </Link>
                            </p>
                            <div className="mt-[30px]">
                                <button
                                    type="submit"
                                    className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white"
                                    disabled={!isSubmittable}
                                >
                                    {t('submit')}
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

export default RequireGuest(Login)
