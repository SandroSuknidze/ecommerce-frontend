import openedEye from '@/public/assets/password/opened-eye.svg'
import closedEye from '@/public/assets/password/closed-eye.svg'
import Image from 'next/image'

interface InputFormProps {
    name: string;
    type: string;
    register: object,
    label?: boolean,
    errorMessage?: any,
    disabled?: boolean,
    togglePassword?: () => void,
    isPasswordVisible?: boolean,
}

function InputForm({ name, type, register, errorMessage, label=true, disabled=false, isPasswordVisible=false, togglePassword }: InputFormProps) {
    return (
        <div className="mb-[10px] flex flex-col relative">
            {label && <label htmlFor="" className="pb-[5px] text-11black">
                {name} <span className="text-red-600">*</span>
            </label>}
            <input type={type} placeholder={name} {...register}
                   disabled={disabled}
                   className="px-[20px] py-[10px] text-[14px] placeholder:text-[#555555] leading-[28px]
                               focus:border-[1px] focus:border-[#131313] focus:transition focus:duration-300
                               transition duration-300 outline-0 border-[1px] border-[#ebebeb] rounded-[30px]"
            />
            {name === 'Password' &&
                <Image onClick={togglePassword} src={isPasswordVisible ? openedEye : closedEye}
                       className="cursor-pointer absolute top-[44px] right-[20px]"  alt='Eye Icon'/>
            }
            <p className="text-red-600 text-[13px] opacity-100 block">
                {errorMessage || '\u00A0'}
            </p>
        </div>
    );
}

export default InputForm;