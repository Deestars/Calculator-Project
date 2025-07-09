const display = document.getElementById('display');

function Display(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const parts = [];
    let currentNumber = '';

    
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      if ('+-*/^%'.includes(char)) {
        parts.push(currentNumber);
        parts.push(char);
        currentNumber = '';
      } else {
        currentNumber += char;
      }
    }
    parts.push(currentNumber);

    let total = Number(parts[0]);

    for (let i = 1; i < parts.length; i += 2) {
      const operator = parts[i];
      const nextNumber = Number(parts[i + 1]);
      if (operator === '+') {
        total = total + nextNumber;
      } else if (operator === '-') {
        total = total - nextNumber;
      } else if (operator === '*') {
        total = total * nextNumber;
      } else if (operator === '/') {
        total = total / nextNumber;
      } else if (operator === '^') {
        total = total ** nextNumber;
      } else if (operator === '%') {
        total = total % nextNumber;
      }
    }
    display.value = total;
  } catch (error) {
    display.value = 'Error';
  }
}