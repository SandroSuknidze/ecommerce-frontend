    import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
    import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
    import SearchIcon from "@/assets/SearchIcon";
    import ProductCard from "@/components/ProductCard";
    import collection2 from "@/assets/collections/collection2.webp";

    function Search({ toggleSearch }) {
        return (
            <div className="fixed inset-0 flex items-center justify-center !z-[70]">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="bg-white py-[60px] px-[30px] !z-50 w-full h-[90vh] top-0 absolute overflow-y-scroll">
                    <div className="max-w-[1410px] m-auto">
                        <h4 className="mb-[20px] text-center text-[32px] font-medium text-[#111111]">Search Our Site</h4>
                        <div className="flex justify-end cursor-pointer">
                            <FontAwesomeIcon icon={faXmark}
                                             className="absolute top-[30px] right-[22px] hover:text-black text-gray-400 w-[22px] h-[22px] transition duration-300"
                                            onClick={() => toggleSearch()}/>
                        </div>
                        <form className="text-center relative w-[66%] m-auto">
                            <input type="text" placeholder="I'm looking for..." className="w-full mx-auto py-[10px] pl-[20px] pr-[50px] text-[14px] placeholder:text-[#555555] leading-[28px]
                                                   focus:border-[1px] focus:border-[#131313] focus:transition focus:duration-300 transition duration-300 outline-0 border-[1px] mr-[10px] border-[#ebebeb] rounded-[30px]"/>
                            <div className="absolute top-[16px] right-[20px] cursor-pointer">
                                <SearchIcon/>
                            </div>
                        </form>
                        <div className="mt-[10px] flex justify-center">
                            <p className="text-[#555555]">Quick Search:</p>
                            <ul className="pl-[10px]">
                                <li className="inline text-[#111111] mr-[5px]">Shirt,</li>
                                <li className="inline text-[#111111] mr-[5px]">Dress,</li>
                                <li className="inline text-[#111111]">Sweater</li>
                            </ul>
                        </div>
                        <div className="mt-[20px]">
                            <h4 className="text-[#111111] text-[20px] font-semibold">Popular Products</h4>
                        </div>
                        <div className="grid grid-cols-6 w-full gap-[20px] mt-[20px]" >
                            <ProductCard title={"Square Textured Striped"} imageSrc={collection2} price={"169.00"} toggleSearch={toggleSearch}/>
                            <ProductCard title={"Square Textured Striped"} imageSrc={collection2} price={"169.00"} toggleSearch={toggleSearch}/>
                            <ProductCard title={"Square Textured Striped"} imageSrc={collection2} price={"169.00"} toggleSearch={toggleSearch}/>
                            <ProductCard title={"Square Textured Striped"} imageSrc={collection2} price={"169.00"} toggleSearch={toggleSearch} sale={"143.00"}/>
                            <ProductCard title={"Square Textured Striped"} imageSrc={collection2} price={"169.00"} toggleSearch={toggleSearch} sale={"143.00"}/>
                            <ProductCard title={"Square Textured Striped"} imageSrc={collection2} price={"169.00"} toggleSearch={toggleSearch} sale={"143.00"}/>
                            <ProductCard title={"Square Textured Striped"} imageSrc={collection2} price={"169.00"} toggleSearch={toggleSearch} sale={"143.00"}/>
                            <ProductCard title={"Square Textured Striped"} imageSrc={collection2} price={"169.00"} toggleSearch={toggleSearch} sale={"143.00"}/>
                        </div>
                    </div>


                </div>
            </div>
        );
    }

    export default Search;