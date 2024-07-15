import Link from 'next/link'
import { useTranslation } from 'next-i18next'

interface EmptyProps {
    title: string;
}

export function Empty({ title }: EmptyProps) {
    const { t } = useTranslation('common')

    return (
        <>
            <div className="flex flex-col items-center py-[60px]">
                <h2 className="text-[20px] mb-[20px]">{title}</h2>
                <Link href="/shop"
                      className=" rounded-[30px] border-[1px] border-[#ebebeb] bg-white px-[55px] py-[14px] text-[12px]
                      font-semibold uppercase text-11black transition duration-500 hover:bg-black hover:text-white"
                >
                    {t('continueShopping')}
                </Link>
            </div>
        </>
    )
}