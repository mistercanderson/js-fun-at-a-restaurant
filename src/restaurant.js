var createRestaurant = (name) => {
  var restaurant = {};
  restaurant.name = name;
  restaurant.menus = {};
  restaurant.menus.breakfast = [];
  restaurant.menus.lunch = [];
  restaurant.menus.dinner = [];
  return restaurant;
};

var addMenuItem = (restaurant, menuItem) => {
  if (menuItem.type === 'breakfast' && !restaurant.menus.breakfast.includes(menuItem)) {
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type === 'lunch' && !restaurant.menus.lunch.includes(menuItem)) {
    restaurant.menus.lunch.push(menuItem);
  } else if (menuItem.type === 'dinner' && !restaurant.menus.dinner.includes(menuItem)) {
    restaurant.menus.dinner.push(menuItem);
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
