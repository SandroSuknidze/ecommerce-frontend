import { useEffect, useState } from 'react'
import axiosInstance from '@/utils/axiosInstance'
import { SkeletonLoader } from '@/components/SkeletonLoader'
import { withTranslations } from '@/utils/i18nHelper'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const getStaticProps = withTranslations(['common']);
function Index() {
    const { t } = useTranslation('common')

    const [privacyText, setPrivacyText] = useState('')

    useEffect(() => {
        axiosInstance.get('/privacy-policy')
            .then((response) => {
                setPrivacyText(response.data.text)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <div className="max-w-[1080px] m-auto">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[47px] mb-[5px] text-[45px]">{t('privacyPolicy')}</h1>
                    <nav>
                        <ol className="text-[14px] text-55black mt-[10px]">
                            <li className="inline">
                                <Link href="/">{t('home')} / </Link>
                            </li>
                            <li className="inline">{t('privacyPolicy')}</li>
                        </ol>
                    </nav>
                </div>
                {privacyText ? (
                    <div dangerouslySetInnerHTML={{ __html: privacyText }} className=" m-auto custom-class" />
                ) : (
                    <div>
                        <SkeletonLoader className="h-6 w-3/4 mb-4" />
                        <SkeletonLoader className="h-4 w-1/2 mb-6" />

                        <SkeletonLoader className="h-5 w-1/3 mb-2" />
                        <SkeletonLoader className="h-4 w-full mb-2" />
                        <SkeletonLoader className="h-4 w-full mb-4" />

                        <SkeletonLoader className="h-5 w-1/3 mb-2" />
                        {Array.from({ length: 16 }).map((_, index) => (
                            <div key={index} className="mb-4">
                                <SkeletonLoader className="h-4 w-1/4 mb-2" />
                                <SkeletonLoader className="h-4 w-full mb-1" />
                                <SkeletonLoader className="h-4 w-3/4" />
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Index