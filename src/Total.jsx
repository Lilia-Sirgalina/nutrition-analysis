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
            <p>Total Calories: {totalCalories} kcal</p>
            <p>Total Protein: {totalProtein} g</p>
            <p>Total Fat: {totalFat} g</p>
            <p>Total Carbs: {totalCarbs} g</p>
        </div>
    );
}

export default Total;

