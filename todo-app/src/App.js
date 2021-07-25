import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array = [];
  for(let i=1; i<=2500; i++){
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {

  const [todos, setTodos] = useState(createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501); // nextId에 {current:4} 객체를 저장

  const onInsert = useCallback(text => {
      const todo = {
        id: nextId.current, // 객체의 값을 가져오기위해 nextId.current로 참조
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo)); // todos 배열에 새로운 todo 객체 추가
      nextId.current += 1; // nextId 1씩 더하기
      console.log(nextId) 
    },[]);

  const onRemove = useCallback(id => { // id를 파라미터로 가져오기
      setTodos(todos => todos.filter(todo => todo.id !== id)); // 삭제할 id값과 일치하지 않는 id값만 배열에 넣기
    },[]);

  // const onRemove = useCallback(
  //   function (id) {
  //     setTodos(
  //       todos.filter(
  //         function(todo){
  //           return(todo.id !== id)
  //         }
  //       )
  //     )
  //   },[todos]);


  const onToggle = useCallback(id => { // id값을 파라미터로 받아오기
      setTodos(todos =>
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
          // console.log(todo))
          // 파라미터로 받아온 id값과 todo의 값이 같다면 새로운 객체를 생성 -> true
          // 같지않다면 원래 상태의 값을 반환 -> false
        ),
      );
    },[]); 

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