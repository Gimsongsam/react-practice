import React, {useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {

    useEffect(() => {
        console.log('Counter: rendering')
    });

    // connect 대신 사용해주기
    const number = useSelector(state => state.counter.number);
    // 컴포넌트 내부에서 dispatch를 사용
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()),[dispatch]);
    const onDecrese = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter 
            number={number} onIncrease={onIncrease} onDecrease={onDecrese} />
    );
};

export default CounterContainer;