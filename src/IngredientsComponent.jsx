const IngredientsComponent = ({item}) => {
  return (
    
    <div className='nutrient-item'> 
        <div className="basics">          
            <h2>{item.text}</h2>
            <p>Calories: {item.parsed[0].nutrients.ENERC_KCAL.quantity.toFixed()} kcal</p>
            <p>Protein: {item.parsed[0].nutrients.PROCNT.quantity.toFixed(1)} g</p>
            <p>Fat: {item.parsed[0].nutrients.FAT.quantity.toFixed(1)} g</p>
            <p>Carbs: {item.parsed[0].nutrients.CHOCDF.quantity.toFixed(1)} g</p>
        </div> 

        <div className="details">
            <h3>Show details</h3>

            <div className="information">
                <h4>Nutritional information</h4>

                <ul>
                  <li>Calories: {item.parsed[0].nutrients.ENERC_KCAL.quantity.toFixed()} kcal</li>
                  <li>Fat: {item.parsed[0].nutrients.FAT.quantity.toFixed(1)} g</li>
                  <li>- Saturated fats: {item.parsed[0].nutrients.FASAT.quantity.toFixed(1)} g</li>
                  <li>- Monounsaturated fats: {item.parsed[0].nutrients.FAMS.quantity.toFixed(1)} g</li>
                  <li>- Polyunsaturated fats: {item.parsed[0].nutrients.FAPU.quantity.toFixed(1)} g</li>
                  <li>Carbs: {item.parsed[0].nutrients.CHOCDF.quantity.toFixed(1)} g</li>
                  <li>- {item.parsed[0].nutrients.SUGAR.label}: {item.parsed[0].nutrients.SUGAR.quantity.toFixed(1)} {item.parsed[0].nutrients.SUGAR.unit}</li>
                  <li>Protein: {item.parsed[0].nutrients.PROCNT.quantity.toFixed(1)} g</li>   
                  <li>{item.parsed[0].nutrients.FIBTG.label}: {item.parsed[0].nutrients.FIBTG.quantity.toFixed(1)} {item.parsed[0].nutrients.FIBTG.unit}</li> 
                  <li>{item.parsed[0].nutrients.CHOLE.label}: {item.parsed[0].nutrients.CHOLE.quantity.toFixed(1)} {item.parsed[0].nutrients.CHOLE.unit}</li>     
                  <li>{item.parsed[0].nutrients.WATER.label}: {item.parsed[0].nutrients.WATER.quantity.toFixed(1)} {item.parsed[0].nutrients.WATER.unit}</li>          
                </ul>
            </div>

            <div className="vitamins">
                <h4>Vitamins</h4>

                <ul>
                  <li>{item.parsed[0].nutrients.VITA_RAE.label}: {item.parsed[0].nutrients.VITA_RAE.quantity.toFixed(1)} {item.parsed[0].nutrients.VITA_RAE.unit}</li>
                  <li>Vitamin B1: {item.parsed[0].nutrients.THIA.quantity.toFixed(1)} {item.parsed[0].nutrients.THIA.unit}</li>
                  <li>Vitamin B12: {item.parsed[0].nutrients.VITB12.quantity.toFixed(1)} {item.parsed[0].nutrients.VITB12.unit}</li>
                  <li>Vitamin B2: {item.parsed[0].nutrients.RIBF.quantity.toFixed(1)} {item.parsed[0].nutrients.RIBF.unit}</li>
                  <li>Vitamin B3: {item.parsed[0].nutrients.NIA.quantity.toFixed(1)} {item.parsed[0].nutrients.NIA.unit}</li>
                  <li>{item.parsed[0].nutrients.VITB6A.label}: {item.parsed[0].nutrients.VITB6A.quantity.toFixed(1)} {item.parsed[0].nutrients.VITB6A.unit}</li>
                  <li>{item.parsed[0].nutrients.VITC.label}: {item.parsed[0].nutrients.VITC.quantity.toFixed(1)} {item.parsed[0].nutrients.VITC.unit}</li>
                  <li>{item.parsed[0].nutrients.VITD.label}: {item.parsed[0].nutrients.VITD.quantity.toFixed(1)} {item.parsed[0].nutrients.VITD.unit}</li>
                  <li>{item.parsed[0].nutrients.TOCPHA.label}: {item.parsed[0].nutrients.TOCPHA.quantity.toFixed(1)} {item.parsed[0].nutrients.TOCPHA.unit}</li>
                  <li>{item.parsed[0].nutrients.VITK1.label}: {item.parsed[0].nutrients.VITK1.quantity.toFixed(1)} {item.parsed[0].nutrients.VITK1.unit}</li>
                </ul>
            </div>

            <div className="minerals">
                <h4>Minerals</h4>

                <ul>
                  <li>{item.parsed[0].nutrients.CA.label}: {item.parsed[0].nutrients.CA.quantity.toFixed(1)} {item.parsed[0].nutrients.CA.unit}</li>
                  <li>{item.parsed[0].nutrients.FE.label}: {item.parsed[0].nutrients.FE.quantity.toFixed(1)} {item.parsed[0].nutrients.FE.unit}</li>
                  <li>{item.parsed[0].nutrients.MG.label}: {item.parsed[0].nutrients.MG.quantity.toFixed(1)} {item.parsed[0].nutrients.MG.unit}</li>
                  <li>{item.parsed[0].nutrients.K.label}: {item.parsed[0].nutrients.K.quantity.toFixed(1)} {item.parsed[0].nutrients.K.unit}</li>
                  <li>{item.parsed[0].nutrients.FOLAC.label}: {item.parsed[0].nutrients.FOLAC.quantity.toFixed(1)} {item.parsed[0].nutrients.FOLAC.unit}</li>
                  <li>{item.parsed[0].nutrients.NA.label}: {item.parsed[0].nutrients.NA.quantity.toFixed(1)} {item.parsed[0].nutrients.NA.unit}</li>
                  <li>{item.parsed[0].nutrients.P.label}: {item.parsed[0].nutrients.P.quantity.toFixed(1)} {item.parsed[0].nutrients.P.unit}</li>
                  <li>{item.parsed[0].nutrients.ZN.label}: {item.parsed[0].nutrients.ZN.quantity.toFixed(1)} {item.parsed[0].nutrients.ZN.unit}</li>                 
                </ul>
            </div>

        </div>
    </div>
    
  )
}

export default IngredientsComponent