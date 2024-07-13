import Collection from '@/components/Collection'

import firstImage from '@/public/assets/collections/collection16.webp'
import useResponsiveCols from '@/hooks/useResponsiveCols'
import axiosInstance from '@/utils/axiosInstance'
import { useEffect, useState } from 'react'

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

            console.log(data);

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
                    {categories.map((category: any) => (
                        <Collection
                            key={category.id}
                            id={category.id}
                            imageSrc={firstImage}
                            title={category.name}
                            totalProducts={category.products_count}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index
