// Задаємо об’єкт calculator

let calculator = {
  a: 0,
  b: 0,
  read: function (a, b) {    //Задаємо функцію для зберігання значень об'єкта
    this.a = a;
    this.b = b;
  },
  sum: function () {   //Задаємо функцію для обчислення суми збережених значень
    return this.a + this.b;   //Повертаємо результат
  },
  mul: function () {   //Задаємо функцію для множення збережених значень 
    return this.a * this.b;
  }
};

calculator.read(5, 6);
console.log(calculator.sum());
console.log(calculator.mul());