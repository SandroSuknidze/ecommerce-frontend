import Link from 'next/link'
import CollectionCard from '@/components/CollectionCard'
import { useEffect, useState } from 'react'
import axiosInstance from '@/utils/axiosInstance'

function Index() {

    const [saleProducts, setSaleProducts] = useState([])

    async function fetchSaleProducts() {
        try {
            const response = await axiosInstance('/products/sale')
            const data = await response.data

            console.log(data);

            setSaleProducts(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchSaleProducts()
    }, [])
    return (
        <div>
            <div className="bg-sale-banner bg-center bg-cover h-[800px] w-full justify-center flex lg:h-[500px]">
                <div className="flex m-auto justify-center text-center ">
                    <div className="flex flex-col justify-center m-auto mx-[20%] md:mx-[10%]">
                        <div className="text-[14px] font-semibold mt-[15px]">SALE 50% OFF ALL DRESSES</div>
                        <div className="text-[60px] mb-[15px] lg:text-[35px]">Special Offers</div>
                        <div className="text-55black">Get these deals before they’re gone! Save big on end-of-season and
                            limited-edition colors
                            in our most popular products.
                        </div>
                        <div>
                            <Link href="/shop">
                                <button
                                    className="rounded-[30px] border-[1px] border-black bg-black px-[66px] py-[14.5px]
                                    text-[12px] font-semibold uppercase text-white mt-[40px] lg:px-[40px] lg:py-[11px]"
                                >
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-auto max-w-[1290px] px-[15px] md:px-0 mt-[50px]">
                <div className="mb-[15px] md:px-[15px]">
                    <h2 className="mb-[5px] text-center text-[40px] md:text-[30px]">
                        Top Offers
                    </h2>
                    <p className="text-center text-55black">
                        Our products are designed for everyone, environmentally friendly.
                    </p>
                </div>
                <div className="grid grid-cols-4 lg:grid-cols-3 md:!grid-cols-2 justify-center mt-[50px]">
                    {saleProducts.map((saleProduct: any) => (
                        <CollectionCard
                            key={saleProduct.id}
                            id={saleProduct.id}
                            title={saleProduct.title}
                            imageSrc={saleProduct.image_path[0]}
                            price={saleProduct.price}
                            rating={saleProduct.rating}
                            sale={saleProduct.sale_price}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Index
