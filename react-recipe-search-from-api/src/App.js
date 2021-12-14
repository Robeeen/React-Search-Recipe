import React from 'react';
import {useState, useEffect} from 'react';
import Receipe from './Receipe';

const App = () => {

  const API_KEY='eb7804bb092594d4f6e96efe84a20df5';
  const APP_ID='1a50de60';
  const myReuest=`https://api.edamam.com/search?q=chiken&app_id=${APP_ID}&app_key=${API_KEY}`;

  useEffect(() => {

  }, [])

  return (
    <main>
      <div className='container'>
        <div className='h666'>Type the Recipe from API </div>
        <form className='search-form'>

          <input type="text" className="search-input" />
          <button className='btn'>Test</button>
        </form>


      </div>      
    </main>
  );
}

export default App;
