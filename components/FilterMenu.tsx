import { Transition } from '@headlessui/react'
import FilterComponent from '@/components/FilterComponent'
import { useLockBodyScroll } from 'react-use'
import Image from 'next/image'
import closeIcon from '@/public/assets/gray-close.svg'

interface FilterMenuProps {
    toggleFilterMenu: () => void,
    isOpen: boolean;
}

function FilterMenu({ toggleFilterMenu, isOpen }: FilterMenuProps) {
    useLockBodyScroll(isOpen && true)
    return (
        <div className="absolute z-[70]">
            <Transition
                show={isOpen}
                enter="transition-transform duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <div className="fixed top-0 left-0 h-full max-w-[400px] bg-white shadow-lg z-[100] overflow-y-scroll scrollbar lg:w-[100%]">
                    <div className="px-[30px] bg-white text-[14px] text-white font-medium flex justify-between border-b-[1px] border-[#ebebeb]">
                        <div className="flex">
                            <div className="py-[15px] cursor-default text-11black text-[18px]">Filter</div>
                        </div>

                        <div className="flex mb-[1px]">
                            <button className="flex text-xl justify-center m-auto" onClick={toggleFilterMenu}>
                                <Image src={closeIcon} alt="Close Icon" className="text-[12px]"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-[30px]">
                        <FilterComponent />
                    </div>


                </div>
            </Transition>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 cursor-close"
                    onClick={toggleFilterMenu}
                ></div>
            )}
        </div>
    )
}

export default FilterMenu