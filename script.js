document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    
    appDiv.innerHTML = `
        <form id="macroForm">
            <input type="number" id="weight" placeholder="Weight (kg)" required />
            <select id="goal" required>
                <option value="">Select Goal</option>
                <option value="loss">Weight Loss</option>
                <option value="maintenance">Maintenance</option>
            </select>
            <input type="number" id="fatPercentage" placeholder="Fat Percentage (%)" required />
            <input type="number" id="proteinPercentage" placeholder="Protein Percentage (%)" required />
            <input type="number" id="carbPercentage" placeholder="Carb Percentage (%)" required />
            <button type="submit">Show Results</button>
        </form>
        <div id="results"></div>
    `;

    document.getElementById('macroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const weight = parseFloat(document.getElementById('weight').value);
        const goal = document.getElementById('goal').value;
        const fatPercentage = parseFloat(document.getElementById('fatPercentage').value) / 100;
        const proteinPercentage = parseFloat(document.getElementById('proteinPercentage').value) / 100;
        const carbPercentage = parseFloat(document.getElementById('carbPercentage').value) / 100;

        let calories = goal === 'loss' ? weight * 25 : weight * 30;
        let fats = (calories * fatPercentage) / 9;
        let proteins = (calories * proteinPercentage) / 4;
        let carbs = (calories * carbPercentage) / 4;

        document.getElementById('results').innerHTML = `
            <h2>Your Macros:</h2>
            <p>Fats: ${fats.toFixed(2)}g</p>
            <p>Proteins: ${proteins.toFixed(2)}g</p>
            <p>Carbs: ${carbs.toFixed(2)}g</p>
        `;
    });
});
