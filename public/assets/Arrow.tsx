interface ArrowProps {
    className?: string;
}

const Arrow = ({ className }: ArrowProps) => {
    return (
        <svg width="10" height="18" viewBox="0 0 5 9" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4.6308L4 1.26157" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 8L1 4.63077" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default Arrow;
