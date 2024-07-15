import Link from 'next/link'
import { Empty } from '@/components/Empty'
import { withTranslations } from '@/utils/i18nHelper'

export const getStaticProps = withTranslations(['common']);
function Index() {
    return (
        <>
            <div className="max-w-[1290px] m-auto px-[15px] md:px-0">
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
                <div className="grid grid-cols-4 lg:grid-cols-3 md:!grid-cols-2 justify-center">
                    {/*<CollectionCard*/}
                    {/*    title={'Square Textured Striped'}*/}
                    {/*    imageSrc={collection2}*/}
                    {/*    price={169}*/}
                    {/*    sale={143}*/}
                    {/*    isRemovable={true}*/}
                    {/*/>*/}
                    {/*<CollectionCard*/}
                    {/*    title={'Square Textured Striped'}*/}
                    {/*    imageSrc={collection2}*/}
                    {/*    price={169}*/}
                    {/*    sale={143}*/}
                    {/*    isRemovable={true}*/}
                    {/*/>*/}
                </div>
                <div className="md:px-[15px] text-center">
                    <Empty title={"No products were added to the wishlist page."}/>
                </div>
            </div>
        </>
    )
}

export default Index
