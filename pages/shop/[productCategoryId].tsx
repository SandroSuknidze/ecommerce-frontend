import { useRouter } from 'next/router'
import CollectionCard from '@/components/CollectionCard'
import collection2 from '@/public/assets/collections/collection2.webp'
import { categories } from '@/pages/shop/index'
import FilterComponent from '@/components/FilterComponent'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment, useEffect, useState } from 'react'
import FilterMenu from '@/components/FilterMenu'
import axiosInstance from '@/utils/axiosInstance'

export const brands = [
    { id: 1, name: 'John', quantity: 1 },
    { id: 2, name: 'Jane', quantity: 5 },
    { id: 3, name: 'David', quantity: 3 },
    { id: 4, name: 'Sarah', quantity: 4 },
    { id: 5, name: 'Michael', quantity: 10 },
    { id: 6, name: 'Emily', quantity: 24 },
    { id: 7, name: 'Daniel', quantity: 1 },
    { id: 8, name: 'Olivia', quantity: 0 },
    { id: 9, name: 'Sophia', quantity: 1 },
    { id: 10, name: 'Ava', quantity: 1 },
    { id: 11, name: 'William', quantity: 2 },
    { id: 12, name: 'James', quantity: 1 },
    { id: 13, name: 'Benjamin', quantity: 3 },
]

export const colors = [
    { id: 1, name: 'red', quantity: 3 },
    { id: 2, name: 'blue', quantity: 1 },
    { id: 3, name: 'green', quantity: 14 },
    { id: 4, name: 'yellow', quantity: 0 },
    { id: 5, name: 'orange', quantity: 3 },
    { id: 6, name: 'purple', quantity: 4 },
    { id: 7, name: 'pink', quantity: 5 },
    { id: 8, name: 'black', quantity: 0 },
    { id: 9, name: 'white', quantity: 3 },
    { id: 10, name: 'brown', quantity: 4 },
    { id: 11, name: 'gray', quantity: 0 },
]

export const sizes = [
    { id: 1, name: 'XS', quantity: 1 },
    { id: 2, name: 'S', quantity: 1 },
    { id: 3, name: 'M', quantity: 1 },
    { id: 4, name: 'L', quantity: 1 },
    { id: 5, name: 'XL', quantity: 1 },
    { id: 6, name: 'XXL', quantity: 1 },
]

function ProductCategoryId() {
    const router = useRouter()
    const { productCategoryId, colors, brands, price, sizes } = router.query;

    const [isHovered, setIsHovered] = useState(false)
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)

    const [products, setProducts] = useState([])


    const [testF, setTestF] = useState(router.asPath.split('?')[1])
    function toggleFilterMenu() {
        setIsFilterMenuOpen(!isFilterMenuOpen)
    }

    function getCategoryName() {
        return categories.find(
            (category) => category.id === Number(productCategoryId),
        )?.name
    }

    async function fetchProducts() {
        try {
            const params = {
                colors: formatQueryParam(colors),
                brands: formatQueryParam(brands),
                price: formatQueryParam(price),
                sizes: formatQueryParam(sizes),
            };

            const response = await axiosInstance.get(`/products/${productCategoryId}`, { params });
            setProducts(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
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
            fetchProducts();
        }
    }, [productCategoryId, colors, brands, price, sizes]);



    return (
        <div>
            <FilterMenu isOpen={isFilterMenuOpen} toggleFilterMenu={toggleFilterMenu} />
            <div className="flex h-[200px] w-full flex-col justify-center bg-shop-banner bg-center text-center text-white">
                <h1 className="mx-auto text-[45px]">{getCategoryName()}</h1>
                <nav className="text-[14px]">Home / {getCategoryName()}</nav>
            </div>

            <div className="mx-auto mt-[50px] flex max-w-[1410px]">
                <div className="w-1/4 px-[30px] lg:hidden">
                    <FilterComponent />
                </div>
                <div className="w-3/4 lg:w-full">
                    <div className="flex justify-between mb-[30px] px-[15px]">
                        <div className="text-55black xs:text-[14px]">
                            There are {products.length} {products.length > 0 ? 'results' : 'result'} in total
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
                            <FontAwesomeIcon icon={faFilter} className={`${isHovered && 'text-11black'} m-auto`}/>
                            <div className={`${isHovered && 'text-11black'} uppercase h-[25px] m-auto flex items-center`}>
                                Filter
                            </div>
                        </button>
                    </div>
                    <div className="grid grid-cols-3 pr-[15px] md:grid-cols-2 lg:pr-0">
                        {products.map((product:any) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategoryId
