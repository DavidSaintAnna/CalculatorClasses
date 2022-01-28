class Calculator {
  constructor() {
    this.operand1 = "";
    this.operand2 = "";
    this.operation = "";
    this.changeOper = "";
  }

  setOperand1(_operand1) {
    this.operand1 += _operand1;
    displayBtn.value = this.operand1;
    displayBtn2.value = this.operand1;
  }

  setOperand2(_operand2) {
    this.operand2 += _operand2;
    displayBtn.value = this.operand2;
    displayBtn2.value = this.changeOper + this.operand2;
  }

  setOperation(_operation) {
    if (this.operation) {
      if (this.operand2) {
        this.getResult();
        this.operand1 = displayBtn.value;
        this.operand2 = "";
        displayBtn2.value = this.operand1;
        this.operation = _operation;
        displayBtn.value = "0";
        displayBtn2.value += this.operation;
        this.changeOper = displayBtn2.value;
      } else {
        this.operation = _operation;
        displayBtn.value = "0";
        displayBtn2.value += this.operation;
        this.changeOper = displayBtn2.value;
      }
    } else {
      this.operation = _operation;
      displayBtn.value = "0";
      displayBtn2.value += this.operation;
      this.changeOper = displayBtn2.value;
    }
  }

  getResult() {
    let result = 0;
    let operand1Int = parseInt(this.operand1);
    let operand2Int = parseInt(this.operand2);
    switch (this.operation) {
      case "+":
        result = operand1Int + operand2Int;
        displayBtn.value = result;
        this.operand1 = result;
        this.operand2 = "";
        break;
      case "-":
        result = operand1Int - operand2Int;
        displayBtn.value = result;
        this.operand1 = result;
        this.operand2 = "";
        break;
      case "*":
        result = operand1Int * operand2Int;
        displayBtn.value = result;
        this.operand1 = result;
        this.operand2 = "";
        break;
      case "/":
        result = operand1Int / operand2Int;
        displayBtn.value = result;
        this.operand1 = result;
        this.operand2 = "";
        break;
      default:
        return false;
    }
  }

  clearCalculator() {
    this.operand1 = "";
    this.operand2 = "";
    this.operation = "";
    displayBtn.value = 0;
    displayBtn2.value = 0;
    this.changeOper = "";
  }
}

let operator = "";
let auxEqual = 0;
let auxOperator = 0;
const buttonNumber = document.querySelectorAll("[data-info]");
const operatorButton = document.querySelectorAll("[data-oper]");
const equal = document.querySelector("[data-equal]");
const clear = document.querySelector("[data-clear]");
const displayBtn = document.getElementById("display_btn");
const displayBtn2 = document.getElementById("display_btn2");

//const deleteButton = document.querySelector("[data-delete]");

const calculator = new Calculator();

buttonNumber.forEach((button) => {
  button.addEventListener("click", () => {
    let operand = button.innerText;
    if (operator) {
      calculator.setOperand2(operand);
      auxOperator = 0;
    } else {
      calculator.setOperand1(operand);
    }
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (auxOperator === 0) {
      operator = button.innerText;
      calculator.setOperation(operator);
      auxOperator = 1;
      auxEqual = 0;
    }
  });
});

equal.addEventListener("click", () => {
  if (auxEqual === 0) {
    calculator.getResult();
    auxEqual = 1;
    auxOperator = 0;
  }
});

clear.addEventListener("click", () => {
  calculator.clearCalculator();
  operator = "";
  auxOperator = 0;
  auxEqual = 0;
});

//deleteButton.addEventListener("click", () => {
//const test = deleteButton.innerText;
//console.log(test);
//});
