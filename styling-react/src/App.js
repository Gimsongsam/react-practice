import React, {Component} from 'react'
import MyComponent from './CSSModule';
import CSSModule from './CSSModule';

class App extends Component {
  render() {
    return(
      <div>
        <CSSModule highlighted={true} theme={'theme'} />
        {/* <button onClick={() => {
          console.log(CSSModule)
        }
        }>highlighted</button> */}
      </div>
    );
  }
}

export default App;
