interface InputFormProps {
    name: string;
    type: string;
    register: object,
    label?: boolean,
    errorMessage?: any,
}

function InputForm({ name, type, register, errorMessage, label=true }: InputFormProps) {
    return (
        <div className="mb-[10px] flex flex-col">
            {label && <label htmlFor="" className="pb-[5px] text-11black">
                {name} <span className="text-red-600">*</span>
            </label>}
            <input type={type} placeholder={name} {...register}
                   className="px-[20px] py-[10px] text-[14px] placeholder:text-[#555555] leading-[28px]
                               focus:border-[1px] focus:border-[#131313] focus:transition focus:duration-300
                               transition duration-300 outline-0 border-[1px] border-[#ebebeb] rounded-[30px]"
            />
            <p className="text-red-600 text-[13px] opacity-100 block">
                {errorMessage || '\u00A0'}
            </p>
        </div>
    );
}

export default InputForm;