function renderChart(fats, proteins, carbs) {
    const ctx = document.createElement('canvas');
    document.getElementById('results').appendChild(ctx);
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Fats', 'Proteins', 'Carbs'],
            datasets: [{
                data: [fats, proteins, carbs],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            }]
        }
    });
}
