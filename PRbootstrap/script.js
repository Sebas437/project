// Creamos una función que realizará las operaciones de la calculadora
function calculate(operation, num1, num2) {
    if (operation === 'add') {
      return num1 + num2;
    } else if (operation === 'subtract') {
      return num1 - num2;
    } else if (operation === 'multiply') {
      return num1 * num2;
    } else if (operation === 'divide') {
      return num1 / num2;
    }
  }
  
  // Llamamos a la función y pasamos los argumentos necesarios
  // para realizar una operación de suma
  let result = calculate('add', 5, 7);
  console.log(result);  // imprime 12 en la consola
  