import { memo } from 'react'

interface ColorListItemProps {
    id: number,
    name: string,
    isChecked: boolean,
    onChange: (isChecked: boolean, id: number) => void;
}

const ColorListItem = (({ id, name, isChecked, onChange }: ColorListItemProps) => {
    // console.log("id", id, "isChecked", isChecked);
    return (
        <li className={`flex h-[34px]`}>
            <div className="cursor-pointer flex select-none"
                 onClick={() => onChange(isChecked, id)}
            >
                <div
                    style={{ background: `${name}` }}
                    className={`${isChecked && 'border-black'} h-[34px] w-[34px] cursor-pointer rounded-full 
                    border-[1px] border-[#ebebeb] transition duration-500`}
                >
                    <div className="h-[32px] w-[32px] rounded-full border-2 border-white"></div>
                </div>
            </div>
        </li>
    )
})

export const MemoizedColorListItem = memo(ColorListItem);
