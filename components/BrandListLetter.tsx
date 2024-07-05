interface BrandListLetterProps {
    letter: string,
    available: boolean,
    selected: string,
    setSelected: (letter: string) => void,
}

function BrandListLetter({ letter, available, selected, setSelected }: BrandListLetterProps) {
    const handleClick = () => {
        if (available) {
            setSelected(letter)
        }
    }
    return (
        <>
            <div className={`flex border-[1px] rounded-[3px] select-none xl:whitespace-nowrap
                    ${selected === letter ? 'border-black bg-black' : `border-[#ebebeb] ${available && 'hover:bg-[#f5f5f5]'}`} 
                    ${letter === 'Show All' ? 'py-[11px] px-[25px]' : 'py-[11px] px-[15px]'} 
                    ${available && 'cursor-pointer'}`}
                 onClick={handleClick}
            >
                <h4 className={`text-[12px] ${selected === letter ? 'text-white' : 'text-11black'}
                                      ${!available && 'text-87black'}
                                min-w-[22px] text-center font-semibold uppercase`}>
                    {letter}
                </h4>
            </div>
        </>
    )
}

export default BrandListLetter