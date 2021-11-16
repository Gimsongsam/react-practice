import {createAction, handleActions } from 'redux-actions';

//*** 액션 타입 정의 ***/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//*** 액션 생성 함수 만들어주기 ***//
// export = 여러 개를 내보낼 수 있다.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//*** 초기 상태 및 리듀서 함수 만들기 ***/
const initialState = {
    number: 0
}
// 첫 번째 파라미터 - 각 액션에 대한 업데이트 함수
// 두 번째 파라미터 - 초기 상태
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({number: state.number + 1}),
        [DECREASE]: (state, action) => ({number: state.number - 1}),
    },
    initialState,
)

export default counter; // 단 한 개만 내보낼 수 있다.