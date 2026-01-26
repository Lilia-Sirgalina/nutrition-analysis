const IngredientsComponent = ({item}) => {
  return (
    
    <div className='nutrient-item'>            
        <h3>{item.text}</h3>
        <p>Calories: {item.parsed[0].nutrients.ENERC_KCAL.quantity.toFixed()} kcal</p>
        <p>Protein: {item.parsed[0].nutrients.PROCNT.quantity.toFixed(1)} g</p>
        <p>Fat: {item.parsed[0].nutrients.FAT.quantity.toFixed(1)} g</p>
        <p>Carbs: {item.parsed[0].nutrients.CHOCDF.quantity.toFixed(1)} g</p>

        <div>
            <h4>Show details</h4>
        </div>
    </div>
    
  )
}

export default IngredientsComponent