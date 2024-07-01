import Link from 'next/link'
import { useEffect, useState } from 'react'
import BrandListLetter from '@/components/BrandListLetter'

const brandsData = [
    { id: 1, name: 'Agoma' },
    { id: 2, name: 'Burberry' },
    { id: 3, name: 'Chanel' },
    { id: 4, name: 'Gucci' },
    { id: 5, name: 'H&M' },
    { id: 6, name: 'Nike' },
];

export default function Brands() {
    const [brands, setBrands] = useState(brandsData);

    const [selected, setSelected] = useState('Show All');
    const [alphabet, setAlphabet] = useState([
        { id: 1, name: 'Show All', available: true },
        { id: 2, name: 'A', available: true },//brands: { id: 1, name: 'Agoma' },
        { id: 3, name: 'B', available: false },
        { id: 4, name: 'C', available: true },
        { id: 5, name: 'D', available: true },
        { id: 6, name: 'E', available: false },
        { id: 7, name: 'F', available: false },
        { id: 8, name: 'G', available: true },
        { id: 9, name: 'H', available: true },
        { id: 10, name: 'I', available: true },
        { id: 11, name: 'J', available: false },
        { id: 12, name: 'K', available: true },
        { id: 13, name: 'L', available: true },
        { id: 14, name: 'M', available: false },
        { id: 15, name: 'N', available: true },
        { id: 16, name: 'O', available: true },
        { id: 17, name: 'P', available: true },
        { id: 18, name: 'Q', available: true },
        { id: 19, name: 'R', available: false },
        { id: 20, name: 'S', available: true },
        { id: 21, name: 'T', available: true },
        { id: 22, name: 'U', available: false },
        { id: 23, name: 'V', available: true },
        { id: 24, name: 'W', available: true },
        { id: 25, name: 'X', available: true },
        { id: 26, name: 'Y', available: true },
        { id: 27, name: 'Z', available: true },
        { id: 28, name: '#', available: true },
    ])


    return (
        <>
            <div className="w-[1470px] m-auto">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[59px] mb-[5px] text-[45px]">Brands</h1>
                    <nav>
                        <ol className="text-[14px] text-55black">
                            <li className="inline">
                                <Link href="/">Home / </Link>
                            </li>
                            <li className="inline">Brands</li>
                        </ol>
                    </nav>
                </div>
                <div>
                    <div className="flex flex-wrap text-[12px] gap-[10px]">
                        {alphabet.map((letter) => {
                            return (
                                <BrandListLetter
                                    key={letter.id}
                                    letter={letter.name}
                                    available={letter.available}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            )
                        })}
                    </div>
                    <div className="mt-[50px]">
                        <div className="flex justify-between border-t-[1px] py-[50px] border-[#ebebeb]">
                            <div className="px-[30px] w-[6.5%]">
                                <h3 className="text-11black text-[32px] font-medium uppercase">A</h3>
                            </div>
                            <div className="w-[85%]">
                                <ul className="flex flex-wrap flex-1">
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between border-t-[1px] py-[50px] border-[#ebebeb]">
                            <div className="px-[30px] w-[6.5%]">
                                <h3 className="text-11black text-[32px] font-medium uppercase">A</h3>
                            </div>
                            <div className="w-[85%]">
                                <ul className="flex flex-wrap flex-1">
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between border-t-[1px] py-[50px] border-[#ebebeb]">
                            <div className="px-[30px] w-[6.5%]">
                                <h3 className="text-11black text-[32px] font-medium uppercase">A</h3>
                            </div>
                            <div className="w-[85%]">
                                <ul className="flex flex-wrap flex-1">
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between border-t-[1px] py-[50px] border-[#ebebeb]">
                            <div className="px-[30px] w-[6.5%]">
                                <h3 className="text-11black text-[32px] font-medium uppercase">A</h3>
                            </div>
                            <div className="w-[85%]">
                                <ul className="flex flex-wrap flex-1">
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>
                                    <li style={{ width: `calc(20% - 30px)` }}
                                        className="leading-[34px] mr-[30px] text-55black">Adrianna Papell
                                    </li>


                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>

    )
}