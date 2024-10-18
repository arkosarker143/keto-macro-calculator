function generatePDF(fats, proteins, carbs) {
    const doc = new jsPDF();
    doc.text(`Your Macros Report`, 10, 10);
    doc.text(`Fats: ${fats.toFixed(2)}g`, 10, 20);
    doc.text(`Proteins: ${proteins.toFixed(2)}g`, 10, 30);
    doc.text(`Carbs: ${carbs.toFixed(2)}g`, 10, 40);
    
    doc.save('macro-report.pdf');
}
