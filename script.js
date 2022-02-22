//Cette fonction efface toutes les valeurs entrées
function clearScreen() {
  document.getElementById("result").value = "";
}

//Cette fonction affiche les valeurs rentrées
function display(value) {
  document.getElementById("result").value += value;
}

function arrayResult() {
  let operation = document.getElementById("result").value;
  let tableResult = operation.split(" ");
  return tableResult;
}

function operation(firstValue, secondValue, sign) {
  let result;
  switch (sign) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    case "/":
      result = firstValue / secondValue;
      break;
    default:
      result = "Invalid Operator";
      break;
  }
  return result;
}

function calculator() {
  let answer;
  let finalResult;
  let arrayCalculate = arrayResult();
  console.log(arrayCalculate);
  let symbol = ["+", "-", "*", "/"];
  console.log(symbol);
  for (let i = 0; i < arrayCalculate.length; i++) {
    for (let j = 0; j < symbol.length; j++) {
      if (arrayCalculate[i] == symbol[j]) {
        answer = operation(
          parseFloat(arrayCalculate[i - 1]),
          parseFloat(arrayCalculate[i + 1]),
          symbol[j]
        );
        console.log(answer);
      }
    }
  }

  document.getElementById("result").value = answer;

  //document.getElementById("result").value = answer;
  // let firstValue = parseInt(document.getElementById("firstValue").value);
  // let secondValue = parseInt(document.getElementById("secondValue").value);
  // let operator = document.getElementById("operator").value;
  // let result;

  // if((isNaN(firstValue)) || (isNaN(secondValue))){
  //     result = "Enter only Numbers";
  // } else {
  //     switch (operator) {
  //         case "+":
  //             result = firstValue + secondValue;
  //             break;
  //         case "-":
  //             result = firstValue - secondValue;
  //             break;
  //         case "*":
  //             result = firstValue * secondValue;
  //             break;
  //         case "/":
  //             result = firstValue / secondValue;
  //             break;
  //         default:
  //             result = "Invalid Operator";
  //             break;
  //     }
  // }
  // document.getElementById("result").innerHTML = result;
}

// const equal = document.querySelector("submit");
// equal.addEventListener("click", calculator);

// const firstValue = document.getElementById("firstValue");
// const operator = document.getElementById("operator");
// const secondValue = document.getElementById("secondValue");
// switch (operator) {
//     case "+":
//         document.getElementById("result").innerHTML = document.write(firstValue + secondValue);
//         break;
//     case "-":
//         document.getElementById("result").innerHTML = document.write(firstValue - secondValue);
//         break;
//     case "*":
//         document.getElementById("result").innerHTML = document.write(firstValue * secondValue);
//         break;
//     case "/":
//         document.getElementById("result").innerHTML = document.write(firstValue / secondValue);
//         break;
//     default:
//         document.getElementById("result").innerHTML = document.write("Invalid operator");
//         break;
//         }
//document.getElementById("result").innerHTML = console.log(firstValue+secondValue);
