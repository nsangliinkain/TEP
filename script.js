function calculateImpact() {
    var pesticides = parseFloat(document.getElementById('pesticides').value);
    var irrigation = parseFloat(document.getElementById('irrigation').value);
    var soilImpact = parseFloat(document.getElementById('soil-impact').value);

    // Calcola il punteggio di impatto ambientale
    var totalImpact = pesticides + (irrigation / 1000) + soilImpact;

    // Visualizza il risultato
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Il punteggio di impatto ambientale è: " + totalImpact;
}
