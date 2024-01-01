import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Card from './components/Card';
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Reviews from './components/Reviews';


function App() {

  const [mode,updatemode] = useState(true);

  const changemode = () => {
    updatemode(!mode);
    // console.log(mode);
  };

  document.body.style.backgroundColor = mode
  ? "#ffffff"
  : "#2C3333"; /*"#292b2c"*/
  return (
    <>

    <Router>
    <Navbar bar={changemode} mode={mode}></Navbar>
      <Routes>
        <Route path="/" element={<Title mode={mode} category="general"></Title>}></Route>
        <Route path="/entertainment" element={<Title mode={mode} category="entertainment"></Title>}></Route>
        <Route path="/general" element={<Title mode={mode} category="general"></Title>}></Route>
        <Route path="/science" element={<Title mode={mode} category="science"></Title>}></Route>
        <Route path="/sports" element={<Title mode={mode} category="sports"></Title>}></Route>
        <Route path="/health" element={<Title mode={mode} category="health"></Title>}></Route>
        <Route path="/business" element={<Title mode={mode} category="business"></Title>}></Route>
        <Route path="/reviews" element={<Reviews mode={mode}/>}></Route>
        <Route path="/home" element={<Title mode={mode} category="general"></Title>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
