import { withTranslations } from '@/utils/i18nHelper'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FaqsComponent } from '@/components/FaqsComponent'

export const getStaticProps = withTranslations(['common']);
function Index() {
    const { t } = useTranslation('common')



    return (
        <div className="max-w-[1470px] px-[30px]  m-auto text-center pt-[20px] md:px-[15px]">
            <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                <h1 className="leading-[47px] mb-[5px] text-[45px]">{t('faqs')}</h1>
                <nav>
                    <ol className="text-[14px] text-55black mt-[10px]">
                        <li className="inline">
                            <Link href="/">{t('home')} / </Link>
                        </li>
                        <li className="inline">{t('faqs')}</li>
                    </ol>
                </nav>
            </div>
            <div className="flex lg:flex-col">
                <div className="w-1/3 text-left pr-[60px] lg:w-full lg:pr-0">
                    <h3 className="mb-[20px] text-[30px] font-medium">
                        {t('needHelp')}
                    </h3>
                    <p className="text-55black mb-[15px]">
                        {t('needDesc')}
                    </p>
                    <p className="text-55black mb-[15px]">
                        {t('needDesc2')}
                    </p>
                    <Link href="/contact">
                        <button
                            className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-white px-[55px] my-[10px]
                                    py-[14px] text-[12px] font-semibold uppercase text-11black transition duration-500 hover:bg-black hover:text-white">
                            {t('messageUs')}
                        </button>
                    </Link>
                    <Link href="/our-stores">
                        <button
                            className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-white px-[55px]
                                    py-[14px] text-[12px] font-semibold uppercase text-11black transition duration-500 hover:bg-black hover:text-white">
                                {t('ourStores')}
                        </button>
                    </Link>
                </div>
                <div
                    className="w-2/3 text-left pl-[60px] border-l-[1px] border-l-[#ebebeb] lg:w-full lg:pl-0 lg:border-0 lg:mt-[50px]">
                    <h3 className="mb-[10px] text-[30px] font-medium leading-[39px] lg:text-[25px]">
                        {t('shoppingInfo')}
                    </h3>
                    <FaqsComponent
                        id="1."
                        title={t('shippingMethods')}
                        description={t('shippingMethodsDesc')}
                    />
                    <FaqsComponent
                        id="2."
                        title={t('howMuch')}
                        description={t('howMuchDesc')}
                    />
                    <FaqsComponent
                        id="3."
                        title={t('howLong')}
                        description={t('howLongDesc')}
                    />
                    <FaqsComponent
                        id="4."
                        title={t('branding')}
                        description={t('brandingDesc')}
                    />

                    <h3 className="mt-[50px] mb-[10px] text-[30px] font-medium leading-[39px] lg:text-[25px]">
                        {t('paymentInfo')}
                    </h3>
                    <FaqsComponent
                        id="1."
                        title={t('shippingMethods')}
                        description={t('shippingMethodsDesc')}
                    />
                    <FaqsComponent
                        id="2."
                        title={t('howMuch')}
                        description={t('howMuchDesc')}
                    />
                    <FaqsComponent
                        id="3."
                        title={t('howLong')}
                        description={t('howLongDesc')}
                    />
                    <FaqsComponent
                        id="4."
                        title={t('branding')}
                        description={t('brandingDesc')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Index
