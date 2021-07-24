import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4); // nextId에 {current:4} 객체를 저장

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current, // 객체의 값을 가져오기위해 nextId.current로 참조
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); // todos 배열에 새로운 todo 객체 추가
      nextId.current += 1; // nextId 1씩 더하기
      console.log(nextId) 
    },
    [todos],
  );

  const onRemove = useCallback(
    id => { // id를 파라미터로 가져오기
      setTodos(todos.filter(todo => todo.id !== id)); // 삭제할 id값과 일치하지 않는 id값만 배열에 넣기
    },
    [todos],
  );

  const onToggle = useCallback(
    id => { // id값을 파라미터로 받아오기
      setTodos(
        todos.map( todo => 
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
          // console.log(todo))
          // 파라미터로 받아온 id값과 todo의 값이 같다면 새로운 객체를 생성 -> true
          // 같지않다면 원래 상태의 값을 반환 -> false
        )
      );
    },[todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} /> {/* onInsert 함수를 props 설정 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} /> {/* TodoList에게 props로 전달해준다 */}
      {console.log(todos)}
      {/* {console.log(item)} */}
    </TodoTemplate>
    
  );
};

export default App;