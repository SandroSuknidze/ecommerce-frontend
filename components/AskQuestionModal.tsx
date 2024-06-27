import Image from 'next/image'
import closeIcon from '@/public/assets/close.svg'
import InputForm from './InputForm'
import { useForm } from 'react-hook-form'
import { TextareaInputForm } from './TextareaInputForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface AskQuestionModalProps {
    toggleAskQuestionModal: () => void,
}

export function AskQuestionModal({ toggleAskQuestionModal }: AskQuestionModalProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)

        toast.success('Form submitted successfully!', {
            position: 'top-center',
        })

        toggleAskQuestionModal()
    }
    return (
        <>
            <div
                className="fixed inset-0 z-[60] cursor-close bg-black opacity-50"
                onClick={() => toggleAskQuestionModal()}
            ></div>
            <div className="fixed left-1/2 top-1/2 z-[61] h-[568px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-[5px] border border-gray-300 bg-white shadow-lg">
                <div className="flex w-full justify-center border-b-[1px] border-[#ebebeb] p-[20px] leading-[20px]">
                    <h3 className="text-[20px] font-medium text-11black">
                        Ask A Question
                    </h3>
                    <Image
                        src={closeIcon}
                        alt="close icon"
                        className="absolute right-[22px] h-[20px] w-[20px] cursor-pointer"
                        onClick={() => toggleAskQuestionModal()}
                    />
                </div>

                <div className="px-[40px] py-[35px]">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        method="post"
                        className="flex w-full flex-col"
                    >
                        <div className="flex w-full">
                            <div className="w-full">
                                <InputForm
                                    name="Name"
                                    type="text"
                                    register={register('name')}
                                    label={false}
                                />
                            </div>
                            <div className="w-full">
                                <InputForm
                                    name="Email"
                                    type="email"
                                    register={register('email')}
                                    label={false}
                                />
                            </div>
                        </div>
                        <div>
                            <InputForm
                                name="Phone number"
                                type="tel"
                                register={register('phone')}
                                label={false}
                            />
                        </div>
                        <div>
                            <TextareaInputForm
                                name="Comment"
                                register={register('comment')}
                                label={false}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-[30px] border-[1px] border-[#ebebeb] bg-black px-[55px] py-[14px] text-[12px] font-semibold uppercase text-white"
                        >
                            Submit Now
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
