import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        console.log(e)
        setValue(e.target.value);
    }, []); // 비어있는 배열을 넣으면 컴포넌트가 렌더링될 때 만들었던 함수를 계속해서 재사용한다.

    const onSubmit = useCallback(
        e => {
            onInsert(value); // onSubmit 함수가 실행하면 onInsert 함수를 호출한다. 파라미터로 value값을 보내준다.
            setValue(''); // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
            // 이를 방지하기 위해 이 함수를 호출합니다.
            e.preventDefault();
        },
        [onInsert, value],
    );
    
    console.log("onInsert", onInsert)
    console.log("onSubmit", onSubmit)

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요" 
                value={value}
                onChange={onChange} // onChange 함수 실행
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert
