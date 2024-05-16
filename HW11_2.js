let array = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

// Заміна від'ємних значень на 0
array = array.map(value => value < 0 ? 0 : value);

// Виведення значень масиву
console.log(array);