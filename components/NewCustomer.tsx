import Link from 'next/link'
import { useTranslation } from 'next-i18next'

function NewCustomer() {
    const { t } = useTranslation('common')

    return (
        <div>
            <div className="flex w-full flex-col">
                <h3 className="mb-[25px] text-[24px] font-medium text-11black">
                    {t('newCustomer')}
                </h3>
                <p className="mb-[25px] text-55black">
                    {t('signUpForEarly')}
                </p>
                <Link href="/account/register">
                    <button
                        type="submit"
                        className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white"
                    >
                        {t('createAccount')}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NewCustomer
