import { useState } from 'react'

interface BrandListItemProps {
    name: string,
    quantity: number,
}
export function BrandListItem({ name, quantity }: BrandListItemProps) {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    }

    return (
        <li className={`mb-[7px] flex h-[28px] overflow-hidden`}>
            <div className={`${quantity <= 0 ? '' : 'cursor-pointer'} flex select-none`}
                 onClick={quantity > 0 ? handleCheckboxClick : undefined}>
                <div className="mr-[10px]">
                    <input
                        type="checkbox"
                        className={`${quantity <= 0 ? '' : 'cursor-pointer'} h-[28px] w-[18px] accent-black`}
                        checked={isChecked}
                        onChange={() => {}}
                        disabled={quantity <= 0}
                    />
                </div>
                <p className={`${quantity <= 0 && 'cursor-initial opacity-70'} leading-[28px] text-55black`}>
                    {name}{' '}
                    <span className="text-[12px]">{`(${quantity})`}</span>
                </p>
            </div>
        </li>
    )
}