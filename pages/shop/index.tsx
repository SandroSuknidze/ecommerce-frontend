import Collection from '@/components/Collection'

import firstImage from '@/public/assets/collections/collection16.webp'

export const categories = [
    { id: 1, name: "Woman's a Shirts" },
    { id: 2, name: "Woman's b Shirts" },
    { id: 3, name: "Woman's c Shirts" },
    { id: 4, name: "Woman's d Shirts" },
    { id: 5, name: "Woman's e Shirts" },
]

function Index() {
    return (
        <div>
            <div className="py-[60px]">
                <div className="mx-[9.5px] px-[30px] text-center">
                    <h1 className="mb-[7px] text-[45px]">All Collections</h1>
                    <div className="m-auto max-w-[600px] text-[#555555]">
                        <p>
                            Posuere in netus a eu varius adipiscing suspendisse
                            elementum vitae tempor suspendisse ullamcorper
                            aenean taciti morbi potenti.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="mx-auto grid max-w-[1500px] grid-cols-4 px-[30px]">
                    {categories.map((category) => (
                        <Collection
                            key={category.id}
                            id={category.id}
                            imageSrc={firstImage}
                            title={category.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index
