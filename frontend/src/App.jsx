import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Adminlogin from './Components/Adminlogin';
import Studentlogin from './Components/Studentlogin';
import Homepage from './Components/Homepage';
import Studentpageone from './Components/Studentpageone';
import Property from './Components/Property';
import Showproperty from './Components/Showproperty';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Studentlogin />}></Route>
        <Route exact path="/adminlogin" element={<Adminlogin />}></Route>
        <Route exact path="/homepage" element={<Homepage />}></Route>
        <Route exact path="/studentpageone" element={<Studentpageone />}></Route>
        <Route exact path="/property" element={<Property />}></Route>
        <Route exact path="/showproperty" element={<Showproperty />}></Route>
      </Routes>
    </div>
  );
}

export default App;
