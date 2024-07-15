import { useRouter } from 'next/router'
import CollectionCard from '@/components/CollectionCard'
import FilterComponent from '@/components/FilterComponent'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import FilterMenu from '@/components/FilterMenu'
import axiosInstance from '@/utils/axiosInstance'
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { withTranslations } from '@/utils/i18nHelper'
import { GetStaticPaths } from 'next'
import { useTranslation } from 'next-i18next'

export const getStaticProps = withTranslations(['common']);

function ProductCategoryId() {
    const router = useRouter()
    const { t } = useTranslation('common')

    const { productCategoryId, colors, brands, price, sizes } = router.query;

    const [isHovered, setIsHovered] = useState(false)
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)

    const [products, setProducts] = useState([])
    const [isProductsLoading, setIsProductsLoading] = useState(true);

    const [categoryName, setCategoryName] = useState('');



    function toggleFilterMenu() {
        setIsFilterMenuOpen(!isFilterMenuOpen)
    }

    async function getCategoryName() {
        try {
            const response = await axiosInstance.get(`/category/${productCategoryId}`)
            const data = response.data
            setCategoryName(data[0].name)
        } catch (err) {
            console.error(err)
            return 'Category not found';
        }
    }

    async function fetchProducts() {
        setIsProductsLoading(true);
        try {
            const params = {
                colors: formatQueryParam(colors),
                brands: formatQueryParam(brands),
                price: formatQueryParam(price),
                sizes: formatQueryParam(sizes),
            };

            const response = await axiosInstance.get(`/products/${productCategoryId}`, { params });
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setIsProductsLoading(false);
        }
    }


    function formatQueryParam(param: string | any[] | undefined) {
        if (Array.isArray(param)) {
            return param.join(',');
        }
        return param || '';
    }


    useEffect(() => {
        if (productCategoryId) {
            getCategoryName();
            fetchProducts();
        }
    }, [productCategoryId, colors, brands, price, sizes]);



    return (
        <div>
            <FilterMenu isOpen={isFilterMenuOpen} toggleFilterMenu={toggleFilterMenu} />
            <div className="flex h-[200px] w-full flex-col justify-center bg-shop-banner bg-center text-center text-white items-center">
                {isProductsLoading ? (
                    <>
                        <SkeletonLoader className="h-[40px] w-[250px] rounded-xl mt-[10px]" />
                        <SkeletonLoader className="h-[20px] w-[150px] rounded-xl mt-[10px]" />
                    </>
                ) : (
                    <>
                        <h1 className="mx-auto text-[45px]">{categoryName}</h1>
                        <nav className="text-[14px]">{t('home')} / {categoryName}</nav>
                    </>
                )}
            </div>

            <div className="mx-auto mt-[50px] flex max-w-[1410px]">
                <div className="w-1/4 px-[30px] lg:hidden">
                    <FilterComponent />
                </div>
                <div className="w-3/4 lg:w-full">
                    <div className="flex justify-between mb-[30px] px-[15px]">
                        <div className="text-55black xs:text-[14px]">
                            {isProductsLoading ? (<SkeletonLoader className="h-[20px] w-[200px] rounded-xl" />)
                                : `${t('thereAre')} ${products.length} ${products.length > 0 ? `${t('results')}` : `${('result')}`} ${t('inTotal')}`
                            }
                        </div>
                        <button
                            className="hidden py-[3px] px-[18px] rounded-[3px] bg-11black text-white upper text-[12px]
                                font-semibold h-auto gap-[5px] border-[1px] border-black transition duration-500
                                hover:bg-white
                                lg:flex xs:px-[15px]"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => toggleFilterMenu()}
                        >
                            <FontAwesomeIcon icon={faFilter} className={`${isHovered && 'text-11black'} m-auto`} />
                            <div
                                className={`${isHovered && 'text-11black'} uppercase h-[25px] m-auto flex items-center`}>
                                {t('filter')}
                            </div>
                        </button>
                    </div>
                    <div className="grid grid-cols-3 pr-[15px] md:grid-cols-2 lg:pr-0">
                        {isProductsLoading ? (
                            Array(6).fill(null).map((_, index) => (
                                <div key={index} className="flex flex-col flex-wrap justify-center mx-[15px] mb-[20px]">
                                    <SkeletonLoader className="h-[380px] w-[100%] rounded-xl" />
                                    <SkeletonLoader className="h-[20px] w-[100%] rounded-xl mt-[10px]" />
                                    <SkeletonLoader className="h-[20px] w-[40%] rounded-xl mt-[10px]" />
                                    <SkeletonLoader className="h-[20px] w-[30%] rounded-xl mt-[10px]" />
                                    <SkeletonLoader className="h-[20px] w-[30%] rounded-xl mt-[10px]" />
                                </div>
                            ))
                        ) : (
                            products.map((product: any) => (
                                <CollectionCard
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    imageSrc={product.image_path[0]}
                                    price={product.price}
                                    sale={product.sale_price}
                                    rating={product.rating}
                                    size_id={product.sizes[0].id}
                                    size_name={product.sizes[0].name}
                                    color_id={product.colors[0].id}
                                    color_name={product.colors[0].name}
                                    colors={product.colors}
                                />
                            ))
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCategoryId
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}