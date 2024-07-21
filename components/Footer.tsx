import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import InstagramIcon from '@/public/assets/footer/InstagramIcon'
import TiktokIcon from '@/public/assets/footer/TiktokIcon'
import YoutubeIcon from '@/public/assets/footer/YoutubeIcon'
import TwitterIcon from '@/public/assets/footer/TwitterIcon'
import FacebookIcon from '@/public/assets/footer/FacebookIcon'
import InputForm from '@/components/InputForm'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTranslation } from 'next-i18next'
import { useAuth } from '@/context/authContext'
import axiosInstance from '@/utils/axiosInstance'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Footer() {
    const { t } = useTranslation('common')

    const [isSubmitAvailable, setIsSubmitAvailable] = useState(true);

    const { isAuthenticated } = useAuth();

    const router = useRouter();

    const language = router.locale;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
    })

    const onSubmit = async (data: object) => {
        if (!isSubmitAvailable) return;

        setIsSubmitAvailable(false);

        try {
            const response = await axiosInstance.post('/subscribe', data);
            if (response.data.message === 'You are already subscribed') {
                toast.info(`${t('youAreAlreadySubscribed')}`, {
                    position: 'top-center',
                });
            } else if (response.data.message === 'Subscription successful') {
                toast.success(`${t('youHaveSuccessfullySubscribed')}`, {
                    position: 'top-center',
                });
            }
            reset();
        } catch (error) {
            console.error(error);
            toast.error(`${t('subscriptionFailed')}`, {
                position: 'top-center',
            });
        } finally {
            setIsSubmitAvailable(true);
        }

    };



    return (
        <footer className="mt-[50px] border-t-[1px] border-[#ebebeb]">
            <div className="mx-auto max-w-[1470px] px-[30px] md:px-[15px] ">
                <div className="mb-[60px] mt-[100px] sm:mb-[10px] sm:mt-[50px]">
                    <div className="flex min-h-[320px] flex-row justify-between sm:flex-col sm:gap-[30px]">
                        <div className="flex w-3/6 xl:flex-col xl:w-1/2 xl:h-[500px] sm:!w-full sm:!h-auto sm:gap-[30px]">
                            <div className="flex w-2/3 flex-col pr-[15px] xl:w-full xl:h-[350px] sm:!h-auto">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={90}
                                    className="mb-[30px]"
                                />
                                <div className="mb-[24px] text-[#555555]">
                                    <p className="leading-[28px]">
                                        <a href="https://www.google.com/maps/search/268+St,+South+New+York%2FNY+98944,+United+States./@40.6976312,-74.1444874,11z/data=!3m1!4b1?entry=ttu"
                                           target="_blank">
                                            {t('address')}
                                        </a>
                                    </p>
                                    <p className="leading-[32px]">
                                        <a href="tel:+222-1800-2628">+222-1800-2628</a>
                                    </p>
                                    <p className="leading-[32px]">
                                        <a href="mailto:blueskytechcompany@gmail.com">blueskytechcompany@gmail.com</a>
                                    </p>
                                </div>
                                <ul className="flex flex-row gap-[12px]">
                                    <li className="cursor-pointer">
                                        <Link href="https://www.youtube.com" target="_blank" aria-label="youtube">
                                            <YoutubeIcon />
                                        </Link>
                                    </li>
                                    <li className="cursor-pointer">
                                        <Link href="https://www.tiktok.com" target="_blank" aria-label="tiktok">
                                            <TiktokIcon />
                                        </Link>
                                    </li>
                                    <li className="cursor-pointer">
                                        <Link href="https://www.instagram.com" target="_blank" aria-label="instagram">
                                            <InstagramIcon />
                                        </Link>
                                    </li>
                                    <li className="cursor-pointer">
                                        <Link href="https://www.twitter.com" target="_blank" aria-label="twitter">
                                            <TwitterIcon />
                                        </Link>
                                    </li>
                                    <li className="cursor-pointer">
                                        <Link href="https://www.facebook.com" target="_blank" aria-label="facebook">
                                            <FacebookIcon />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/3 px-[15px] xl:w-full xl:px-0 xl:h-[200px] sm:!h-auto">
                                <h3 className="pb-[10px] text-[18px] font-medium leading-[23px]">
                                    {t('company')}
                                </h3>
                                <div className="pt-[15px]">
                                    <ul className="flex flex-col gap-[10px] text-[#555555]">
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            <Link href="/about-us">
                                                {t('aboutUs')}
                                            </Link>
                                        </li>
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            <Link href="/our-stores">
                                                {t('ourStores')}
                                            </Link>
                                        </li>
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            <Link href="/contact">
                                                {t('contactUs')}
                                            </Link>
                                        </li>
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            <Link href="/size-guide">
                                                {t('sizeGuide')}
                                            </Link>
                                        </li>
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            <Link href={isAuthenticated ? '/account' : '/account/login'}>
                                                {t('myAccount')}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-3/6 xl:flex-col xl:w-1/2 sm:!w-full sm:!h-auto sm:gap-[30px]">
                            <div className="w-1/3 px-[15px] xl:w-full xl:h-[350px] xl:pr-0 sm:px-0 sm:!h-auto">
                                <h3 className="pb-[10px] text-[18px] font-medium leading-[23px]">
                                    {t('customerService')}
                                </h3>
                                <div className="pt-[15px]">
                                    <ul className="flex flex-col gap-[10px] text-[#555555]">
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            <Link href="/privacy-policy">
                                                {t('privacyPolicy')}
                                            </Link>
                                        </li>
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            <Link href="/refund-policy">
                                                {t('refundPolicy')}
                                            </Link>
                                        </li>
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            <Link href="/shipping-return">
                                                {t('shippingReturn')}
                                            </Link>
                                        </li>
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            <Link href="/term-condition">
                                                {t('termsConditions')}
                                            </Link>
                                        </li>
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            {t('advancedSearch')}
                                        </li>
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            {t('themeFAQs')}
                                        </li>
                                        <li className="leading-[28px] transition duration-500 hover:text-11black">
                                            {t('storeLocations')}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-2/3 pl-[15px] xl:w-full xl:h-[200px] xl:pr-0 sm:px-0 sm:!w-full sm:!h-auto">
                                <h3 className="pb-[10px] text-[18px] font-medium leading-[23px]">
                                    {t('newsletterSignup')}
                                </h3>
                                <div className="pt-[15px] text-[#555555]">
                                    <p className="leading-[28px]">
                                        {t('newsletterText')}
                                    </p>
                                    <div className="mt-[30px]">
                                        <form onSubmit={handleSubmit(onSubmit)} method="post" className="flex">
                                            <div className="w-2/3 mr-[10px]">
                                                <InputForm
                                                    name="Email"
                                                    type="email"
                                                    placeHolder={t('email')}
                                                    label={false}
                                                    register={register('email', {
                                                        required: t('emailRequired'),
                                                        validate: (value) => value.trim() !== '' || t('emailNotEmpty'),
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                            message: t('emailInvalid'),
                                                        },
                                                        maxLength: {
                                                            value: 320,
                                                            message: t('emailMaxLength'),
                                                        },
                                                    })}
                                                    errorMessage={errors.email?.message}
                                                />
                                            </div>

                                            <button
                                                disabled={!isSubmitAvailable}
                                                type="submit"
                                                className={`w-1/3 h-[50px] rounded-[30px] border-[1px] border-[#ebebeb]
                                                bg-black px-[20px] py-[10px] text-[12px] font-semibold uppercase text-white
                                                    md:px-[10px] ${language === 'en' ? 'md:text-[10px]' : 'md:text-[12px]'}`}>
                                                {t('subscribe')}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1410px] border-t-[1px] border-[#ebebeb] py-[30px] text-center">
                    <div>
                        <p className="leading-[38px] text-[#555555]">
                            {t('copyright')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
