import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home'
import Auth from './Auth/Auth'
const Allroutes = () => {
  
  return (
    <div>
      <Routes>
        <Route path = '/Auth' element = {<Auth />}/>

        </Routes>
      </div>
  )
}
export default Allroutes;
