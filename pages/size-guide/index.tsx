import Image from 'next/image'
import closeIcon from '@/public/assets/close.svg'
import sizeImage from '@/public/size.webp'
import { useTranslation } from 'next-i18next'
import { withTranslations } from '@/utils/i18nHelper'
import Link from 'next/link'

export const getStaticProps = withTranslations(['common']);
function Index() {
    const { t } = useTranslation('common')

    return (
        <>
            <div className="max-w-[1260px] px-[30px] md:px-[15px] m-auto">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[47px] mb-[5px] text-[45px]">{t('sizeGuide')}</h1>
                    <nav>
                        <ol className="text-[14px] text-55black mt-[10px]">
                            <li className="inline">
                                <Link href="/">{t('home')} / </Link>
                            </li>
                            <li className="inline">{t('sizeGuide')}</li>
                        </ol>
                    </nav>
                </div>
                <h2 className="mb-[10px] text-[18px] font-medium">
                    {t('sizesForProduct')}
                </h2>
                <p className="mb-5 leading-7 text-55black">
                    {t('approximateConversion')}
                </p>
                <div className="overflow-x-auto scrollbar">
                    <table
                        className="mb-[20px] w-full table-auto border-collapse border border-gray-200 min-w-full">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">{t('size')}</th>
                            <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">{t('us')}</th>
                            <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">{t('bust')}</th>
                            <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">{t('bodyWaist')}</th>
                            <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">{t('fullestHip')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">XS</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">2</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">32</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">24 - 25</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">33 - 34</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">S</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">4</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">34 - 35</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">26 - 27</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">35 - 36</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">M</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">6</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">36 - 37</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">28 - 29</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">37 - 38</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">L</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">8</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">38 - 39</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">30 - 31</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">39 - 40</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">XL</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">10</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">40 - 42</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">32 - 33</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">41 - 42</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">XXL</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">12</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">40 - 41</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">34 - 35</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">43 - 44</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-[30px] md:flex-col md:mt-[20px]">
                    <div className="w-[58%] md:w-full">
                        <h4 className="mb-[10px] text-[18px] font-medium text-11black">
                            {t('howToMeasure')}
                        </h4>
                        <h5 className="mb-[5px] font-medium text-11black">
                            1. {t('bust')}
                        </h5>
                        <p className="mb-[15px] leading-7 text-55black">
                            {t('measureChest')}
                        </p>
                        <h5 className="mb-[5px] font-medium text-11black">
                            2. {t('bodyWaist')}
                        </h5>
                        <p className="mb-[15px] leading-7 text-55black">
                            {t('measureWaist')}
                        </p>
                        <h5 className="mb-[5px] font-medium text-11black">
                            3. {t('fullestHip')}
                        </h5>
                        <p className="mb-[15px] leading-7 text-55black">
                            {t('measureSeat')}
                        </p>
                    </div>
                    <div className="m-auto w-[42%] md:w-full">
                        <Image
                            src={sizeImage}
                            alt="size comparison image"
                            className="m-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index