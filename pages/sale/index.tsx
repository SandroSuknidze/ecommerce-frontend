import Link from 'next/link'
import CollectionCard from '@/components/CollectionCard'
import { useEffect, useRef, useState } from 'react'
import axiosInstance from '@/utils/axiosInstance'
import { SkeletonLoader } from '@/components/SkeletonLoader'
import { withTranslations } from '@/utils/i18nHelper'
import { useTranslation } from 'next-i18next'

export const getStaticProps = withTranslations(['common']);
function Index() {
    const { t } = useTranslation('common')
    const targetRef = useRef<any>(null);


    const [saleProducts, setSaleProducts] = useState([])

    async function fetchSaleProducts() {
        try {
            const response = await axiosInstance('/products/sale')
            const data = await response.data

            setSaleProducts(data)
        } catch (err) {
            console.error(err)
        }
    }

    const handleClick = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        fetchSaleProducts()
    }, [])
    return (
        <div>
            <div className="bg-sale-banner bg-center bg-cover h-[800px] w-full justify-center flex xl:h-[600px] lg:!h-[500px]">
                <div className="flex m-auto justify-center text-center ">
                    <div className="flex flex-col justify-center m-auto mx-[20%] md:mx-[10%]">
                        <div className="text-[14px] font-semibold mt-[15px]">{t('saleDresses')}</div>
                        <div className="text-[60px] mb-[15px] lg:text-[35px]">{t('specialOffers')}</div>
                        <div className="text-55black">
                            {t('getDeals')}
                        </div>
                        <div>
                            <div className="cursor-pointer" onClick={handleClick}>
                                <button
                                    className="rounded-[30px] border-[1px] border-black bg-black px-[66px] py-[14.5px]
                                    text-[12px] font-semibold uppercase text-white mt-[40px] lg:px-[40px] lg:py-[11px]"
                                >
                                    {t('shopNow')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-auto max-w-[1290px] px-[15px] md:px-0 mt-[50px]" ref={targetRef}>
                <div className="mb-[15px] md:px-[15px]">
                    <h2 className="mb-[5px] text-center text-[40px] md:text-[30px]">
                        {t('topOffers')}
                    </h2>
                    <p className="text-center text-55black">
                        {t('ourProducts')}
                    </p>
                </div>
                <div className="grid grid-cols-4 lg:grid-cols-3 md:!grid-cols-2 justify-center mt-[50px]">
                    {saleProducts.length > 0 ? (
                        saleProducts.map((saleProduct: any) => (
                            <CollectionCard
                                key={saleProduct.id}
                                id={saleProduct.id}
                                title={saleProduct.title}
                                imageSrc={saleProduct.image_path[0]}
                                price={saleProduct.price}
                                rating={saleProduct.rating}
                                sale={saleProduct.sale_price}
                                size_id={saleProduct.sizes[0].id}
                                size_name={saleProduct.sizes[0].name}
                                color_id={saleProduct.colors[0].id}
                                color_name={saleProduct.colors[0].name}
                                colors={saleProduct.colors}
                            />
                        ))
                    ) : (
                        Array(6).fill(null).map((_, index) => (
                            <div key={index} className="flex flex-col flex-wrap justify-center mx-[15px] mb-[20px]">
                                <SkeletonLoader className="h-[380px] w-[100%] rounded-xl" />
                                <SkeletonLoader className="h-[20px] w-[100%] rounded-xl mt-[10px]" />
                                <SkeletonLoader className="h-[20px] w-[40%] rounded-xl mt-[10px]" />
                                <SkeletonLoader className="h-[20px] w-[30%] rounded-xl mt-[10px]" />
                                <SkeletonLoader className="h-[20px] w-[30%] rounded-xl mt-[10px]" />
                            </div>
                        ))
                    )}
                </div>

            </div>

        </div>
    )
}

export default Index
