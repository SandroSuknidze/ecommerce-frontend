import Link from 'next/link'
import { useEffect, useState } from 'react'
import BrandListLetter from '@/components/BrandListLetter'
import axiosInstance from '@/utils/axiosInstance'
import { SkeletonLoader } from '@/components/SkeletonLoader'
import { withTranslations } from '@/utils/i18nHelper'
import { useTranslation } from 'next-i18next'

export const getStaticProps = withTranslations(['common']);
interface Brand {
    id: number;
    name: string;
}

interface Alphabet {
    id: number;
    name: string;
    available: boolean;
}

const alphabetData: Alphabet[] = [
    { id: 1, name: 'Show All', available: true },
    { id: 2, name: 'A', available: false },
    { id: 3, name: 'B', available: false },
    { id: 4, name: 'C', available: false },
    { id: 5, name: 'D', available: false },
    { id: 6, name: 'E', available: false },
    { id: 7, name: 'F', available: false },
    { id: 8, name: 'G', available: false },
    { id: 9, name: 'H', available: false },
    { id: 10, name: 'I', available: false },
    { id: 11, name: 'J', available: false },
    { id: 12, name: 'K', available: false },
    { id: 13, name: 'L', available: false },
    { id: 14, name: 'M', available: false },
    { id: 15, name: 'N', available: false },
    { id: 16, name: 'O', available: false },
    { id: 17, name: 'P', available: false },
    { id: 18, name: 'Q', available: false },
    { id: 19, name: 'R', available: false },
    { id: 20, name: 'S', available: false },
    { id: 21, name: 'T', available: false },
    { id: 22, name: 'U', available: false },
    { id: 23, name: 'V', available: false },
    { id: 24, name: 'W', available: false },
    { id: 25, name: 'X', available: false },
    { id: 26, name: 'Y', available: false },
    { id: 27, name: 'Z', available: false },
    { id: 28, name: '#', available: false },
];

export default function Index() {
    const { t } = useTranslation('common')

    const [brands, setBrands] = useState<Brand[]>([]);
    const [alphabet, setAlphabet] = useState<Alphabet[]>(alphabetData);
    const [selected, setSelected] = useState<string>('Show All');

    useEffect(() => {
        axiosInstance.get('/brands')
            .then(response => {
                const data: Brand[] = response.data;
                setBrands(data);
                updateAlphabetAvailability(data);
            })
            .catch(error => {
                console.error('Error fetching brands:', error);
            });
    }, []);

    const updateAlphabetAvailability = (brandsData: Brand[]) => {
        const updatedAlphabet = alphabet.map(letter => {
            if (letter.name === 'Show All') {
                return { ...letter, available: true };
            }

            const available = brandsData.some(brand => brand.name.startsWith(letter.name));
            return { ...letter, available };
        });

        setAlphabet(updatedAlphabet);
    };

    const filterBrands = (): Brand[] => {
        if (selected === 'Show All') {
            return brands;
        }

        return brands.filter(brand => brand.name.startsWith(selected));
    };

    const groupBrandsByFirstLetter = (brandsList: Brand[]): Record<string, Brand[]> => {
        return brandsList.reduce((acc, brand) => {
            const firstLetter = brand.name.charAt(0).toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(brand);
            return acc;
        }, {} as Record<string, Brand[]>);
    };

    const groupedBrands = groupBrandsByFirstLetter(filterBrands());

    return (
        <div className="max-w-[1440px] m-auto">
            <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                <h1 className="leading-[59px] mb-[5px] text-[45px]">{t('brands')}</h1>
                <nav>
                    <ol className="text-[14px] text-55black">
                        <li className="inline">
                            <Link href="/">{t('home')} / </Link>
                        </li>
                        <li className="inline">{t('brands')}</li>
                    </ol>
                </nav>
            </div>
            <div className="px-[30px]">
                <div
                    className="flex flex-wrap text-[12px] gap-[10px] scrollbar xl:flex-nowrap xl:overflow-x-scroll xl:pb-3">
                    {alphabet.map((letter) => {
                        return (
                            <BrandListLetter
                                key={letter.id}
                                letter={letter.name}
                                available={letter.available}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        );
                    })}
                </div>
                <div className="mt-[50px]">
                    {brands.length > 0 ? (
                        Object.keys(groupedBrands).map((letter) => (
                            <div key={letter}
                                 className="flex justify-between border-t-[1px] py-[50px] border-[#ebebeb]">
                                <div className="px-[30px] w-[6.5%] xs:flex xs:justify-center xs:m-auto ">
                                    <h3 className="text-11black text-[32px] font-medium uppercase md:text-[24px]">
                                        {letter}
                                    </h3>
                                </div>
                                <div className="w-[85%] xs:pl-[20px]">
                                    <ul className="flex flex-wrap flex-1">
                                        {groupedBrands[letter].map((brand) => (
                                            <li
                                                key={brand.id}
                                                className="leading-[34px] mr-[30px] text-55black w-[calc(20%-30px)] md:w-[calc(33.3%-30px)] xs:!w-full"
                                            >
                                                {brand.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-wrap gap-[10px]">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="w-full">
                                    <SkeletonLoader key={index} className="h-[104px] w-[calc(100%-30px)] rounded-md mb-[20px]" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
