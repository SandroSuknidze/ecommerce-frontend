interface XmarkIconProps {
    className?: string;
}
export function XmarkIcon({className}: XmarkIconProps) {
    return (
        <>
            <svg width="14px" height="12px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" className={className}
                 fill="">
                <rect width="16" height="16" id="icon-bound" fill="none" />
                <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414
	            13.293,14.707 14.707,13.293 9.414,8 " />
            </svg>
        </>
    )
}