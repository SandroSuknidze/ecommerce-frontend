import { useState, useEffect } from 'react';

function useResponsiveCols() {
    const [numCols, setNumCols] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200 && window.innerWidth >= 992) {
                setNumCols(5);
            } else if (window.innerWidth <= 992 && window.innerWidth >= 768) {
                setNumCols(4);
            } else if (window.innerWidth <= 768 && window.innerWidth >= 576) {
                setNumCols(3);
            } else if (window.innerWidth <= 576 && window.innerWidth >= 320) {
                setNumCols(2);
            } else {
                setNumCols(6);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return numCols;
}

export default useResponsiveCols;