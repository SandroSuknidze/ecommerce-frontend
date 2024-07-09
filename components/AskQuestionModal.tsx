import Image from 'next/image'
import closeIcon from '@/public/assets/close.svg'
import InputForm from './InputForm'
import { useForm } from 'react-hook-form'
import { TextareaInputForm } from './TextareaInputForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLockBodyScroll } from 'react-use'

interface AskQuestionModalProps {
    toggleAskQuestionModal: () => void,
}

export function AskQuestionModal({ toggleAskQuestionModal }: AskQuestionModalProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    useLockBodyScroll(true)

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
            <div className="fixed left-1/2 top-1/2 z-[61] max-h-[568px] max-w-[600px] w-[85%] h-[85%] -translate-x-1/2
                -translate-y-1/2 transform overflow-hidden rounded-[5px] border border-gray-300 bg-white shadow-lg">
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

                <div className="px-[40px] py-[35px] overflow-y-auto lg:px-[30px] md:!px-[15px] ">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        method="post"
                        className="flex w-full flex-col"
                    >
                        <div className="flex w-full lg:flex-col">
                            <div className="w-full mr-[15px] lg:mr-0">
                                <InputForm
                                    name="Name"
                                    type="text"
                                    register={register('name', {
                                        required: 'Name is required',
                                        maxLength: {
                                            value: 30,
                                            message: 'Maximum number of characters reached',
                                        },
                                    })}
                                    label={false}
                                    errorMessage={errors.name?.message}
                                />
                            </div>
                            <div className="w-full">
                                <InputForm
                                    name="Email"
                                    type="email"
                                    register={register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Please enter a valid email address',
                                        },
                                        maxLength: {
                                            value: 320,
                                            message: 'Maximum number of characters reached',
                                        },
                                    })}
                                    label={false}
                                    errorMessage={errors.email?.message}
                                />
                            </div>
                        </div>
                        <div>
                            <InputForm
                                name="Phone number"
                                type="tel"
                                register={register('phone', {
                                    required: 'Phone number is required',
                                    maxLength: {
                                        value: 30,
                                        message: 'Maximum number of characters reached',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Phone number must be at least 8 characters long'
                                    }
                                })}
                                label={false}
                                errorMessage={errors.phone?.message}
                            />
                        </div>
                        <div>
                            <TextareaInputForm
                                name="Comment"
                                register={register('comment', {
                                    required: 'Comment is required',
                                    maxLength: {
                                        value: 300,
                                        message: 'Maximum number of characters reached',
                                    },
                                })}
                                label={false}
                                errorMessage={errors.comment?.message}
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
