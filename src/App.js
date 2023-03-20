// import logo from './logo.svg';
import './App.css';
import LeftSide from './Component/LeftSide/LeftSide';
import RightSide from './Component/RightSide/RightSide';
import Middle from './Component/Middle/Middle';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main-content">
        <LeftSide/>
        <Middle/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
