
import { useTranslation } from 'next-i18next'
import { withTranslations } from '@/utils/i18nHelper'

export const getStaticProps = withTranslations(['common']);
function Index() {
    const { t } = useTranslation('common')

    return (
        <div>
            <iframe
                className="w-full rounded-t-2xl h-[500px] border-0 lg:h-[330px] sm:h-[200px] sm:rounded-t-[34px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.13110050483!2d-74.29149296032546!3d40.69732900045147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sge!4v1721390087991!5m2!1sen!2sge"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

export default Index