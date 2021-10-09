import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

// 랜덤 색상을 생성합니다.
function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{
  state = {
    color: '#00000'
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate', prevProps, prevState);
    if(snapshot){
        console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }


  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    console.log('render')
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
