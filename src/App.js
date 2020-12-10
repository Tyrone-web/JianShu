import Header from './common/header/index'
import { Route } from 'react-router-dom';
import Home from './pages/home/index';
// import Detail from './pages/detail/index';
import Detail from './pages/detail/detailLoadable'
import Login from './pages/login/index';
import Write from './pages/writes/index';

function App() {
  return (
    <div>
      <Header />
      <Route path='/' exact component={Home}></Route>
      <Route path='/login' exact component={Login}></Route>
      <Route path='/write' exact component={Write}></Route>
      <Route path='/detail/:id' exact component={Detail}></Route>
      {/* path='/detail/:id 会匹配/detail/id=1' */}
    </div>
  );
}

export default App;
