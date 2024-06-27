interface InputFormProps {
    name: string;
    type: string;
    register: object,
    label?: boolean,
}

function InputForm({ name, type, register, label=true }: InputFormProps) {
    return (
        <div className="mb-[20px] flex flex-col">
            {label && <label htmlFor="" className="pb-[5px] text-11black">
                {name}<span className="text-red-600">*</span>
            </label>}
            <input type={type} placeholder={name} {...register} required
                   className="px-[20px] py-[10px] text-[14px] placeholder:text-[#555555] leading-[28px]
                               focus:border-[1px] focus:border-[#131313] focus:transition focus:duration-300
                               transition duration-300 outline-0 border-[1px] mr-[10px] border-[#ebebeb] rounded-[30px]"
            />
        </div>
    );
}

export default InputForm;