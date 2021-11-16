import React ,{useEffect}from 'react';
import {Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  useEffect(() => {
    console.log('App');
// eslint-disable-next-line react-hooks/exhaustive-deps
});
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;