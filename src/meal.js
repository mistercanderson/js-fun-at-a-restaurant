function nameMenuItem(item) {
  return 'Delicious ' + item
};

function createMenuItem(name, price, type) {
  var menuItem = {};
  menuItem.name = name;
  menuItem.price = price;
  menuItem.type = type;
  return menuItem;
};


function addIngredients(item, arr) {
  if (!arr.includes(item)) {
    arr.push(item);
  }
  return arr;
};

function formatPrice(price) {
  var formattedPrice = '$' + price;
  return formattedPrice;
};

function decreasePrice(price) {
  var decreaseTenPercent = price - (price / 10);
  return decreaseTenPercent;
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
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
