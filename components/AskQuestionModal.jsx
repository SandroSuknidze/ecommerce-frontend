import Image from "next/image";
import closeIcon from "@/assets/close.svg";
import InputForm from "@/components/InputForm";
import {useForm} from "react-hook-form";
import {TextareaInputForm} from "@/components/TextareaInputForm";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function AskQuestionModal({ toggleAskQuestionModal }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        toast.success("Form submitted successfully!", {
            position: "top-center"
        });

        toggleAskQuestionModal();


    };
    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-[60] cursor-close" onClick={() => toggleAskQuestionModal()}></div>
            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[568px]
                bg-white border border-gray-300 rounded-[5px] shadow-lg z-[61] overflow-hidden">
                <div className="flex justify-center w-full p-[20px] border-b-[1px] border-[#ebebeb] leading-[20px]">
                    <h3 className="text-[20px] text-11black font-medium">Ask A Question</h3>
                    <Image src={closeIcon} alt="close icon" className="absolute right-[22px] w-[20px] h-[20px] cursor-pointer"
                           onClick={() => toggleAskQuestionModal()}/>
                </div>

                <div className="px-[40px] py-[35px]">
                    <form onSubmit={handleSubmit(onSubmit)} method="post" className="w-full flex flex-col">
                        <div className="flex w-full">
                            <div className="w-full">
                                <InputForm name="Name" type="text" register={register("name")} label={false}/>
                            </div>
                            <div className="w-full">
                                <InputForm name="Email" type="email" register={register("email")} label={false}/>
                            </div>
                        </div>
                        <div>
                            <InputForm name="Phone number" type="tel" register={register("phone")} label={false}/>
                        </div>
                        <div>
                            <TextareaInputForm name="Comment" height="222" register={register("comment")} label={false}/>
                        </div>
                        <button type="submit" className="w-full px-[55px] py-[14px] border-[1px] text-[12px] bg-black
                                        text-white font-semibold border-[#ebebeb] rounded-[30px] uppercase">Submit Now
                        </button>

                    </form>

                </div>
            </div>

        </>

    )
}