import React from 'react';
import ButtonHandler from './ButtonHandler';

const Button = ({ count, incrementCount, decreamentCount }) => (
    <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decreamentCount}>Decreament</button>
    </div>
);

export default ButtonHandler(Button, 10);
