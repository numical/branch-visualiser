import { useState, useEffect } from 'react';

const initialData = { repos: [] };

function useRemoteData() {
    const [data, setData] = useState(initialData);
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("/repos");
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);

    return data;
}

export default useRemoteData;

