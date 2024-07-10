import { memo } from 'react'

interface BrandListItemProps {
    id: number,
    name: string,
    quantity: number,
    onChange: any,
    isChecked: boolean,
}
const BrandListItem = ({ id, name, quantity, onChange, isChecked }: BrandListItemProps) => {

    // console.log(isChecked)

    return (
        <li className={`mb-[7px] flex h-[28px] overflow-hidden`}>
            <label  className={`${quantity <= 0 ? 'cursor-initial opacity-70' : 'cursor-pointer'} flex select-none`}>
                <div className="mr-[10px]">
                    <input
                        type="checkbox"
                        name="brands"
                        className="h-[28px] w-[18px] accent-black cursor-pointer"
                        checked={isChecked}
                        onChange={onChange}
                        disabled={quantity <= 0}
                        value={id}
                    />
                </div>
                <span className="leading-[28px] text-55black">
                    {name} <span className="text-[12px]">{`(${quantity})`}</span>
                </span>
            </label>
        </li>
    )
}

export const MemoizedBrandListItem = memo(BrandListItem);
