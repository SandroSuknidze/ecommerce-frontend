import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import SearchIcon from '@/public/assets/SearchIcon';
import ProductCard from '@/components/ProductCard';
import { useLockBodyScroll } from 'react-use';
import useResponsiveCols from '@/hooks/useResponsiveCols';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { useState, useRef } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { useTranslation } from 'next-i18next'

interface SearchProps {
    toggleSearch: () => void;
}

function Search({ toggleSearch }: SearchProps) {
    useLockBodyScroll(true);
    const { t } = useTranslation('common')

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const searchTimeout = useRef<NodeJS.Timeout | null>(null);

    const numCols = useResponsiveCols({ native: 6, xl: 5, lg: 4, md: 3, sm: 2, xs: 2 });

    const handleSearch = async (searchQuery: string) => {
        if (searchQuery.length < 3) return;

        setLoading(true);
        setHasSearched(true);

        try {
            const response = await axiosInstance.post(`/product/search?q=${searchQuery}`);
            const data = await response.data;
            setResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (event: { target: { value: string } }) => {
        const value = event.target.value;
        setQuery(value);

        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }

        searchTimeout.current = setTimeout(() => {
            handleSearch(value);
        }, 500);
    };

    return (
        <div className="fixed inset-0 !z-[70] flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-0 !z-50 h-[90vh] w-full overflow-y-scroll bg-white px-[30px] py-[60px] xl:px-[15px]">
                <div className="m-auto max-w-[1410px]">
                    <h4 className="mb-[20px] text-center text-[32px] font-medium text-[#111111] md:text-[24px]">
                        {t('searchOurSite')}
                    </h4>
                    <div className="flex cursor-pointer justify-end">
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="absolute right-[22px] top-[30px] h-[22px] w-[22px] text-gray-400 transition duration-300 hover:text-11black"
                            onClick={() => toggleSearch()}
                        />
                    </div>
                    <form className="relative m-auto w-[66%] text-center md:w-full">
                        <input
                            value={query}
                            onChange={handleChange}
                            type="text"
                            placeholder={t('imLookingFor')}
                            className="mx-auto w-full rounded-[30px] border-[1px] border-[#ebebeb] py-[10px] pl-[20px]
                            pr-[50px] text-[14px] leading-[28px] outline-0 transition duration-300 placeholder:text-[#555555]
                            focus:border-[1px] focus:border-[#131313] focus:transition focus:duration-300"
                        />
                        <div className="absolute right-[20px] top-[16px] cursor-pointer">
                            <SearchIcon />
                        </div>
                    </form>
                    <div className="mt-[10px] flex justify-center">
                        <p className="text-[#555555]">{t('type3Letters')}</p>
                        {/*<ul className="pl-[10px]">*/}
                        {/*    <li className="mr-[5px] inline text-[#111111]">Shirt,</li>*/}
                        {/*    <li className="mr-[5px] inline text-[#111111]">Dress,</li>*/}
                        {/*    <li className="inline text-[#111111]">Sweater</li>*/}
                        {/*</ul>*/}
                    </div>
                    <div className="mt-[20px]">
                        <h4 className="text-[20px] font-semibold text-[#111111]">
                            {/*{!hasSearched && 'Popular Products'}*/}
                        </h4>
                    </div>
                    <div className="mt-[20px] grid w-full grid-cols-6 gap-[20px] h-max min-h-[423px]" style={{ gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))` }}>
                        {loading ? (
                            Array.from({ length: 6 }).map((_, index) => (
                                <div key={index}>
                                    <SkeletonLoader className="h-[70%] w-[100%] rounded-xl" />
                                    <SkeletonLoader className="h-[5%] w-[100%] rounded-xl mt-[10px]" />
                                    <SkeletonLoader className="h-[5%] w-[40%] rounded-xl mt-[10px]" />
                                    <SkeletonLoader className="h-[5%] w-[30%] rounded-xl mt-[10px]" />
                                </div>
                            ))
                        ) : results.length > 0 ? (
                            results.map((product: any) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    imageSrc={product.image_path[0]}
                                    title={product.title}
                                    price={product.price}
                                    sale={product.sale_price}
                                    rating={product.rating}
                                    toggleSearch={toggleSearch}
                                />
                            ))
                        ) : hasSearched ? (
                            <div className="text-center col-span-full">
                                <p className="text-[#555555]">{t('noResultsFound')}</p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
