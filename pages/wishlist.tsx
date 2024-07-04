import Link from 'next/link'
import collection2 from '@/public/assets/collections/collection2.webp'
import CollectionCard from '@/components/CollectionCard'
import { Empty } from '@/components/Empty'

function Wishlist() {
    return (
        <>
            <div className="max-w-[1290px] m-auto px-[15px]">
                <div className="mx-auto flex flex-col justify-center py-[60px] text-center">
                    <h1 className="leading-[59px] mb-[5px] text-[45px]">Wishlist</h1>
                    <nav>
                        <ol className="text-55black">
                            <li className="inline">
                                <Link href="/">Home / </Link>
                            </li>
                            <li className="inline">Wishlist</li>
                        </ol>
                    </nav>
                </div>
                <div className="grid grid-cols-4">
                    <CollectionCard
                        title={'Square Textured Striped'}
                        imageSrc={collection2}
                        price={169}
                        sale={143}
                        isRemovable={true}
                    />
                    <CollectionCard
                        title={'Square Textured Striped'}
                        imageSrc={collection2}
                        price={169}
                        sale={143}
                        isRemovable={true}
                    />
                </div>
                <Empty title={"No products were added to the wishlist page."}/>
            </div>
        </>
    )
}

export default Wishlist
