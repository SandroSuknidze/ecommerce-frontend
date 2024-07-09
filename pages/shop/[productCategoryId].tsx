import { useRouter } from 'next/router'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { Slider } from '@mui/material'
import CollectionCard from '@/components/CollectionCard'
import collection2 from '@/public/assets/collections/collection2.webp'
import { AnimatePresence, motion } from 'framer-motion'

import { categories } from '@/pages/shop/index'
import { MemoizedBrandListItem as BrandListItem } from '@/components/BrandListItem'
import { MemoizedColorListItem as ColorListItem } from '@/components/ColorListItem'
import { MemoizedSizeListItem as SizeListItem } from '@/components/SizeListItem'
import { parseAsArrayOf, parseAsInteger, useQueryState } from 'nuqs'
import FilterComponent from '@/components/FilterComponent'

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
    const { productCategory } = router.query



    function getCategoryName() {
        return categories.find(
            (category) => category.id === Number(productCategory),
        )?.name
    }


    return (
        <div>
            <div className="flex h-[200px] w-full flex-col justify-center bg-shop-banner text-center text-white">
                <h1 className="mx-auto text-[45px]">{getCategoryName()}</h1>
                <nav className="text-[14px]">Home / {getCategoryName()}</nav>
            </div>

            <div className="mx-auto mt-[50px] flex max-w-[1410px]">
                <div className="w-1/4 px-[30px]">
                    <FilterComponent categories={categories} productCategory={productCategory} />
                </div>
                <div className="w-3/4">
                    <div className="text-55black pl-[15px] mb-[40px]">There are 30 results in total</div>
                    <div className="grid grid-cols-3 pr-[15px]">
                        <CollectionCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={169}
                            sale={143}
                        />
                        <CollectionCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={300}
                            sale={150}
                        />
                        <CollectionCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={300}
                            sale={150}
                        />
                        <CollectionCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={300}
                            sale={150}
                        />
                        <CollectionCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={300}
                            sale={150}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategoryId
