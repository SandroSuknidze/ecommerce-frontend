import Link from 'next/link'
import { Empty } from '@/components/Empty'
import { withTranslations } from '@/utils/i18nHelper'
import { useTranslation } from 'next-i18next'
import { useWishlist } from '@/context/WishlistContext'
import CollectionCard from '@/components/CollectionCard'
import { SkeletonLoader } from '@/components/SkeletonLoader'

export const getStaticProps = withTranslations(['common']);

function Index() {
    const { t } = useTranslation('common')
    const { items, wishlistLoading } = useWishlist()

    return (
        <>
            <div className="max-w-[1290px] m-auto px-[15px] md:px-0">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[59px] mb-[5px] text-[45px]">{t('wishlist')}</h1>
                    <nav>
                        <ol className="text-55black">
                            <li className="inline">
                                <Link href="/">{t('home')} / </Link>
                            </li>
                            <li className="inline">{t('wishlist')}</li>
                        </ol>
                    </nav>
                </div>

                {wishlistLoading ? (
                    <div className="grid grid-cols-4 lg:grid-cols-3 md:!grid-cols-2 gap-4">
                        {Array(4).fill(null).map((_, index) => (
                            <div key={index} className="flex flex-col flex-wrap justify-center mx-[15px] mb-[20px]">
                                <SkeletonLoader className="h-[380px] w-[100%] rounded-xl" />
                                <SkeletonLoader className="h-[20px] w-[100%] rounded-xl mt-[10px]" />
                                <SkeletonLoader className="h-[20px] w-[40%] rounded-xl mt-[10px]" />
                                <SkeletonLoader className="h-[20px] w-[30%] rounded-xl mt-[10px]" />
                                <SkeletonLoader className="h-[20px] w-[30%] rounded-xl mt-[10px]" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-4 lg:grid-cols-3 md:!grid-cols-2 justify-center">
                        {items.map((item, index) => (
                            <CollectionCard
                                key={index}
                                id={item.id}
                                title={item.title}
                                imageSrc={item.image_path}
                                price={item.price}
                                sale={item.sale_price}
                                isRemovable={true}
                                color_id={item.color_id}
                                size_id={item.size_id}
                                rating={item.rating}
                                colors={item.colors}
                                color_name={item.color_name}
                                size_name={item.size_name}
                            />
                        ))}
                    </div>
                )}

                {!items.length && !wishlistLoading && (
                    <div className="md:px-[15px] text-center">
                        <Empty title={t('wishlistEmpty')}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default Index
