import React, {useReducer} from 'react';

function reducer(state, action){
    console.log("recuder 함수:", state);   // 이전의 상태
    console.log(action);  // 실행해야 할 액션값을 저장
	// action.type에 따라 다른 작업 수행
    console.log(action.type)   // INCREMENT, DECREMENT
    
	switch(action.type){
		case 'INCREMENT':
			return {value: state.value + 1};
		case 'DECREMENT':
			return {value: state.value - 1};
		default:
			// 아무것도 해당되지 않을 때 기존 상태 반환
			return state;
    }
}

const Counter = () => {

	const [state, dispatch] = useReducer(reducer, {value: 3}); // reducer 함수을 받아오고, 초기값을 설정해주기
    // reducer 함수를 통해 이전 값과 실행할 액션을 받고, 다시 새로운 상태로 반환 한다

	return(
		<div>

            {console.log("useRecuder:", state)} {/* 현재 가리키고 있는 상태 == 새로운 상태 */}
            {/* {console.log(dispatch)} */}
            {/* 
            - 액션을 발생시키는 함수 
            - dispatch 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출되는 구조
            */}

			<p>
				현재 카운터 값은 <b>{state.value}</b>입니다.
			</p>
			<button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button> {/* dispatch 함수 파라미터에 액션 값 넣어주어 함수 실행 */}
			<button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
		</div>
	);
};

export default Counter;