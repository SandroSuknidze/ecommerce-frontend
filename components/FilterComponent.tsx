import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { AnimatePresence, motion } from 'framer-motion';
import { Slider } from '@mui/material';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { MemoizedBrandListItem as BrandListItem } from '@/components/BrandListItem';
import { MemoizedColorListItem as ColorListItem } from '@/components/ColorListItem';
import { MemoizedSizeListItem as SizeListItem } from '@/components/SizeListItem';
import { parseAsArrayOf, parseAsInteger, useQueryState } from 'nuqs';
import axiosInstance from '@/utils/axiosInstance';
import { SkeletonLoader } from '@/components/SkeletonLoader'
import { useTranslation } from 'next-i18next'

const FilterComponent = () => {
    const { t } = useTranslation('common')

    const [isBrandOpen, setIsBrandOpen] = useState(true);
    const [isColorOpen, setIsColorOpen] = useState(true);
    const [isPriceOpen, setIsPriceOpen] = useState(true);
    const [isSizeOpen, setIsSizeOpen] = useState(true);

    const [selectedBrands, setSelectedBrands] = useQueryState<number[]>('brands', parseAsArrayOf(parseAsInteger).withDefault([]));
    const [selectedColors, setSelectedColors] = useQueryState<number[]>('colors', parseAsArrayOf(parseAsInteger).withDefault([]));
    const [selectedPrices, setSelectedPrices] = useQueryState<number[]>('price', parseAsArrayOf(parseAsInteger).withDefault([]));
    const [value1, setValue1] = useState<number[]>([0, 200]);
    const [selectedSizes, setSelectedSizes] = useQueryState<number[]>('sizes', parseAsArrayOf(parseAsInteger).withDefault([]));

    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const [isBrandsLoading, setIsBrandsLoading] = useState(true);
    const [isColorsLoading, setIsColorsLoading] = useState(true);
    const [isSizesLoading, setIsSizesLoading] = useState(true);

    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);


    useEffect(() => {
        const fetchFilters = async () => {
            try {
                setIsBrandsLoading(true);
                setIsColorsLoading(true);
                setIsSizesLoading(true);

                const [brandsResponse, colorsResponse, sizesResponse] = await Promise.all([
                    axiosInstance.get('/brands'),
                    axiosInstance.get('/colors'),
                    axiosInstance.get('/sizes'),
                ]);

                setBrands(brandsResponse.data);
                setColors(colorsResponse.data);
                setSizes(sizesResponse.data);
            } catch (error) {
                console.error('Error fetching filters:', error);
            } finally {
                setIsBrandsLoading(false);
                setIsColorsLoading(false);
                setIsSizesLoading(false);
            }
        };

        fetchFilters();
    }, []);

    function toggleBrand() {
        setIsBrandOpen(!isBrandOpen);
    }

    function toggleColor() {
        setIsColorOpen(!isColorOpen);
    }

    function togglePrice() {
        setIsPriceOpen(!isPriceOpen);
    }

    function toggleSize() {
        setIsSizeOpen(!isSizeOpen);
    }

    function valuetext(value: number) {
        return `$${value}`;
    }

    const handleDebouncedChangePrice = (newValue: number[]) => {
        setSelectedPrices(newValue);
    };

    // @ts-ignore
    const handleChangePrice = useCallback((event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        const minDistance = 0;

        if (activeThumb === 0) {
            setValue1([
                Math.min(newValue[0], value1[1] - minDistance),
                value1[1],
            ]);

        } else {
            setValue1([
                value1[0],
                Math.max(newValue[1], value1[0] + minDistance),
            ]);

        }
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            handleDebouncedChangePrice([newValue[0], newValue[1]]);
        }, 500);
    }, [setSelectedPrices, value1]);

    useEffect(() => {
        if (selectedPrices.length > 0) {
            setValue1(selectedPrices);
        }
    }, [selectedPrices]);

    const handleChangeBrand = useCallback((event: { target: { value: string; checked: boolean; }; }) => {
        const value = Number(event.target.value);
        const numberBrands = selectedBrands?.map(Number);
        const updatedBrands = event.target.checked
            ? [...numberBrands, value]
            : numberBrands.filter((id: number) => id !== value);

        setSelectedBrands(updatedBrands.length > 0 ? updatedBrands : null);

    }, [selectedBrands, setSelectedBrands]);

    const handleChangeColor = useCallback((isChecked: boolean, id: number) => {
        const numberColors = selectedColors?.map(Number);
        const updatedColors = !isChecked
            ? [...numberColors, id]
            : numberColors.filter((color_id: number) => color_id !== id);

        setSelectedColors(updatedColors.length > 0 ? updatedColors : null);

    }, [selectedColors, setSelectedColors]);

    const handleChangeSize = useCallback((isChecked: boolean, id: number) => {
        const numberSizes = selectedSizes?.map(Number);
        const updatedSizes = !isChecked
            ? [...numberSizes, id]
            : numberSizes.filter((size_id: number) => size_id !== id);

        setSelectedSizes(updatedSizes.length > 0 ? updatedSizes : null);

    }, [selectedSizes, setSelectedSizes]);

    return (
        <div>
            <div className="mb-[20px] border-b-[1px] pb-[20px] border-[#ebebeb]">
                <div
                    onClick={toggleBrand}
                    className="mb-[20px] flex cursor-pointer justify-between"
                >
                    <h4 className="text-[18px] font-medium text-11black">{t('brand')}</h4>
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
                                {isBrandsLoading ? (
                                    Array(5).fill(null).map((_, index) => (
                                        <SkeletonLoader key={index} className="h-6 mb-2" />
                                    ))
                                ) : (
                                    brands.map((brand : any) => (
                                        <Fragment key={brand.id}>
                                            <BrandListItem
                                                isChecked={selectedBrands?.map(Number).includes(brand.id)}
                                                id={brand.id}
                                                name={brand.name}
                                                onChange={handleChangeBrand}
                                            />
                                        </Fragment>
                                    ))
                                )}
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
                    <h4 className="text-[18px] font-medium text-11black">{t('color')}</h4>
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
                                {isColorsLoading ? (
                                    Array(5).fill(null).map((_, index) => (
                                        <SkeletonLoader key={index} className="h-6 w-16 mb-2" />
                                    ))
                                ) : (
                                    colors.map((color : any) => (
                                        <ColorListItem
                                            isChecked={selectedColors?.map(Number).includes(color.id)}
                                            id={color.id}
                                            key={color.id}
                                            name={color.name}
                                            onChange={handleChangeColor}
                                        />
                                    ))
                                )}
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
                    <h4 className="text-[18px] font-medium text-11black">{t('price')}</h4>
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

                                <div className="text-55black mt-[10px]">{t('price')}:&nbsp;
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
                    <h4 className="text-[18px] font-medium text-11black">{t('size')}</h4>
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
                                    {isSizesLoading ? (
                                        Array(5).fill(null).map((_, index) => (
                                            <SkeletonLoader key={index} className="h-6 w-16 mb-2" />
                                        ))
                                    ) : (
                                        sizes.map((size : any) => (
                                            <SizeListItem
                                                isChecked={selectedSizes?.map(Number).includes(size.id)}
                                                key={size.id}
                                                id={size.id}
                                                name={size.name}
                                                onChange={handleChangeSize}
                                            />
                                        ))
                                    )}
                                </motion.section>
                            )}
                        </AnimatePresence>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
