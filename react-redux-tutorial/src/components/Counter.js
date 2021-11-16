import React, {useEffect} from 'react';

const Counter = ({number, onIncrease, onDecrease}) => {

    // useEffect(() => {
    //     console.log('Counter: rendering')
    // });

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onDecrease}>+1</button>
                <button onClick={onIncrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;