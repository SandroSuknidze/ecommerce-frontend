import {useRouter} from "next/router";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {createTheme, Slider} from "@mui/material";

function ProductCategory() {
    const router = useRouter();
    const { productCategory } = router.query;

    const [isBrandOpen, setIsBrandOpen] = useState(true);

    function toggleBrand() {
        setIsBrandOpen(!isBrandOpen);
    }


    function valuetext(value) {
        return `${value}°C`;
    }

    const minDistance = 10;

    const [value1, setValue1] = useState([20, 37]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    const theme = createTheme({
            '&:hover': {
                backgroundColor: 'red', // Replace 'red' with your desired hover color
            },
    });

    
    return (
        <div>
            <div className="bg-shop-banner w-full h-[200px] text-center text-white flex justify-center flex-col">
                <h1 className="mx-auto text-[45px]">{productCategory}</h1>
                <nav className="text-[14px]">Home / {productCategory}</nav>
            </div>

            <div className="flex mt-[50px] mx-auto max-w-[1410px]">
                <div className="w-1/4 px-[30px]">
                    <div>
                        <div onClick={toggleBrand}  className="mb-[20px] flex justify-between cursor-pointer">
                            <h4 className="text-[18px] font-medium">Brand</h4>
                            <div className="relative ">
                                <FontAwesomeIcon icon={faMinus} className="text-87black"/>
                                <FontAwesomeIcon icon={faMinus} className={`${isBrandOpen ? "opacity-100" : "opacity-0"} text-87black  absolute top-[3px] left-0 transition duration-500 rotate-90`}/>
                            </div>
                        </div>
                        <ul className={`${!isBrandOpen && '-translate-y-[50px] overflow-hidden hidden '} transition duration-500 transform `}>
                            <li className="mb-[7px] flex h-[18px]">
                                <div className="flex">
                                    <div className="mr-[10px]">
                                        <input type="checkbox" className="accent-black h-[18px] w-[18px] "/>
                                    </div>
                                    <p className="leading-[18px]">Adriana Papell</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h4>Color</h4>
                        </div>
                        <ul>
                            <li>black</li>
                            <li>red</li>
                            <li>green</li>
                        </ul>
                    </div>


                    <div>
                        <div>
                            <h4>Price</h4>
                        </div>
                        <div>
                            <Slider
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                                sx={{
                                    color: 'black',
                                    '& .MuiSlider-thumb:hover' :{
                                        boxShadow: '0 0 0 6px rgba(135, 135, 135, 0.5) !important'
                                    },
                                    '& .MuiSlider-thumb.Mui-focusVisible' : {
                                        boxShadow: '0 0 0 6px transparent !important'
                                    }
                                }}
                            />
                            {value1}
                        </div>
                    </div>
                    <div>Size</div>

                </div>
                <div className="w-3/4"></div>
            </div>
        </div>
    );
}

export default ProductCategory;

