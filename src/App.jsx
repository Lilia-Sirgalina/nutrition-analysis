import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import './App.css'
import IngredientsComponent from './IngredientsComponent';
import Total from './Total';



function App() {
  
  const MY_ID = "51585a50";
  const MY_KEY = "b5d526191c79ec41df0e9305154a9765";
  

  const [mySearch, setMySearch] = useState('');
  const [nutritionData, setNutritionData] = useState(["1 egg", "2 slices of bread", "1 avocado"]);
  const [ingredientsData, setIngredientsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  

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

      if (response.ok === false) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter correct data",            
          });
          setIsLoading(false);
      return;      
      } 

      const data = await response.json();

      if (!data.ingredients && data.ingredients.length === 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter correct data",            
          });
          setIsLoading(false);
      return;      
      }

      setIsLoading(false);
      setIngredientsData(data.ingredients);   
      console.log(data);   
    }
    getAnalysis();
    }, [nutritionData]);

    const myIngredients = (e) => {
      setMySearch(e.target.value);      
    }

  const getMyAnalysis = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Fetch nutritional analysis based on mySearch    
    const ingredientsList = mySearch.split(',').map(ingredient => ingredient.trim());
    setNutritionData(ingredientsList);    
  }

  return (
    <div className="App">      

      <div className='header'>
        <h1>Nutrition Analysis</h1>
      </div>

      <form className='form' onSubmit={getMyAnalysis}>
          <input className='search' type="text" placeholder='Enter ingredients separated by commas' value={mySearch} onChange={myIngredients} />
          <button onClick={getMyAnalysis}>Get a nutritional analysis</button>
      </form>

      <hr />

      {isLoading ? <div className="lds-heart"><div></div></div> :
          <div className='all-ingredients'>
              
              <div className='total-nutrients'>        
                  {/* Display total nutrients information here */}
                  <Total ingredientsData={ingredientsData} />
              </div>  

              <hr />  

              <div className='separated-nutrients'>
                  <div className="header">
                      <h2>Ingredient Nutrition Details</h2>    
                  </div>

                  <div className='each-ingr'>
                      {/* Display individual nutrient information here */}       
                      {ingredientsData.map((item, index) => (
                        <IngredientsComponent key={index} item={item} />
                      ))
                      }
                  </div>
              </div>

          </div>
      }

    </div>
  )
}

export default App


