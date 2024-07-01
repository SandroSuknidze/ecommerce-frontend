import { useState } from 'react'

interface ColorListItemProps {
    name: string,
    quantity: number,
}

export function ColorListItem({ name, quantity }: ColorListItemProps) {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    }

    return (
        <li className={`flex h-[34px]`}>
            <div className={`${quantity <= 0 ? '' : 'cursor-pointer'} flex select-none`}
                 onClick={quantity > 0 ? handleCheckboxClick : undefined}>
                <div
                    style={{ background: `${name}` }}
                    className={`h-[34px] w-[34px] cursor-pointer rounded-full border-[1px] border-87black transition duration-500 hover:border-black`}
                >
                    <div className="h-[32px] w-[32px] rounded-full border-2 border-white"></div>
                </div>
            </div>
        </li>
    )
}