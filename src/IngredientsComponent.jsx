import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';

const IngredientsComponent = ({item}) => {
  return (
    
    <div className='nutrient-item'>         

        <div className="basics">          
            <h3>{item.text}</h3>
            <p>Calories: {item.parsed[0].nutrients.ENERC_KCAL.quantity.toFixed()} kcal</p>
            <p>Protein: {item.parsed[0].nutrients.PROCNT.quantity.toFixed(1)} g</p>
            <p>Fat: {item.parsed[0].nutrients.FAT.quantity.toFixed(1)} g</p>
            <p>Carbs: {item.parsed[0].nutrients.CHOCDF.quantity.toFixed(1)} g</p>
        </div> 

        <AccordionGroup color="neutral" variant="plain">
            <Accordion>
                <AccordionSummary color="white">Nutritional information</AccordionSummary>

                <AccordionDetails>                     
                    <ul className="information">
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
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary color="white">Vitamins</AccordionSummary>

                <AccordionDetails>                                 
                    <ul className="vitamins">
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
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary color="white">Minerals</AccordionSummary>
                
                <AccordionDetails>                    
                    <ul className="minerals">
                        <li>{item.parsed[0].nutrients.CA.label}: {item.parsed[0].nutrients.CA.quantity.toFixed(1)} {item.parsed[0].nutrients.CA.unit}</li>
                        <li>{item.parsed[0].nutrients.FE.label}: {item.parsed[0].nutrients.FE.quantity.toFixed(1)} {item.parsed[0].nutrients.FE.unit}</li>
                        <li>{item.parsed[0].nutrients.MG.label}: {item.parsed[0].nutrients.MG.quantity.toFixed(1)} {item.parsed[0].nutrients.MG.unit}</li>
                        <li>{item.parsed[0].nutrients.K.label}: {item.parsed[0].nutrients.K.quantity.toFixed(1)} {item.parsed[0].nutrients.K.unit}</li>
                        <li>{item.parsed[0].nutrients.FOLAC.label}: {item.parsed[0].nutrients.FOLAC.quantity.toFixed(1)} {item.parsed[0].nutrients.FOLAC.unit}</li>
                        <li>{item.parsed[0].nutrients.NA.label}: {item.parsed[0].nutrients.NA.quantity.toFixed(1)} {item.parsed[0].nutrients.NA.unit}</li>
                        <li>{item.parsed[0].nutrients.P.label}: {item.parsed[0].nutrients.P.quantity.toFixed(1)} {item.parsed[0].nutrients.P.unit}</li>
                        <li>{item.parsed[0].nutrients.ZN.label}: {item.parsed[0].nutrients.ZN.quantity.toFixed(1)} {item.parsed[0].nutrients.ZN.unit}</li>                 
                    </ul>                              
                </AccordionDetails>
            </Accordion>
        </AccordionGroup>
        
    </div>
    
  )
}

export default IngredientsComponent