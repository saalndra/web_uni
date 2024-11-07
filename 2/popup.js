const display = document.getElementById("display");
let currentInput = "";

// Функція для обчислення виразу
function calculate(expression) {
  try {
    // Парсинг і обчислення виразу
    return Function('"use strict"; return (' + expression + ')')();
  } catch (error) {
    return "Error"; // Повертаємо "Error", якщо вираз некоректний
  }
}

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      // Очистити дисплей
      currentInput = "";
      display.value = "";
    } else if (value === "=") {
      // Обчислити результат
      const result = calculate(currentInput);
      display.value = result;
      currentInput = result.toString();
    } else {
      // Додати значення до поточного вводу
      currentInput += value;
      display.value = currentInput;
    }
  });
});
