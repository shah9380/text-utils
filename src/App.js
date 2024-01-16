import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import BarShow from './components/Header/BarShow';
import { useEffect, useState } from 'react';

function App() {
  let[checker,setChecker]= useState(false);
  function BarSelect(check){
        setChecker(check);
  }
  let[display,setDisplay]= useState('none');
  useEffect(()=>{
    if(checker){
      setDisplay('block');
    }else{
      setDisplay('none');
    }
  },[checker]);
  return (
    <div className="App">
        <Header select={BarSelect}></Header>
        <BarShow check={display}></BarShow>
        <Home></Home>
    </div>
  );
}

export default App;
