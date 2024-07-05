interface TextareaInputFormProps {
    name: string,
    register: object,
    label: boolean,
    errorMessage?: any,
}

export function TextareaInputForm({ name, register, errorMessage, label = true }: TextareaInputFormProps) {
    return (
        <>
            <div className="mb-[20px] flex flex-col">
                {label && <label htmlFor="" className="pb-[5px] text-11black">
                    {name}<span className="text-red-600">*</span>
                </label>}
                <textarea placeholder={name} {...register}
                          className={`h-[209px] resize-none px-[20px] py-[10px] text-[14px] placeholder:text-[#555555] leading-[28px]
                               focus:border-[1px] focus:border-[#131313] focus:transition focus:duration-300
                               transition duration-300 outline-0 border-[1px] border-[#ebebeb] rounded-[30px]`}
                />
                <p className="text-red-600 text-[13px] opacity-100 block">
                    {errorMessage || '\u00A0'}
                </p>
            </div>
        </>
    )
}