import { useState } from 'react'

interface SizeListItemProps {
    name: string,
    quantity: number,
}

export function SizeListItem({ name, quantity }: SizeListItemProps) {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    }

    return (
        <li className={`flex h-[34px]`}>
            <div className={`${quantity <= 0 ? '' : 'cursor-pointer'} flex select-none`}
                 onClick={quantity > 0 ? handleCheckboxClick : undefined}>
                <div
                    className={`${isChecked ? 'bg-black text-white' : 'bg-white'} cursor-pointer rounded-[3px] border-[1px] border-[#ebebeb] px-[15px] py-[3px] transition duration-500 hover:bg-black hover:text-white`}
                >
                    {' '}
                    {name}
                </div>
            </div>
        </li>
    )
}