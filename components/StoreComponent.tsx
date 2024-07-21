import Image, { StaticImageData } from 'next/image'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

interface StoreComponentProps {
    title: string,
    imageSrc: StaticImageData
}
function StoreComponent({ title, imageSrc }: StoreComponentProps) {
    const { t } = useTranslation('common')

    return (
        <div className="flex flex-col text-left md:w-[100%]">
            <div className="max-w-[450px] max-h-[300px] overflow-hidden rounded-[10px] cursor-pointer md:max-w-full md:max-h-max md:w-[100%]">
                <Image
                    className="overflow-hidden transition duration-300 hover:scale-105 md:w-full"
                    src={imageSrc}
                    alt="Shop Image" />
            </div>

            <h3 className="mt-[20px] mb-[10px] text-[24px]">
                {title}
            </h3>
            <div className="mb-[15px] text-55black leading-[28px] lg:text-[14px] md:!text-[16px]">
                <p>
                    {t('address')}
                </p>
                <p>
                    <a href="tel:+222-1800-2628">+222-1800-2628</a>
                </p>
                <p>
                    <a href="mailto:blueskytechcompany@gmail.com">blueskytechcompany@gmail.com</a>
                </p>
            </div>
            <div className="mb-[15px] text-55black leading-[28px] lg:text-[14px] md:!text-[16px]">
                <p>{t('monFriday')}</p>
                <p>{t('satSunday')}</p>
            </div>
            <Link
                href="https://www.google.com/maps/place/184+Main+Rd+E,+St+Albans+VIC+3021,+Australia/@-37.7456374,144.8137714,16z/data=!4m19!1m12!4m11!1m3!2m2!1d144.8139001!2d-37.7452811!1m6!1m2!1s0x6ad65fa6debeb781:0xe1d23f5d1759961e!2s184+Main+Rd+E+St+Albans+VIC+3021+%C3%9Ac!2m2!1d144.8137714!2d-37.7456374!3m5!1s0x6ad65fa6debeb781:0xe1d23f5d1759961e!8m2!3d-37.7456374!4d144.8137714!16s%2Fg%2F11c2737npp"
                target="_blank"
                className="max-w-[210px] rounded-[30px] border-[1px] border-[#ebebeb] bg-white px-[55px] py-[14px]
                text-[12px] font-semibold uppercase text-11black transition duration-500 hover:bg-black hover:text-white
                lg:py-[11px] lg:px-[30px] lg:text-[12px] lg:max-w-[160px]"
            >
                {t('getDirections')}
            </Link>

        </div>
    )
}

export default StoreComponent
