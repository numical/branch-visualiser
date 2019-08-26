import { useState, useEffect } from 'react';
import getDimensions from './getDimensions';

function useWindowDimensions() {
    const [dimensions, setDimensions] = useState(getDimensions());

    useEffect(() => {
        const handleResize = () => setDimensions(getDimensions());
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return dimensions;
}

export default useWindowDimensions;

