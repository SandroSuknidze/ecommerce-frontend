import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { withTranslations } from '@/utils/i18nHelper'
import st1 from "@/public/assets/ourStores/st1.webp";
import st2 from "@/public/assets/ourStores/st2.webp";
import st3 from "@/public/assets/ourStores/st3.webp";
import StoreComponent from '@/components/StoreComponent'


export const getStaticProps = withTranslations(['common']);
function Index() {
    const { t } = useTranslation('common')

    return (
        <div className="max-w-[1470px] px-[30px]  m-auto text-center pt-[20px] md:px-[15px]">
            <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                <h1 className="leading-[47px] mb-[5px] text-[45px]">{t('ourStores')}</h1>
                <nav>
                    <ol className="text-[14px] text-55black mt-[10px]">
                        <li className="inline">
                            <Link href="/">{t('home')} / </Link>
                        </li>
                        <li className="inline">{t('ourStores')}</li>
                    </ol>
                </nav>
            </div>
            <div className="flex gap-[30px] md:flex-col">
                <StoreComponent title={t('southFulon')} imageSrc={st1} />
                <StoreComponent title={t('placeSteFoy')} imageSrc={st2} />
                <StoreComponent title={t('martinPlace')} imageSrc={st3} />
            </div>
        </div>
    )
}

export default Index