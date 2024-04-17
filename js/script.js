   
const searchButton = document.getElementById("searchButton");

function searchCocktail() {
    const cocktailName = document.getElementById("cocktailNameInput").value.trim();
    if (cocktailName === "") {
        alert("Please enter a cocktail name.");
        return;
    }
    fetchCocktail(cocktailName);
    
}

function fetchCocktail(cocktailName) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.drinks === null) {
                alert("Cocktail not found.");
            } else {
                displayCocktail(data.drinks[0]);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayCocktail(cocktail) {
    const cocktailNameElement = document.getElementById("cocktailName");
    const cocktailImageElement = document.getElementById("cocktailImage");
    const cocktailInstructionsElement = document.getElementById("cocktailInstructions");
    const alcoholicElement = document.getElementById("alcoholic");
    
    cocktailNameElement.textContent = cocktail.strDrink;
    cocktailImageElement.src = cocktail.strDrinkThumb;
    cocktailInstructionsElement.textContent = cocktail.strInstructions;
    alcoholicElement.textContent = `Alcoholic: ${cocktail.strAlcoholic}`;

    if (cocktail.strDrinkThumb) {
        cocktailImageElement.src = cocktail.strDrinkThumb;
        cocktailImageElement.style.display = 'block';
    } else {
        cocktailImageElement.style.display = 'none';
    }
}
searchButton.addEventListener("click", function() {
    const studentName = "Simran Kaur"; 
    const studentID = "200555884"; 

    const studentInfoElement = document.createElement("p");
    studentInfoElement.textContent = `Student Name: ${studentName} - Student ID: ${studentID}`;
    document.body.appendChild(studentInfoElement);

    searchCocktail();
});