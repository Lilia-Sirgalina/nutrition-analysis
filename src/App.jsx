import { useState, useEffect } from 'react'
import './App.css'
import IngredientsComponent from './IngredientsComponent';
import Total from './Total';

function App() {
  
  const MY_ID = "51585a50";
  const MY_KEY = "b5d526191c79ec41df0e9305154a9765";
  

  const [mySearch, setMySearch] = useState('');
  const [nutritionData, setNutritionData] = useState(["1 egg", "2 slices of bread", "1 avocado"]);
  const [ingredientsData, setIngredientsData] = useState([]);

  useEffect(() => {
    const getAnalysis = async () => {
      const url = `https://api.edamam.com/api/nutrition-details?app_id=${MY_ID}&app_key=${MY_KEY}`;
      const response = await fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Accept-Language": "en"
          },
          body: JSON.stringify({
              ingr: nutritionData
          })
      });
      const data = await response.json();
      setIngredientsData(data.ingredients);      
    }
    getAnalysis();
    }, [nutritionData]);

    const myIngredients = (e) => {
      setMySearch(e.target.value);      
    }

  const getAnalysis = (e) => {
    e.preventDefault();

    // Fetch nutritional analysis based on mySearch    
    const ingredientsList = mySearch.split(',').map(ingredient => ingredient.trim());
    setNutritionData(ingredientsList);    
  }

  return (
    <div className="App">

      <div className='header'>
        <h1>Nutrition Analysis</h1>
      </div>

      <form className='form' onSubmit={getAnalysis}>
          <input className='search' type="text" placeholder='Enter ingredients separated by commas' value={mySearch} onChange={myIngredients} />
          <button onClick={getAnalysis}>Get a nutritional analysis</button>
      </form>

      <div className='total-nutrients'>        
        {/* Display total nutrients information here */}
        <Total ingredientsData={ingredientsData} />
      </div>

      <div className='separated-nutrients'>
        {/* Display individual nutrient information here */}       
        {ingredientsData.map((item, index) => (
          <IngredientsComponent key={index} item={item} />
        ))
        }
      </div>

    </div>
    
  )
}

export default App
