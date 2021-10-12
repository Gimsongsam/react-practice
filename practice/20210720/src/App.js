import React, { useState } from 'react';

function App() {
  return (
    <div>
      <h1>함수형 컴포넌트와 클래스의 차이점</h1>
      <FuncComp initNumber={2} nowDate={Date} />
      <ClassComp initNumber={2} nowDate={Date()}/>
    </div>
  )
}

function FuncComp(props){
  const [number, SetNumber] = useState(props.initNumber);
  const [date, SetDate] = useState(props.nowDate)

  return (
    <div>
      <h1>function Component</h1>
      <p>Number: {number}</p>
      <h3>Date: {date}</h3>
      <button
        onClick={
          function(){
            SetNumber(Math.random());
          }
        }
      >random</button>
      <button onClick={() => {
          SetDate(Date())
        }
      }
      >Date</button>
      <hr />
    </div>
  )
}





class ClassComp extends React.Component{
  
  state = {
    number: this.props.initNumber,
    date: this.props.nowDate,
  }

  check(e) { // 여기서 this는 자신이 속한 함수를 가리키는데 함수에게 return 된 값이 없어서 undefined를 가리키는 것 같다.
    this.setState({number: Math.random()})
    console.log(this)
    console.log(e)
    console.log(this.state.number)
  }

  render(){
    console.log("render", this); // 컴포넌트 자신을 가리킨다.

     
    return (
      <div>
        <h1>Class Component</h1>
        <p>Number: {this.state.number}</p>
        <h3>Date: {this.state.date}</h3> 
        {/* <button onClick={ // html
          check.bind(this) // window 객체
           // 함수 안으로 들어온 this는 가리키는 대상이 가르키는 곳이 달라지기 때문에 제대로 컴포넌트 자신을 가리키기 위해서 바인딩 해야한다.
        }
        >random</button> */}

        <button onClick={
          this.check.bind(this, this.state.number)
        }>date</button>

        <button onClick={() => {
            this.setState({date:Date()})

            console.log('event in', this) // ES6 함수에서는 제대로 컴포넌트 자신을 가리킨다??? 따라서 바인딩 작업이 필요없다. // 부모 
          }
        }
        >date</button>

        {/* <button onClick={
          function () {
            this.setState({date: Date()})
          }
        }
        >random</button> */}

        
      </div>
    );
  }
    
}

export default App