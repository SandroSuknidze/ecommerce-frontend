import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

interface CollectionProps {
    imageSrc: string;
    title: string;
    id: number;
    totalProducts: number;
}

function Collection({ imageSrc, title, id, totalProducts }: CollectionProps) {
    const { t } = useTranslation('common')

    return (
        <div className="mx-[15px] mb-[30px] max-w-[320px] max-h-[406px] relative overflow-hidden rounded-xl sm:max-h-full sm:max-w-full">
            <Link href={`/shop/${id}`}>
                <Image
                    width={320}
                    height={393}
                    src={process.env.imageUrl + '' + imageSrc}
                    alt="collection"
                    className="rounded-xl hover:scale-110 transition duration-300 cursor-pointer max-w-full overflow-hidden sm:w-full lg:hover:scale-100" />
                <div className="absolute right-4 left-4 bottom-4 top-auto bg-white z-10 rounded p-4 overflow-hidden text-center">
                    <div className="font-medium">
                        <p className="hover:text-red-600 transition duration-300">{title}</p>
                    </div>
                    <div className="">
                        ({totalProducts} {t('products')})
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Collection