import React, { useState } from 'react';

const ButtonHandler = (OldComponent, value = 1) => {
    return function EnhancedComponent(props) {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
            setCount(prevCount => prevCount + value);
        };
        const decreamentCount = () => {
            setCount(prevCount => prevCount - value);
        };

        return (
            <OldComponent
            {...props}  
            count={count}
            incrementCount={incrementCount}
            decreamentCount={decreamentCount} />
        );
    }
}

export default ButtonHandler;
