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

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} /> {/* onInsert 함수를 props 설정 */}
      <TodoList todos={todos} /> {/* TodoList에게 props로 전달해준다 */}
      {console.log(todos)}
    </TodoTemplate>
    
  );
};

export default App;