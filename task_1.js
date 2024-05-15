let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

// перевіряємо чи масив не порожній
if (values.length > 0) {
  let minValue = Math.min(...values);
  let maxValue = Math.max(...values);
  console.log("Мінімальне значення - " + minValue);
  console.log("Максимальне значення - " + maxValue);
} else {
  console.log("Масив порожній");
}
