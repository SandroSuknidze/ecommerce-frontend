import Collection from "@/components/Collection";

import firstImage from "@/assets/collections/collection16.webp";
import secondImage from "@/assets/collections/collection9.webp";

export const categories =  [
    {id: 1, name: "Woman's a Shirts"},
    {id: 2, name: "Woman's b Shirts"},
    {id: 3, name: "Woman's c Shirts"},
    {id: 4, name: "Woman's d Shirts"},
    {id: 5, name: "Woman's e Shirts"},
]

function Index() {
    return (
        <div>
            <div className="py-[60px]">
                <div className="mx-[9.5px] px-[30px] text-center">
                    <h1 className="mb-[7px] text-[45px]">All Collections</h1>
                    <div className="max-w-[600px] m-auto text-[#555555]">
                        <p>Posuere in netus a eu varius adipiscing suspendisse elementum vitae tempor suspendisse
                            ullamcorper aenean taciti morbi potenti.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-4 max-w-[1500px] mx-auto px-[30px]">
                    {categories.map((category) => (
                        <Collection key={category.id} id={category.id} imageSrc={firstImage} title={category.name}/>

                    ))}
                </div>

            </div>
        </div>
    );
}

export default Index;