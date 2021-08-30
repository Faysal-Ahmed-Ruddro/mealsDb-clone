// search area part
searchFood = () => {
  const seacrhField = document.getElementById("seacrh-field");
  const seacrhText = seacrhField.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${seacrhText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => searchResults(data.meals));
};
// displaying search result
const searchResults = (meals) => {
  const displayField = document.getElementById("display-field");
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100 ">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
      </div>
      <button class="btn btn-primary" onclick="loadMeals(${meal.idMeal})"> See Details</button>
    </div>
        `;
        displayField.appendChild(div)
  });
};
const loadMeals = mealsId => {
    const url=(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`)
    fetch(url)
      .then((res) => res.json())
      .then((data) => seeDetailsMeals(data.meals[0]));
}
const seeDetailsMeals = meals => {
    console.log(meals);
    const singleItems = document.getElementById("single-items");
    singleItems.innerHTML = `
    <div class="card" style="width: 18rem;" >
     <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meals.strMeal}</h5>
    <p class="card-text">${meals.strInstructions.slice(0, 250)}</p>
    <a href="${meals.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
    `;
}