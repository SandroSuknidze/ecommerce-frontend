import { useTranslation } from 'next-i18next'
import { withTranslations } from '@/utils/i18nHelper'

export const getStaticProps = withTranslations(['common']);
function Index() {
    const { t } = useTranslation('common')

    return (
        <div>
            <div className="text-center pt-[100px]">
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
            </div>
        </div>
    )
}

export default Index
