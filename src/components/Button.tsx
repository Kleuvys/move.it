import React, { useCallback, useState } from 'react';

interface ButtonProps {
    color: string;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    console.log(Object.entries(props));
    const [counter, setCounter] = useState(1);

    const increment = useCallback(() => {
        setCounter(counter + 1);
    }, [counter]);

    return (
        <button type="button" onClick={increment} style={{ color: props.color }}>
            {children} <strong>{counter}</strong>
        </button >
    )
}