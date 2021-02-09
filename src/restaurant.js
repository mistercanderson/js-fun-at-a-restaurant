function createRestaurant(name) {
  var restaurant = {};
  restaurant.name = name;
  restaurant.menus = {};
  restaurant.menus.breakfast = [];
  restaurant.menus.lunch = [];
  restaurant.menus.dinner = [];
  return restaurant;
};

function addMenuItem(restaurant, menuItem) {
  var menuTypes = Object.getOwnPropertyNames(restaurant.menus);
  for (var i = 0; i < menuTypes.length; i++) {
    if (menuItem.type === menuTypes[i] &&
        !restaurant.menus[menuTypes[i]].includes(menuItem)) {
      restaurant.menus[menuTypes[i]].push(menuItem)
    }
  }
  return restaurant
};

function removeMenuItem(restaurant, item, menu) {
    for (var i = 0; i < restaurant.menus[menu].length; i++) {
      if (restaurant.menus[menu][i].name === item) {
        restaurant.menus[menu].splice(i, 1)
        return `No one is eating our ${item} - it has been removed from the ${menu} menu!`
      }
    }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
