function calculateCarbon() {
    var foodType = document.getElementById('food-type').value;
    var quantity = parseFloat(document.getElementById('quantity').value);
    var carbonEmissions;

    // Calcola le emissioni di carbonio in base al tipo di alimento
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


const recipeImages = [
    "img/cibo/anolini-in-brodo.jpg",
    "img/cibo/cappelletti.jpg",
    "img/cibo/torta-di-riso.jpg",
    "img/cibo/parmigiana_di_melanzane.jpeg",
    "img/cibo/tagliolini_al_culatello.jpg",
    "img/cibo/tortelli_alle_erbette.jpg",
    "img/cibo/trippa_alla_parmigiana.jpg",
    "img/cibo/rosa_di_parma.jpg",
    "img/cibo/caval_pist.jpg",
    "img/cibo/castagnaccio.jpg",
    "img/cibo/sbrisolata.jpeg"
];
  
function loadRecipes() {
    const recipes = [
        { title: "Anolini in brodo", ingredients: "Ingredienti: Pasta all'uovo ripiena, brodo di carne." },
        { title: "Cappelletti", ingredients: "Ingredienti: Pasta all'uovo ripiena di carne." },
        { title: "Torta di riso", ingredients: "Ingredienti: Riso, latte, zucchero, uova." },
        { title: "Parmigiana di melanzane", ingredients: "Ingredienti: Melanzane, pomodoro, mozzarella, parmigiano." },
        { title: "Tagliolini al culatello", ingredients: "Ingredienti: Tagliolini, culatello." },
        { title: "Tortelli alle erbette", ingredients: "Ingredienti: Pasta all'uovo ripiena di erbette." },
        { title: "Trippa alla parmigiana", ingredients: "Ingredienti: Trippa, pomodoro, parmigiano." },
        { title: "Rosa di Parma", ingredients: "Ingredienti: Prosciutto crudo, formaggio." },
        { title: "Cavàl Pist (Pesto di Cavallo)", ingredients: "Ingredienti: Carne di cavallo, vino rosso, erbe aromatiche." },
        { title: "Castagnaccio", ingredients: "Ingredienti: Farina di castagne, acqua, uva passa, pinoli." },
        { title: "Sbrisolata", ingredients: "Ingredienti: Farina, burro, zucchero, cannella." }
    ];
    

    const mainContent = document.getElementById('main-content');

    recipes.forEach((recipe, index) => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipeImages[index]}" alt="${recipe.title}">
        <p>${recipe.ingredients}</p>
        `;
        mainContent.appendChild(recipeElement);
    });
}

function isAtBottom() {
return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

window.addEventListener('scroll', function() {
if (isAtBottom()) {
    loadRecipes();
}
});

loadRecipes();
  
  