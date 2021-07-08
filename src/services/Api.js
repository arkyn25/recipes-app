export const fetchRecipesList = async () => {
  const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const response = await meals.json();
  const data = response.meals;
  return data;
};

export const fetchDrinksList = async () => {
  const drinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const response = await drinks.json();
  const data = response.drinks;
  return data;
};

export const categoryListMeal = async () => {
  const meals = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const response = await meals.json();
  const data = response.meals;
  return data;
};

export const categoryListDrink = async () => {
  const drinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const response = await drinks.json();
  const data = response.drinks;
  return data;
};

export const filterCategoryMeals = async (category) => {
  const fetchByCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const response = await fetchByCategory.json();
  const data = response.meals;
  return data;
};

export const filterCategoryDrinks = async (category) => {
  const fetchByCategory = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const response = await fetchByCategory.json();
  const data = response.drinks;
  return data;
};

export const fetchMealsRandom = async () => {
  const fetchMeal = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const response = await fetchMeal.json();
  const data = response.meals;
  return data[0].idMeal;
};

export const fetchDrinksRandom = async () => {
  const fetchDrink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const response = await fetchDrink.json();
  const data = response.drinks;
  return data[0].idDrink;
};
