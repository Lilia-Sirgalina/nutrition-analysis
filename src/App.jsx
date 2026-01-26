import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const MY_ID = "51585a50";
  const MY_KEY = "b5d526191c79ec41df0e9305154a9765";
  

  const [myAnalysis, setMyAnalysis] = useState('');

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
              ingr: ["1 egg", "3 tomatoes", "1 avocado"]
          })
      });
      const data = await response.json();
      console.log(data);
      console.log(Object.values(data))
      

    }
    getAnalysis();
    }, [])

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
