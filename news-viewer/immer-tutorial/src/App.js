import React, {useRef, useCallback, useState} from 'react';
import produce from 'immer'
import Test from './test'

// const App = () => {
//   return <Test />
// }

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({name: '', username:''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    e => {
      const {name, value} = e.target; 
      // console.log(e.target) // <input name="username" placeholder="아이디" value="홍길동">
      // console.log(e)

      setForm(  // name값과 username값 업데이트 해주기
        produce(draft => {
          draft[name] = value;
          console.log(draft)
        })
      );
    },
    []    // form 값이 업데이트 될 때만 렌더링
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      console.log(e)
      e.preventDefault(); // 전송되어 새로고침되는 현상을 막는다.
      const info = {
        id: nextId.current,
        name: form.name,          // 업데이트된 name값 등록
        username: form.username   // 업데이트된 username값 등록
      };
      console.log(info.name)
      console.log(info) // {id: 1, name: Array(1), username: Array(1)}

      // array에 새 항목 등록
      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1; // useRef가 만든 객체 안의 current 값에 추가하기
      console.log(nextId) // {current: 2}
    },
    [form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData(
        produce(draft => { 
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    []
  );

  return(
    <div>
      <form onSubmit={onSubmit}>
        <input  // input에 데이터 저장해주어 등록되었을때 값을 반환
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input 
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div> 
        <ul>
          {data.array.map(info => (  // array 배열을 화면에 보여주기
            <li key={info.id} onClick={() => onRemove(info.id)}>  {/* 클릭했을때 onRemove 함수 실행 */}
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
      
  );
};

export default App;
