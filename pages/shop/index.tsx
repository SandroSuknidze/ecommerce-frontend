import Collection from '@/components/Collection'

import firstImage from '@/public/assets/collections/collection16.webp'
import useResponsiveCols from '@/hooks/useResponsiveCols'
import axiosInstance from '@/utils/axiosInstance'
import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/swiper-react'
import { SkeletonLoader } from '@/components/SkeletonLoader'

export const categories = [
    { id: 1, name: "Woman's a Shirts" },
    { id: 2, name: "Woman's b Shirts" },
    { id: 3, name: "Woman's c Shirts" },
    { id: 4, name: "Woman's d Shirts" },
    { id: 5, name: "Woman's e Shirts" },
]

function Index() {
    const numCols = useResponsiveCols({ native: 4, xl: 4, lg: 3, md: 2, sm: 2, xs: 1});

    const [categories, setCategories] = useState([])

    async function fetchCategories() {
        try {
            const response = await axiosInstance('/categories')
            const data = await response.data
            setCategories(data)
        } catch (error) {
            console.error('Error fetching categories:', error)
        }
    }

    useEffect(() => {
        fetchCategories()

    }, [])

    return (
        <div>
            <div className="py-[60px]">
                <div className="mx-[9.5px] px-[30px] text-center">
                    <h1 className="mb-[7px] text-[45px]">All Collections</h1>
                    <div className="m-auto max-w-[600px] text-[#555555]">
                        <p>
                            Posuere in netus a eu varius adipiscing suspendisse
                            elementum vitae tempor suspendisse ullamcorper
                            aenean taciti morbi potenti.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="mx-auto grid max-w-[1500px] px-[30px] xl:px-[15px] md:!px-0"
                     style={{ gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))` }}
                >
                    {categories.length > 0 ?
                        (categories.map((category: any) => (
                            <Collection
                                key={category.id}
                                id={category.id}
                                imageSrc={category.image_path}
                                title={category.name}
                                totalProducts={category.products_count}
                            />
                        ))) : (
                            Array(8).fill(null).map((_, index) => (
                                <div key={index} className="flex flex-col flex-wrap justify-center mx-[15px] mb-[20px]">
                                    <SkeletonLoader className="h-[380px] w-[100%] rounded-xl" />
                                </div>
                            ))
                        )}
                </div>
            </div>
        </div>
    )
}

export default Index
