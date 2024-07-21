import { useTranslation } from 'next-i18next'
import { withTranslations } from '@/utils/i18nHelper'
import { CounterComponent } from '@/components/CounterComponent'

export const getStaticProps = withTranslations(['common']);
function Index() {
    const { t } = useTranslation('common')

    return (
        <div>
            <div className="max-w-[1260px] px-[30px]  m-auto text-center pt-[100px] md:px-[15px]">
                <p className="text-55black text-[12px] mb-[15px] font-semibold uppercase">
                    {t('welcomeToUmino')}
                </p>
                <h2 className="text-[45px] leading-[55px]">
                    {t('perfectStore')}
                </h2>
                <h2 className="mb-[20px] text-[45px] leading-[55px]">
                    {t('availableToEveryone')}
                </h2>
                <p className="text-55black mb-[15px] max-w-[750px] m-auto">
                    {t('aboutDesc')}
                </p>

                <div className="flex gap-[30px] mt-[100px] md:flex-col">
                    <CounterComponent title={t('productsForSale')} description={t('thatWhy')} end={56} duration={2.5}/>
                    <CounterComponent title={t('happyCustomers')} description={t('weProvide')} end={9.6} duration={2.5} decimals={1}/>
                    <CounterComponent title={t('partnerBrands')} description={t('partnerWith')} end={13} duration={2.5}/>
                </div>
            </div>
        </div>
    )
}

export default Index