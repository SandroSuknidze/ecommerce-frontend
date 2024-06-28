import { useRouter } from 'next/router'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Slider } from '@mui/material'
import CollectionCard from '@/components/CollectionCard'
import collection2 from '@/public/assets/collections/collection2.webp'
import { motion, AnimatePresence } from "framer-motion";

import { categories } from '@/pages/shop/index'

export const brands = [
    { id: 1, name: 'Adriana Paella' },
    { id: 2, name: 'Adriana Paella' },
    { id: 3, name: 'Adriana Paella' },
    { id: 4, name: 'Adriana Paella' },
    { id: 5, name: 'Adriana Paella' },
    { id: 6, name: 'Adriana Paella' },
    { id: 7, name: 'Adriana Paella' },
    { id: 8, name: 'Adriana Paella' },
    { id: 9, name: 'Adriana Paella' },
    { id: 10, name: 'Adriana Paella' },
    { id: 11, name: 'Adriana Paella' },
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
        return `${value}°C`
    }

    const minDistance = 10

    const [value1, setValue1] = useState([20, 37])

    // @ts-ignore
    const handleChange1 = (newValue, activeThumb) => {
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
                    <div className="mb-[50px]">
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
                                    className={`${isBrandOpen ? 'opacity-100' : 'opacity-0'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                                />
                            </div>
                        </div>
                        <ul className="max-h-[240px] overflow-y-scroll">
                            <AnimatePresence initial={false}>
                                {isBrandOpen && (
                                    <motion.section
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        transition={{ type: 'spring', duration: 1, bounce: 0 }}
                                    >

                                        {brands.map((brands) => {
                                            return (
                                                <li key={brands.id} className="mb-[7px] flex h-[18px] overflow-hidden">
                                                    <div className="flex">
                                                        <div className="mr-[10px]">
                                                            <input
                                                                type="checkbox"
                                                                className="h-[18px] w-[18px] accent-black"
                                                            />
                                                        </div>
                                                        <p className="leading-[18px]">
                                                            {brands.name}
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        })}



                                    </motion.section>
                                )}
                            </AnimatePresence>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h4>Color</h4>
                        </div>
                        <ul>
                            <li>black</li>
                            <li>red</li>
                            <li>green</li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <h4>Price</h4>
                        </div>
                        <div>
                            <Slider
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                                sx={{
                                    color: 'black',
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
                            {value1.map((item) => (
                                <div key={item}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>Size</div>
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
