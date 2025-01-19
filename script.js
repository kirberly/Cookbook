// Populate the homepage with recipes
function displayRecipes() {
  const recipeList = document.getElementById("recipe-list");
  recipes.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h2>${recipe.title}</h2>
      <p>Category: ${recipe.category}</p>
      <a href="recipe.html?id=${recipe.id}">View Recipe</a>
    `;
    recipeList.appendChild(recipeCard);
  });
}

// Populate recipe details page
function displayRecipeDetail() {
  const params = new URLSearchParams(window.location.search);
  const recipeId = parseInt(params.get("id"));
  const recipe = recipes.find(r => r.id === recipeId);

  if (!recipe) {
    document.getElementById("recipe-detail").innerHTML = "<p>Recipe not found.</p>";
    return;
  }

  const detailSection = document.getElementById("recipe-detail");
  detailSection.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}">
    <h2>${recipe.title}</h2>
    <h3>Category: ${recipe.category}</h3>
    <h2>Ingredients</h2>
    <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
    <h2>Prep</h2>
    <ol>${recipe.prep.map(task => `<li>${task}</li>`).join("")}</ol>
    <h2>Steps</h2>
    <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>
  `;
}

// Initialize the correct page
if (document.getElementById("recipe-list")) {
  displayRecipes();
} else if (document.getElementById("recipe-detail")) {
  displayRecipeDetail();
}

