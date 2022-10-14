
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shops from './Components/Shops/Shops';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order'
import Manage from './Components/Manage/Manage';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='shops' element={<Shops></Shops>}></Route>
        <Route path='order' element={<Order></Order>}></Route>
        <Route path='manage' element={<Manage></Manage>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
