import React, {useState} from 'react';
import {Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './profiles';
import HistorySample from './HistorySample';

const App = () => {

  const [data, setData] = useState('');

  const getBlockObj = (unblock) => {
    console.log(unblock);
    // 값을 받아온다.
    setData(()=>unblock);
    // setData('Test');
    // 
  }

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} render={(props) => <Home unblock={data} {...props}/>}/>
      <Route path={['/about', '/info']} render={(props) => <About getBlockObj={getBlockObj} {...props}/>}>
        
      </Route>
      <Route path='/profiles' render={(props) => <Profiles getBlockObj={getBlockObj} {...props}/>}/>
      <Route path="/history" render={(props) => <HistorySample getBlockObj={getBlockObj} {...props}/>}/>
    </div>
  );
}

export default App;