import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import SearchIcon from '@/public/assets/SearchIcon'
import ProductCard from '@/components/ProductCard'
import collection2 from '@/public/assets/collections/collection2.webp'
import { useLockBodyScroll } from 'react-use'
import { useEffect, useState } from 'react'

interface SearchProps {
    toggleSearch: () => void,
}

function Search({ toggleSearch }: SearchProps) {
    useLockBodyScroll(true)


    const [numCols, setNumCols] = useState(0); // Default to 3 columns

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200 && window.innerWidth >= 992) {
                setNumCols(5);
            } else if (window.innerWidth <= 992 && window.innerWidth >= 768) {
                setNumCols(4);
            } else if (window.innerWidth <= 768 && window.innerWidth >= 576) {
                setNumCols(3);
            } else if (window.innerWidth <= 576 && window.innerWidth >= 320) {
                setNumCols(2);
            } else {
                setNumCols(6);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed inset-0 !z-[70] flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-0 !z-50 h-[90vh] w-full overflow-y-scroll bg-white px-[30px] py-[60px] xl:px-[15px]">
                <div className="m-auto max-w-[1410px]">
                    <h4 className="mb-[20px] text-center text-[32px] font-medium text-[#111111] md:text-[24px]">
                        Search Our Site
                    </h4>
                    <div className="flex cursor-pointer justify-end">
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="absolute right-[22px] top-[30px] h-[22px] w-[22px] text-gray-400 transition duration-300 hover:text-black"
                            onClick={() => toggleSearch()}
                        />
                    </div>
                    <form className="relative m-auto w-[66%] text-center md:w-full">
                        <input
                            type="text"
                            placeholder="I'm looking for..."
                            className="mx-auto w-full rounded-[30px] border-[1px] border-[#ebebeb] py-[10px] pl-[20px] pr-[50px] text-[14px] leading-[28px] outline-0 transition duration-300 placeholder:text-[#555555] focus:border-[1px] focus:border-[#131313] focus:transition focus:duration-300"
                        />
                        <div className="absolute right-[20px] top-[16px] cursor-pointer">
                            <SearchIcon />
                        </div>
                    </form>
                    <div className="mt-[10px] flex justify-center">
                        <p className="text-[#555555]">Quick Search:</p>
                        <ul className="pl-[10px]">
                            <li className="mr-[5px] inline text-[#111111]">
                                Shirt,
                            </li>
                            <li className="mr-[5px] inline text-[#111111]">
                                Dress,
                            </li>
                            <li className="inline text-[#111111]">Sweater</li>
                        </ul>
                    </div>
                    <div className="mt-[20px]">
                        <h4 className="text-[20px] font-semibold text-[#111111]">
                            Popular Products
                        </h4>
                    </div>
                    <div className="mt-[20px] grid w-full grid-cols-6 gap-[20px] h-max"
                         style={{ gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))` }}
                        >
                        <ProductCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={'169.00'}
                            toggleSearch={toggleSearch}
                        />
                        <ProductCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={'169.00'}
                            toggleSearch={toggleSearch}
                        />
                        <ProductCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={'169.00'}
                            toggleSearch={toggleSearch}
                        />
                        <ProductCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={'169.00'}
                            toggleSearch={toggleSearch}
                            sale={'143.00'}
                        />
                        <ProductCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={'169.00'}
                            toggleSearch={toggleSearch}
                            sale={'143.00'}
                        />
                        <ProductCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={'169.00'}
                            toggleSearch={toggleSearch}
                            sale={'143.00'}
                        />
                        <ProductCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={'169.00'}
                            toggleSearch={toggleSearch}
                            sale={'143.00'}
                        />
                        <ProductCard
                            title={'Square Textured Striped'}
                            imageSrc={collection2}
                            price={'169.00'}
                            toggleSearch={toggleSearch}
                            sale={'143.00'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
