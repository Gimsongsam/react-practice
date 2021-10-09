import { createStore } from "redux";

// 수정할 DOM 노드를 가리키는 값을 미리 선언해주기
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrase = document.querySelector('#decrease');

// 액션에 이름을 정의해주기
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수를 작성해주기
const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

// 프로젝트에서 사용할 초깃값을 정의해주기
const initialState = {
    toggle: false,
    counter: 0
};

// state가 undefined일 때는 initalState를 기본값으로 사용
function reducer(state = initialState, action){
    // action.type에 따라 다른 작업을 처리함
    switch (action.type){
        case TOGGLE_SWITCH:
            return{
                ...state, // 불변성 유지를 해주어야 한다.
                toggle: !state.toggle
            };
        case INCREASE:
            return{
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log(store)

// 상태가 업데이트될 때마다 호출
// html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경해준다.
const render = () => {
    const state = store.getState(); // 현재 상태를 불러온다.
    // 토글 처리
    if (state.toggle){ 
        divToggle.classList.add('active'); //.toggle 
    }else{
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
}

render();

console.log(store.subscribe(render)); // render 함수가 store를 구독

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());  // toggleSwitch 액션 실행
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrase.onclick = () => {
    store.dispatch(decrease());
};