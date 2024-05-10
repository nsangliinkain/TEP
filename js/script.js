function calculateCarbon() {
    var foodType = document.getElementById('food-type').value;
    var quantity = parseFloat(document.getElementById('quantity').value);
    var carbonEmissions;

    switch (foodType) {
        case 'vegetables':
            carbonEmissions = 0.1 * quantity; // Esempio: 0.1 kg CO2eq per 100g di verdure
            break;
        case 'fruits':
            carbonEmissions = 0.2 * quantity; // Esempio: 0.2 kg CO2eq per 100g di frutta
            break;
        case 'meat':
            carbonEmissions = 5 * quantity; // Esempio: 5 kg CO2eq per 100g di carne
            break;
        case 'dairy':
            carbonEmissions = 2 * quantity; // Esempio: 2 kg CO2eq per 100g di latticini
            break;
        default:
            carbonEmissions = 0;
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Le emissioni di carbonio associate al consumo di questo alimento sono: " + carbonEmissions + " kg CO2eq.";
}