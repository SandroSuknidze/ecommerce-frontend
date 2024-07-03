import { useRouter } from 'next/router'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment, useEffect, useState } from 'react'
import { Slider } from '@mui/material'
import CollectionCard from '@/components/CollectionCard'
import collection2 from '@/public/assets/collections/collection2.webp'
import { motion, AnimatePresence } from "framer-motion";

import { categories } from '@/pages/shop/index'
import { BrandListItem } from '@/components/BrandListItem'
import { ColorListItem } from '@/components/ColorListItem'
import { SizeListItem } from '@/components/SizeListItem'

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

    const [isBrandOpen, setIsBrandOpen] = useState(true)

    function getCategoryName() {
        return categories.find(
            (category) => category.id === Number(productCategory)
        )?.name
    }

    function toggleBrand() {
        setIsBrandOpen(!isBrandOpen)
    }

    function valuetext(value: number) {
        return `$${value}`
    }

    const minDistance = 20

    const [value1, setValue1] = useState([0, 200])

    // @ts-ignore
    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return
        }

        if (activeThumb === 0) {
            setValue1([
                Math.min(newValue[0], value1[1] - minDistance),
                value1[1],
            ])
        } else {
            setValue1([
                value1[0],
                Math.max(newValue[1], value1[0] + minDistance),
            ])
        }
    }


    return (
        <div>
            <div className="flex h-[200px] w-full flex-col justify-center bg-shop-banner text-center text-white">
                <h1 className="mx-auto text-[45px]">{getCategoryName()}</h1>
                <nav className="text-[14px]">Home / {getCategoryName()}</nav>
            </div>

            <div className="mx-auto mt-[50px] flex max-w-[1410px]">
                <div className="w-1/4 px-[30px]">
                    <div className="mb-[30px] border-b-[1px] pb-[20px] border-[#ebebeb]">
                        <div
                            onClick={toggleBrand}
                            className="mb-[20px] flex cursor-pointer justify-between"
                        >
                            <h4 className="text-[18px] font-medium">Brand</h4>
                            <div className="relative">
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className="text-87black"
                                />
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className={`${isBrandOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                                />
                            </div>
                        </div>
                        <ul className="max-h-[240px] overflow-y-scroll scrollbar">
                            <AnimatePresence initial={false}>
                                {isBrandOpen && (
                                    <motion.section
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        transition={{ type: 'spring', duration: 1, bounce: 0 }}
                                    >

                                        {brands.map((brand) => {
                                            return (
                                                <Fragment key={brand.id}>
                                                    <BrandListItem name={brand.name} quantity={brand.quantity} />
                                                </Fragment>
                                            )
                                        })}
                                    </motion.section>
                                )}
                            </AnimatePresence>
                        </ul>

                    </div>
                    <div className="border-b-[1px] mb-[30px] pb-[20px] border-[#ebebeb]">
                        <div
                            // onClick={toggleBrand}
                            className="mb-[20px] flex cursor-pointer justify-between"
                        >
                            <h4 className="text-[18px] font-medium">Color</h4>
                            <div className="relative">
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className="text-87black"
                                />
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className={`${isBrandOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                                />
                            </div>
                        </div>
                        <ul className="max-h-[240px] flex gap-[10px] flex-wrap">
                            {colors.map((color) => {
                                return (
                                    <ColorListItem
                                        key={color.id}
                                        name={color.name}
                                        quantity={color.quantity}
                                    />
                                )
                            })}
                        </ul>

                    </div>

                    <div className="border-b-[1px] mb-[30px] pb-[20px] border-[#ebebeb]">
                        <div
                            // onClick={toggleBrand}
                            className="mb-[20px] flex cursor-pointer justify-between"
                        >
                            <h4 className="text-[18px] font-medium">Price</h4>
                            <div className="relative">
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className="text-87black"
                                />
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className={`${isBrandOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <Slider
                                    getAriaLabel={() => 'Minimum distance'}
                                    value={value1}
                                    onChange={handleChange1}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    disableSwap
                                    max={200}
                                    sx={{
                                        color: 'black',
                                        width: '94%',
                                        '& .MuiSlider-thumb:hover': {
                                            boxShadow:
                                                '0 0 0 6px rgba(135, 135, 135, 0.5) !important',
                                        },
                                        '& .MuiSlider-thumb.Mui-focusVisible': {
                                            boxShadow:
                                                '0 0 0 6px transparent !important',
                                        },
                                    }}
                                />
                            </div>

                            <div className="text-55black mt-[10px]">Price:&nbsp;
                                <span className="text-11black font-medium">
                                    ${value1[0].toFixed(2)} - ${value1[1].toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="border-b-[1px] mb-[30px] pb-[30px] border-[#ebebeb]">
                        <div
                            // onClick={toggleBrand}
                            className="mb-[20px] flex cursor-pointer justify-between"
                        >
                            <h4 className="text-[18px] font-medium">Size</h4>
                            <div className="relative">
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className="text-87black"
                                />
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className={`${isBrandOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                                />
                            </div>
                        </div>
                        <div>
                            <ul className="max-h-[240px] flex gap-[10px] flex-wrap">
                                {sizes.map((size) => {
                                    return (
                                        <SizeListItem
                                            key={size.id}
                                            name={size.name}
                                            quantity={size.quantity}
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                    </div>


                </div>
                <div className="w-3/4">
                    <div className="grid grid-cols-3">
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
