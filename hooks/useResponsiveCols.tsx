import { useState, useEffect } from 'react';

interface useResponsiveColsProps {
    native: number,
    xl: number,
    lg: number,
    md: number,
    sm: number,
    xs: number,
}

function useResponsiveCols({ native, xl, lg, md, sm, xs }: useResponsiveColsProps) {
    const [numCols, setNumCols] = useState(native);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200 && window.innerWidth >= 992) {
                setNumCols(xl);
            } else if (window.innerWidth <= 992 && window.innerWidth >= 768) {
                setNumCols(lg);
            } else if (window.innerWidth <= 768 && window.innerWidth >= 576) {
                setNumCols(md);
            } else if (window.innerWidth <= 576 && window.innerWidth >= 480) {
                console.log("sm");
                console.log(window.innerWidth);
                setNumCols(sm);
            } else if (window.innerWidth <= 480 && window.innerWidth >= 320) {
                console.log("xs");
                console.log(window.innerWidth);
                setNumCols(xs);
            } else {
                setNumCols(native);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [native, xl, lg, md, sm, xs]);

    return numCols;
}

export default useResponsiveCols;