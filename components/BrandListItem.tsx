import { memo } from 'react'

interface BrandListItemProps {
    id: number,
    name: string,
    onChange: any,
    isChecked: boolean,
}
const BrandListItem = ({ id, name, onChange, isChecked }: BrandListItemProps) => {

    // console.log(isChecked)

    return (
        <li className={`mb-[7px] flex h-[28px] overflow-hidden`}>
            <label  className={`cursor-pointer flex select-none`}>
                <div className="mr-[10px]">
                    <input
                        type="checkbox"
                        name="brands"
                        className="h-[28px] w-[18px] accent-black cursor-pointer"
                        checked={isChecked}
                        onChange={onChange}
                        value={id}
                    />
                </div>
                <span className="leading-[28px] text-55black">
                    {name}
                </span>
            </label>
        </li>
    )
}

export const MemoizedBrandListItem = memo(BrandListItem);
