import Image from "next/image";

import closeIcon from "@/assets/close.svg";
import sizeImage from "@/public/size.webp";

function SizeGuideModal({ toggleSizeGuideModal }) {
    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-[60]"></div>
            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[817px]
                bg-white border border-gray-300 rounded-lg shadow-lg z-[61] overflow-hidden">
                <div className="flex justify-center w-full p-[20px] border-b-[1px] border-[#ebebeb] leading-[20px]">
                    <h3 className="text-[20px] text-11black font-medium">Size Guide</h3>
                    <Image src={closeIcon} alt="close icon" className="absolute right-[22px] w-[20px] h-[20px] cursor-pointer"
                        onClick={() => toggleSizeGuideModal()}/>
                </div>

                <div className="px-[40px] py-[35px] overflow-y-scroll h-[755px]">
                    <h2 className="text-[18px] font-medium mb-[10px]">Sizes for this Product.</h2>
                    <p className="text-55black mb-5 leading-7">This is an approximate conversion table to help you find
                        your size.
                        Measure around the fullest part, place the tape close under the arms and make sure the tape is
                        flat across the back (Unit: centimeter).</p>
                    <table className="table-auto w-full border border-collapse border-gray-200 mb-[20px]">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Size</th>
                            <th className="border border-gray-300 px-4 py-2">US</th>
                            <th className="border border-gray-300 px-4 py-2">Bust</th>
                            <th className="border border-gray-300 px-4 py-2">Body Waist</th>
                            <th className="border border-gray-300 px-4 py-2">Fullest Hip</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">XS</td>
                            <td className="border border-gray-300 px-4 py-2">2</td>
                            <td className="border border-gray-300 px-4 py-2">32</td>
                            <td className="border border-gray-300 px-4 py-2">24 - 25</td>
                            <td className="border border-gray-300 px-4 py-2">33 - 34</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">S</td>
                            <td className="border border-gray-300 px-4 py-2">4</td>
                            <td className="border border-gray-300 px-4 py-2">34 - 35</td>
                            <td className="border border-gray-300 px-4 py-2">26 - 27</td>
                            <td className="border border-gray-300 px-4 py-2">35 - 36</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">M</td>
                            <td className="border border-gray-300 px-4 py-2">6</td>
                            <td className="border border-gray-300 px-4 py-2">36 - 37</td>
                            <td className="border border-gray-300 px-4 py-2">28 - 29</td>
                            <td className="border border-gray-300 px-4 py-2">37 - 38</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">L</td>
                            <td className="border border-gray-300 px-4 py-2">8</td>
                            <td className="border border-gray-300 px-4 py-2">38 - 39</td>
                            <td className="border border-gray-300 px-4 py-2">30 - 31</td>
                            <td className="border border-gray-300 px-4 py-2">39 - 40</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">XL</td>
                            <td className="border border-gray-300 px-4 py-2">10</td>
                            <td className="border border-gray-300 px-4 py-2">40 - 42</td>
                            <td className="border border-gray-300 px-4 py-2">32 - 33</td>
                            <td className="border border-gray-300 px-4 py-2">41 - 42</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">XXL</td>
                            <td className="border border-gray-300 px-4 py-2">12</td>
                            <td className="border border-gray-300 px-4 py-2">40 - 41</td>
                            <td className="border border-gray-300 px-4 py-2">34 - 35</td>
                            <td className="border border-gray-300 px-4 py-2">43 - 44</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="flex gap-[30px]">
                        <div className="w-[58%]">
                            <h4 className="text-[18px] font-medium text-11black mb-[10px]">How to Measure.</h4>
                            <h5 className="text-11black font-medium mb-[5px]">1. Bust</h5>
                            <p className="text-55black mb-[15px] leading-7">Measure at the fullest part of your chest, keeping the
                                tape parallel to the floor.</p>
                            <h5 className="text-11black font-medium mb-[5px]">2. Body Waist</h5>
                            <p className="text-55black mb-[15px] leading-7">Measure at the smallest part of your waist. This is usually below the rib cage and above the hip bone.
                            </p>
                            <h5 className="text-11black font-medium mb-[5px]">3. Fullest Hip</h5>
                            <p className="text-55black mb-[15px] leading-7">Measure at the fullest part of your seat, keeping the tape parallel to the floor.</p>
                        </div>
                        <div className="w-[42%] m-auto">
                            <Image src={sizeImage} alt="size comparison image"/>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default SizeGuideModal;