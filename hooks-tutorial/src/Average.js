import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const v = []
    list.forEach((value, index) => {
        v.push(<li key={index}>{value}</li>)
    })

    const onChange = e => {
        setNumber(e.target.value);
    };
    function onInsert2() {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');

    }
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };
    const getArray = () => {
        return v;
    }

    const avg = useMemo(() => getAverage(list), [list]);
    
    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert2}>등록</button>
            <ul>
               {v}
               
            </ul>
            <div>
                <b>평균값:</b> {getAverage(list)}
            </div>
        </div>
    );
};

export default Average;

