import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export default function useActions(actions, deps){
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)){
                // Array.isArray -> 전달된 인수가 배열이면 ture, 배열이 아니면 false를 반환
                return actions.map(a => bindActionCreators(a, dispatch));
            }
            return bindActionCreators(actions, dispatch);
        },
        deps ? [dispatch, ...deps] : deps
    );
}
