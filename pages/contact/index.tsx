import { useTranslation } from 'next-i18next'
import { withTranslations } from '@/utils/i18nHelper'

export const getStaticProps = withTranslations(['common']);
function Index() {
    const { t } = useTranslation('common')

    return (
        <div>
            <iframe
                className="w-full mb-[90px] h-[500px] border-0 lg:h-[330px] sm:h-[200px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.13110050483!2d-74.29149296032546!3d40.69732900045147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sge!4v1721390087991!5m2!1sen!2sge"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="mx-auto max-w-[1470px] px-[30px] leading-[28px] md:px-[15px] ">
                <h3 className="text-[30px] font-medium mb-[15px] leading-[39px]">{t('hereToHelp')}</h3>
                <p className="text-55black mb-[25px]">
                    {t('haveAQuestion')}
                </p>
                <div className="flex gap-[30px] lg:flex-col">
                    <div className="flex flex-col lg:pt-[15px] lg:border-t-[1px] lg:border-t-[#ebebeb]">
                        <h5 className="text-[20px] mb-[15px] font-medium">{t('uminoUsa')}</h5>
                        <p className="text-55black mb-[15px] ">
                            <a href="https://www.google.com/maps/search/268+St,+South+New+York%2FNY+98944,+United+States./@40.6976312,-74.1444874,11z/data=!3m1!4b1?entry=ttu"
                               target="_blank">
                                {t('address')}
                            </a>
                            <a href="mailto:blueskytechcompany@gmail.com"> blueskytechcompany@gmail.com</a>
                        </p>
                        <p className="text-55black mb-[15px]">
                            <a href="tel:+222-1800-2628">+222-1800-2628</a>
                        </p>
                        <p className="text-55black mb-[15px]">
                        {t('openingHours')}
                        </p>
                    </div>
                    <div className="flex flex-col lg:pt-[15px] lg:border-t-[1px] lg:border-t-[#ebebeb]">
                        <h5 className="text-[20px] mb-[15px] font-medium">{t('uminoIndia')}</h5>
                        <p className="text-55black mb-[15px]">
                            <a href="https://www.google.com/maps/place/6%2F15,+E+Mada+St,+Seeyalam,+Villivakkam,+Chennai,+Tamil+Nadu+600049,+India/@13.1082854,80.2105409,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526441f792cfd5:0xd43129d0d4c9ec23!8m2!3d13.1082854!4d80.2105409!16s%2Fg%2F11j8sdv58z?entry=ttu"
                               target="_blank">
                                {t('addressIndia')}
                            </a>
                            <a href="mailto:blueskytechcompany@gmail.com"> blueskytechcompany@gmail.com</a>
                        </p>
                        <p className="text-55black mb-[15px]">
                            <a href="tel:+222-1800-2628">+222-1800-2628</a>
                        </p>
                        <p className="text-55black mb-[15px]">
                            {t('openingHours')}
                        </p>
                    </div>
                    <div className="flex flex-col lg:pt-[15px] lg:border-t-[1px] lg:border-t-[#ebebeb]">
                        <h5 className="text-[20px] mb-[15px] font-medium">{t('uminoFrance')}</h5>
                        <p className="text-55black mb-[15px]">
                            <a href="https://www.google.com/maps/search/3+Avenue,+Aix-en-Provence,+France./@43.4513704,5.261374,12z?entry=ttu"
                               target="_blank">
                                {t('addressFrance')}
                            </a>
                            <a href="mailto:blueskytechcompany@gmail.com"> blueskytechcompany@gmail.com</a>
                        </p>
                        <p className="text-55black mb-[15px]">
                            <a href="tel:+222-1800-2628">+222-1800-2628</a>
                        </p>
                        <p className="text-55black mb-[15px]">
                        {t('openingHours')}
                        </p>
                    </div>

                </div>
                {/*<h3 className="text-[30px] font-medium mb-[15px] leading-[39px]">Get in Touch</h3>*/}
                {/*<p className="text-55black mb-[25px]">*/}
                {/*    We'd love to hear from you about our entire service. Your comments and suggestions will be highly appreciated. Please complete the form below.*/}
                {/*</p>*/}
                {/*<form method="post" className="mt-[10px]">*/}
                {/*    */}
                {/*</form>*/}
            </div>
        </div>
    )
}

export default Index