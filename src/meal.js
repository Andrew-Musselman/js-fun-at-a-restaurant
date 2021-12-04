function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  }
  return menuItem;
}

function addIngredients(ingredient, ingredients) {
  if (!ingredients.includes(ingredient)) {
    ingredients.push(ingredient);
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(initialPrice) {
  return initialPrice * .9
}

function createRecipe (title, ingredients, type) {

  recipe = {
    title:  `${title}`,
    ingredients: ingredients,
    type: type,
  }
   return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
