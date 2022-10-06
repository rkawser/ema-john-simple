import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shops from './Components/Shops/Shops';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shops></Shops>
    </div>
  );
}

export default App;
