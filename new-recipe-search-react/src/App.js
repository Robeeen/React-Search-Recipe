import React from 'react';
import {useState, useEffect} from 'react';
import Receipe from './Receipe';

const App = () => {

  const API_KEY='eb7804bb092594d4f6e96efe84a20df5';
  const APP_ID='1a50de60';
  const [recipe, setReceipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken'); //To .... make query dynamic

  useEffect(() => {
    //call json data here
    getRecipe();
  }, [query]); //dependency array is query

  //Get the json data from API with async await.
  const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      setReceipe(data.hits);
 }

  const updateSearch = e => {
      setSearch(e.target.value);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };


  return (
    <main>    
      <div className='App'>
        <div className='card'>
        <h4>Type your desired Recipe and click Search</h4>
        <form onSubmit={getSearch} className='search-form'>
          <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
          <button className='search-button' type='submit'>Search</button>
        </form> 
        </div>
        <div>
        {
          recipe.map(recipe =>(
            <Receipe 
              
              titles={recipe.recipe.label} 
              caloriess={recipe.recipe.calories}
              weights={recipe.recipe.totalWeight}
              ctype={recipe.recipe.cuisineType}
              ingredis={recipe.recipe.ingredients}
              images={recipe.recipe.image}             
            />
          ))
        }  
        </div>     
      </div>      
    </main>
  );
}

export default App;
