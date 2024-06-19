import {useRouter} from "next/router";

function ProductCategory() {
    const router = useRouter();
    const { productCategory } = router.query;
    return (
        <div>
            <div className="bg-shop-banner w-full h-[200px] text-center text-white flex justify-center flex-col">
                <h1 className="mx-auto text-[45px]">{productCategory}</h1>
                <nav className="text-[14px]">Home / {productCategory}</nav>
            </div>
        </div>
    );
}

export default ProductCategory;

