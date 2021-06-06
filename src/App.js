import './App.css';
import Sitebar from './home/Navebar';
import React, {useState,useEffect} from 'react'
import React, {Component} from 'react'

function App() {

  const [sessionToken, setSessionToken] =useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  return (
    <div>
      <Sitebar/>
    </div>
  );
}

export default App;
