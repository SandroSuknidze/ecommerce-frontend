import { useState } from 'react'

interface ColorListItemProps {
    id: number,
    name: string,
    quantity: number,
    isChecked?: boolean,
    onChange?: any,
}

export function ColorListItem({ id, name, quantity, isChecked, onChange }: ColorListItemProps) {

    // const [isChecked, setIsChecked] = useState(false)
    //
    // const handleCheckboxClick = () => {
    //     setIsChecked(!isChecked);
    // }

    return (
        <li className={`flex h-[34px]`}>
            <div className={`${quantity <= 0 ? '' : 'cursor-pointer'} flex select-none`}
                 onClick={quantity > 0 ? () => onChange(isChecked, id) : undefined}

            >
                <div
                    style={{ background: `${name}` }}
                    className={`${isChecked && 'border-4'} h-[34px] w-[34px] cursor-pointer rounded-full border-[1px] border-87black transition duration-500 hover:border-black`}
                >
                    <div className="h-[32px] w-[32px] rounded-full border-2 border-white"></div>
                </div>
            </div>
        </li>
    )
}