import Image from 'next/image'
import closeIcon from '@/public/assets/close.svg'
import InputForm from './InputForm'
import { useForm } from 'react-hook-form'
import { TextareaInputForm } from './TextareaInputForm'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLockBodyScroll } from 'react-use'
import { withTranslations } from '@/utils/i18nHelper'
import { useTranslation } from 'next-i18next'
import axiosInstance from '@/utils/axiosInstance'

export const getStaticProps = withTranslations(['common']);
interface AskQuestionModalProps {
    toggleAskQuestionModal: () => void,
}


export function AskQuestionModal({ toggleAskQuestionModal }: AskQuestionModalProps) {
    const { t } = useTranslation('common')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    useLockBodyScroll(true)

    const onSubmit = (data: any) => {
        toggleAskQuestionModal()
        axiosInstance.post('/ask-question', data)
            .catch((error) => {
                console.log(error)
            })

        toast.success(`${t('formSubmitted')}`, {
            position: 'top-center',
        })

    }
    return (
        <>
            <div
                className="fixed inset-0 z-[60] cursor-close bg-black opacity-50"
                onClick={() => toggleAskQuestionModal()}
            ></div>
            <div className="fixed left-1/2 top-1/2 z-[61] max-h-[617px] max-w-[600px] -translate-x-1/2
                -translate-y-1/2 transform overflow-hidden rounded-[5px] border border-gray-300 bg-white shadow-lg">
                <div className="flex w-full justify-center border-b-[1px] border-[#ebebeb] p-[20px] leading-[20px]">
                    <h3 className="text-[20px] font-medium text-11black">
                        {t('askQuestion')}
                    </h3>
                    <Image
                        src={closeIcon}
                        alt="close icon"
                        className="absolute right-[22px] h-[20px] w-[20px] cursor-pointer"
                        onClick={() => toggleAskQuestionModal()}
                    />
                </div>

                <div className="h-[540px] min-w-[300px] px-[40px] py-[35px] overflow-y-auto scrollbar lg:px-[30px] md:!px-[15px] ">
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
                                    placeHolder={t('name')}
                                    register={register('name', {
                                        required: t('nameRequired'),
                                        maxLength: {
                                            value: 30,
                                            message: t('nameMaxLength'),
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
                                    placeHolder={t('email')}
                                    register={register('email', {
                                        required: t('emailRequired'),
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: t('emailInvalid'),
                                        },
                                        maxLength: {
                                            value: 320,
                                            message: t('emailMaxLength'),
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
                                placeHolder={t('phone')}
                                register={register('phone', {
                                    required: t('phoneRequired'),
                                    maxLength: {
                                        value: 30,
                                        message: t('phoneMaxLength'),
                                    },
                                    minLength: {
                                        value: 8,
                                        message: t('phoneMinLength'),
                                    },
                                    pattern: {
                                        value: /^[0-9]*$/,
                                        message: `${t('numbersOnly')}`,
                                    }
                                })}
                                label={false}
                                errorMessage={errors.phone?.message}
                            />
                        </div>
                        <div>
                            <TextareaInputForm
                                name="Comment"
                                placeHolder={t('comment')}
                                register={register('comment', {
                                    required: t('commentRequired'),
                                    maxLength: {
                                        value: 300,
                                        message: t('commentMaxLength'),
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
                            {t('submitNow')}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
