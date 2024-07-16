import Link from 'next/link'
import InputForm from '@/components/InputForm'
import NewCustomer from '@/components/NewCustomer'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Image from 'next/image'

import correctIcon from '@/public/assets/correct.svg'
import axiosInstance from '@/utils/axiosInstance'
import { useAuth } from '@/context/authContext'
import { useRouter } from 'next/router'
import RequireGuest from '@/utils/requireGuest'
import { withTranslations } from '@/utils/i18nHelper'
import { useTranslation } from 'next-i18next'

export const getStaticProps = withTranslations(['common']);

interface FormData {
    email: string
}
function Reset() {
    const { t } = useTranslation('common')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        mode: 'onSubmit',
    })

    const [isSubmittable, setIsSubmittable] = useState(true)

    const { isAuthenticated, login } = useAuth()

    const router = useRouter();

    if (isAuthenticated) {
        router.push('/')
    }

    const onSubmit = async (data: FormData) => {
        setIsSubmittable(false)
        setEmailSent(true)
        reset()

        try {
            await axiosInstance.post('/forgot-password', {
                email: data.email,
            })

        } catch (err) {
            console.error(err)
        }
        setTimeout(() => {
            setIsSubmittable(true)
        }, 5000)
    }

    const [emailSent, setEmailSent] = useState(false)

    return (
        <div className="flex justify-center">
            <div className="w-[1340px]">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[47px mb-[5px] text-4xl">{t('login')}</h1>
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
                            {t('forgotPassword')}
                        </h3>
                        <p className="mb-[20px] text-55black">
                            {t('lostPassword')}
                        </p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            method="post"
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
                                        {t('ifEmailRegistered')}
                                    </p>
                                </div>
                            )}
                            <InputForm
                                name="Email"
                                type="email"
                                labelText={t('email')}
                                placeHolder={t('email')}
                                register={register('email', {
                                    required: `${t('emailRequired')}`,
                                    validate: (value) => value.trim() !== "" || `${t('emailNotEmpty')}`,
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: `${t('emailInvalid')}`,
                                    },
                                })}
                                errorMessage={errors.email?.message}
                            />

                            <div className="mt-[30px]">
                                <button
                                    type="submit"
                                    className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white"
                                    disabled={!isSubmittable}
                                >
                                    {t('resetPassword')}
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

export default RequireGuest(Reset)
