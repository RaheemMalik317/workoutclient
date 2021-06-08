import './App.css';
import Sitebar from './home/Navbar';
// import React, { Component } from 'react'

import React, {useState,useEffect} from 'react'
import Auth from './auth/Auth'
import WorkoutIndex from './components/WorkoutIndex';


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
  
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

  const protectedViews = () => {
    return (setSessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }




  return (
    <div>
      <Sitebar clearToken={clearToken}/>
      {protectedViews()}
      <Auth updateToken={updateToken} />
    </div>
  );
}

export default App;
