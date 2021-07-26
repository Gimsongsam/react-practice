import React, {useReducer} from 'react';

function reducer(state, action){
    console.log("reducer(state): ",state)   // 이전의 상태 저장
    console.log("reducer(action): ",action)  // 액션

    return{
        ...state,  // name의 프로퍼티 값만 설정을 해줄 경우 nickname의 프로퍼티는 날아가므로 스프레드 문법을 사용하여 받아온다.
        [action.name]: action.value   // <input name="name" value="이름">
    };
}

const Info = () => {
    const [ state, dispatch ] = useReducer(reducer, {
        name: '',
        nickname: ''
    }); // reducer 함수를 받고, 초기값 설정
    
    const { name, nickname } = state;   // state에 저장되어 있는 name키와 nickname키
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
