import {useEffect, useState} from "react";

export const Counter: React.FC = () => {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const id = setInterval(() => {
            setTime((time) => time + 1000);
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, []);

    return new Date(time).toLocaleTimeString();
};
