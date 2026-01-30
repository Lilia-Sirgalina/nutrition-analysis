const Total = ({ ingredientsData }) => {

    const myIngredients = ingredientsData.map(item => item.text).join(', ');
    const totalCalories = ingredientsData.reduce((total, item) => total + item.parsed[0].nutrients.ENERC_KCAL.quantity, 0).toFixed();
    const totalProtein = ingredientsData.reduce((total, item) => total + item.parsed[0].nutrients.PROCNT.quantity, 0).toFixed(1);
    const totalFat = ingredientsData.reduce((total, item) => total + item.parsed[0].nutrients.FAT.quantity, 0).toFixed(1);
    const totalCarbs = ingredientsData.reduce((total, item) => total + item.parsed[0].nutrients.CHOCDF.quantity, 0).toFixed(1);

    return (
        <div className="Total">
            <div className="header">
                <h2>Total Nutritional Information for {myIngredients}</h2>    
            </div>

            <div className="total-information">
                <div className="total-inf-item1">      
                    <p><span className="title">Total Calories:</span> <span className="quantity">{totalCalories} kcal</span></p>
                </div>

                <div className="total-inf-item2">
                    <p><span className="title">Total Protein:</span> <span className="quantity">{totalProtein} g</span></p>
                    <p><span className="title">Total Fat:</span> <span className="quantity">{totalFat} g</span></p>
                    <p><span className="title">Total Carbs:</span> <span className="quantity">{totalCarbs} g</span></p>
                </div>
            </div>  
        </div>
    );
}

export default Total;

