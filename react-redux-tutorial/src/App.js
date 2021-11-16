import React from 'react';
import CounterContainer from './Containers/CounterContainer';
import TodosContainer from './Containers/TodosContainer';

const App = () => {
  return (
    <div>
      {/* {console.log(store)} */}
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  )
}

export default App;
