// Функція для множення всіх числових значень властивостей об'єкта на 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

// Створюємо об'єкт menu з трьома властивостями
let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
};

// Викликаємо функцію multiplyNumeric для об'єкта menu
multiplyNumeric(menu);

// Виводимо змінений об'єкт menu у консоль
console.log(menu);