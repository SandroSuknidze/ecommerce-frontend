import { useState } from 'react'

interface BrandListItemProps {
    id: number,
    name: string,
    quantity: number,
    onChange: any,
    isChecked: boolean,
}
export function BrandListItem({ id, name, quantity, onChange, isChecked }: BrandListItemProps) {

    // const [isChecked, setIsChecked] = useState(false)

    // const handleCheckboxClick = () => {
    //     setIsChecked(!isChecked);
    // }

    console.log(isChecked)

    return (
        <li className={`mb-[7px] flex h-[28px] overflow-hidden`}>
            <div className={`${quantity <= 0 ? '' : 'cursor-pointer'} flex select-none`}
                 // onClick={quantity > 0 ? handleCheckboxClick : undefined}
            >
                <div className="mr-[10px]">
                    <input
                        type="checkbox"
                        name="brands"
                        className={`${quantity <= 0 ? '' : 'cursor-pointer'} h-[28px] w-[18px] accent-black`}
                        onChange={onChange}
                        disabled={quantity <= 0}
                        value={id}
                        defaultChecked={isChecked}
                    />
                </div>
                <label htmlFor="brands" className={`${quantity <= 0 && 'cursor-initial opacity-70'} leading-[28px] text-55black`}>
                    {name}{' '}
                    <span className="text-[12px]">{`(${quantity})`}</span>
                </label>
            </div>
        </li>
    )
}