import Collection from "@/components/Collection";

import firstImage from "@/assets/collections/collection16.webp";
import secondImage from "@/assets/collections/collection9.webp";

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
                    <Collection imageSrc={firstImage} title={"Women's Shirts"}/>
                    <Collection imageSrc={secondImage} title={"Winter Coat"}/>
                    <Collection imageSrc={firstImage} title={"Women's Shirts"}/>
                    <Collection imageSrc={secondImage} title={"Winter Coat"}/>
                    <Collection imageSrc={firstImage} title={"Women's Shirts"}/>
                    <Collection imageSrc={secondImage} title={"Winter Coat"}/>
                    <Collection imageSrc={firstImage} title={"Women's Shirts"}/>
                    <Collection imageSrc={secondImage} title={"Winter Coat"}/>
                    <Collection imageSrc={firstImage} title={"Women's Shirts"}/>
                    <Collection imageSrc={secondImage} title={"Winter Coat"}/>
                </div>

            </div>
        </div>
    );
}

export default Index;