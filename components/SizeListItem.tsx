import { memo } from 'react'

interface SizeListItemProps {
    id: number,
    name: string,
    isChecked: boolean,
    onChange: (isChecked: boolean, id: number) => void;}

const SizeListItem = (({ id, name, isChecked, onChange }: SizeListItemProps) => {

    return (
        <li className={`flex h-[34px]`}>
            <div className={`cursor-pointer flex select-none`}
                 onClick={() => onChange(isChecked, id)}>
                <div
                    className={`${isChecked ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-[3px] 
                    border-[1px] border-[#ebebeb] px-[15px] py-[3px] transition duration-500`}
                >
                    {' '}
                    {name}
                </div>
            </div>
        </li>
    )
})

export const MemoizedSizeListItem = memo(SizeListItem)