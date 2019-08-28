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
        const url = `ws://${window.location.hostname}:1972`;
        const socket = new WebSocket(url);
        // note: server sends message on connection hence fires first fetch
        socket.addEventListener('message', function (event) {
            fetchData();
        });
    }, []);

    return data;
}

export default useRemoteData;

