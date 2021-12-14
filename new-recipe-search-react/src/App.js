import React from 'react';
import {useState, useEffect} from 'react';
import Receipe from './Receipe';

const App = () => {

  const API_KEY='eb7804bb092594d4f6e96efe84a20df5';
  const APP_ID='1a50de60';
  const [recipe, setReceipe] = useState([]);

  useEffect(() => {
    //call json data here
    getRecipe();
  }, [])

  //Get the json data from API with async await.
  const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      setReceipe(data.hits);
      console.log(data.hits);
  }

  return (
    <main>    
      <div className='App'>
        <h4>Type the Recipe from API </h4>
        <form className='search-form'>
          <input type="text" className="search-input" />
          <button className='search-button' type='submit'>Search</button>
        </form> 
        {
          recipe.map(recipe =>(
            <Receipe 
              title={recipe.recipe.lable} 
              calories={recipe.recipe.calories}
              weight={recipe.recipe.totalWeight}
              image={recipe.recipe.image}             
            />
          ))
        }       
      </div>      
    </main>
  );
}

export default App;
