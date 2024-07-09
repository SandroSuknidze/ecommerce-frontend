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
    const [isColorOpen, setIsColorOpen] = useState(true)
    const [isPriceOpen, setIsPriceOpen] = useState(true)
    const [isSizeOpen, setIsSizeOpen] = useState(true)

    const [selectedBrands, setSelectedBrands] = useQueryState<number[]>('brands', parseAsArrayOf(parseAsInteger).withDefault([]))
    const [selectedColors, setSelectedColors] = useQueryState<number[]>('colors', parseAsArrayOf(parseAsInteger).withDefault([]))
    const [selectedPrices, setSelectedPrices] = useQueryState<number[]>('price', parseAsArrayOf(parseAsInteger).withDefault([]))
    const [value1, setValue1] = useState<number[]>([0, 200])
    const [selectedSizes, setSelectedSizes] = useQueryState<number[]>('size', parseAsArrayOf(parseAsInteger).withDefault([]))


    function getCategoryName() {
        return categories.find(
            (category) => category.id === Number(productCategory),
        )?.name
    }

    function toggleBrand() {
        setIsBrandOpen(!isBrandOpen)
    }

    function toggleColor() {
        setIsColorOpen(!isColorOpen)
    }

    function togglePrice() {
        setIsPriceOpen(!isPriceOpen)
    }

    function toggleSize() {
        setIsSizeOpen(!isSizeOpen)
    }

    function valuetext(value: number) {
        return `$${value}`
    }


    // @ts-ignore
    const handleChangePrice = useCallback((event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return
        }

        const minDistance = 0

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
        console.log('hii')
        setSelectedPrices([newValue[0], newValue[1]]);

    }, [setSelectedPrices, value1])

    // Initialize value1 based on selectedPrices from URL
    useEffect(() => {
        if (selectedPrices.length > 0) {
            setValue1(selectedPrices)
        }
    }, [selectedPrices])

    const handleChangeBrand = useCallback((event: { target: { value: string; checked: boolean; }; }) => {
        console.log('brand')
        const value = Number(event.target.value)
        const numberBrands = selectedBrands?.map(Number)
        const updatedBrands = event.target.checked
            ? [...numberBrands, value]
            : numberBrands.filter((id: number) => id !== value)

        setSelectedBrands(updatedBrands.length > 0 ? updatedBrands : null);

    }, [selectedBrands, setSelectedBrands])

    const handleChangeColor = useCallback((isChecked: boolean, id: number) => {
        console.log('color')
        const numberColors = selectedColors?.map(Number)
        const updatedColors = !isChecked
            ? [...numberColors, id]
            : numberColors.filter((color_id: number) => color_id !== id)

        setSelectedColors(updatedColors.length > 0 ? updatedColors : null);

    }, [selectedColors, setSelectedColors])

    const handleChangeSize = useCallback((isChecked: boolean, id: number) => {
        console.log('size')
        const numberSizes = selectedSizes?.map(Number)
        const updatedSizes = !isChecked
            ? [...numberSizes, id]
            : numberSizes.filter((size_id: number) => size_id !== id)

        setSelectedSizes(updatedSizes.length > 0 ? updatedSizes : null);

    }, [selectedSizes, setSelectedSizes])


    return (
        <div>
            <div className="flex h-[200px] w-full flex-col justify-center bg-shop-banner text-center text-white">
                <h1 className="mx-auto text-[45px]">{getCategoryName()}</h1>
                <nav className="text-[14px]">Home / {getCategoryName()}</nav>
            </div>

            <div className="mx-auto mt-[50px] flex max-w-[1410px]">
                <div className="w-1/4 px-[30px]">
                    <div className="mb-[20px] border-b-[1px] pb-[20px] border-[#ebebeb]">
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
                                                    <BrandListItem
                                                        isChecked={selectedBrands?.map(Number).includes(brand.id)}
                                                        id={brand.id}
                                                        name={brand.name}
                                                        quantity={brand.quantity}
                                                        onChange={handleChangeBrand}
                                                    />
                                                </Fragment>
                                            )
                                        })}
                                    </motion.section>
                                )}
                            </AnimatePresence>
                        </ul>

                    </div>
                    <div className="border-b-[1px] mb-[20px] pb-[20px] border-[#ebebeb]">
                        <div
                            onClick={toggleColor}
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
                                    className={`${isColorOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                                />
                            </div>
                        </div>
                        <ul className="max-h-[240px] overflow-hidden">
                            <AnimatePresence initial={false}>
                                {isColorOpen && (
                                    <motion.section
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        transition={{ type: 'spring', duration: 1, bounce: 0 }}
                                        className="flex gap-[10px] flex-wrap"
                                    >
                                        {colors.map((color) => {
                                            return (
                                                <ColorListItem
                                                    isChecked={selectedColors?.map(Number).includes(color.id)}
                                                    id={color.id}
                                                    key={color.id}
                                                    name={color.name}
                                                    onChange={handleChangeColor}
                                                />
                                            )
                                        })}
                                    </motion.section>
                                )}
                            </AnimatePresence>
                        </ul>

                    </div>

                    <div className="border-b-[1px] mb-[20px] pb-[20px] border-[#ebebeb]">
                        <div
                            onClick={togglePrice}
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
                                    className={`${isPriceOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                                />
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <AnimatePresence initial={false}>
                                {isPriceOpen && (
                                    <motion.section
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        transition={{ type: 'spring', duration: 1, bounce: 0 }}
                                    >
                                        <div className="text-center">
                                            <Slider
                                                getAriaLabel={() => 'Minimum distance'}
                                                value={value1}
                                                onChange={handleChangePrice}
                                                valueLabelDisplay="auto"
                                                getAriaValueText={valuetext}
                                                max={200}
                                                sx={{
                                                    color: 'black',
                                                    width: '91%',
                                                    '& .MuiSlider-thumb:hover': {
                                                        boxShadow:
                                                            '0 0 0 0px rgba(135, 135, 135, 0.5) !important',
                                                    },
                                                    '& .MuiSlider-thumb.Mui-focusVisible': {
                                                        boxShadow:
                                                            '0 0 0 0px transparent !important',
                                                    },
                                                }}
                                            />

                                        </div>

                                        <div className="text-55black mt-[10px]">Price:&nbsp;
                                            <span className="text-11black font-medium">
                                                ${value1[0]?.toFixed(2)} - ${value1[1]?.toFixed(2)}
                                            </span>
                                        </div>
                                    </motion.section>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="border-b-[1px] mb-[20px] pb-[20px] border-[#ebebeb]">
                        <div
                            onClick={toggleSize}
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
                                    className={`${isSizeOpen ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] rotate-90 text-87black transition duration-500`}
                                />
                            </div>
                        </div>
                        <div>
                            <ul className="max-h-[240px] overflow-y-hidden">
                                <AnimatePresence initial={false}>
                                    {isSizeOpen && (
                                        <motion.section
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            transition={{ type: 'spring', duration: 1, bounce: 0 }}
                                            className="flex gap-[10px] flex-wrap"
                                        >
                                            {sizes.map((size) => {
                                                return (
                                                    <SizeListItem
                                                        isChecked={selectedSizes?.map(Number).includes(size.id)}
                                                        key={size.id}
                                                        id={size.id}
                                                        name={size.name}
                                                        onChange={handleChangeSize}
                                                    />
                                                )
                                            })}
                                        </motion.section>
                                    )}
                                </AnimatePresence>
                            </ul>
                        </div>
                    </div>
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
