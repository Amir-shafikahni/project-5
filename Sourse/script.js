let $ = document;

// Display ////////////////////////////////////////////
let displayBox = $.querySelector(".display-box");

// Numbers ////////////////////////////////////////////
for (let i = 0; i < 10; i++) {
  let numberButtoni = $.querySelector(".number-" + i);
  numberButtoni.addEventListener("click", function () {
    displayBox.innerHTML = displayBox.innerHTML + i;
  });
}

//Actions //////////////////////////////////////////////
let firstNumber = null;
let secondNumber = null;
let sum = false;
let substract = false;
let multiplication = false;
let division = false;

//to do + Action //
let sumAction = $.querySelector(".sum-button");
sumAction.addEventListener("click", function () {
  firstNumber = Number(displayBox.innerHTML);
  displayBox.innerHTML = null;
  sum = true;
});

// to do - action //
let subtractButton = $.querySelector(".subtract-button");
subtractButton.addEventListener("click", function () {
  firstNumber = Number(displayBox.innerHTML);
  displayBox.innerHTML = null;
  substract = true;
});

//to do * action //
let multiplicationButton = $.querySelector(".multiplication-button");
multiplicationButton.addEventListener("click", function () {
  firstNumber = Number(displayBox.innerHTML);
  displayBox.innerHTML = null;
  multiplication = true;
});

// to do / action //
let divisionButton = $.querySelector(".division-buttton");
divisionButton.addEventListener("click", function () {
  firstNumber = Number(displayBox.innerHTML);
  displayBox.innerHTML = null;
  division = true;
});

// to do C action //
let refreshButton = $.querySelector(".refresh-button");
refreshButton.addEventListener("click", function () {
  displayBox.innerHTML = null;
});

// to do delete action //
let deleteAction = $.querySelector(".delete-button");
deleteAction.addEventListener("click" , function(){
  displayBox.innerHTML = Math.floor(displayBox.innerHTML/10)
})

// calculation //
let calculate = $.querySelector(".calculate");
calculate.addEventListener("click", function () {
  secondNumber = Number(displayBox.innerHTML);
  displayBox.innerHTML = null;
  if (sum) {
    displayBox.innerHTML = firstNumber + secondNumber;
    sum = false;
  } else if (substract) {
    displayBox.innerHTML = firstNumber - secondNumber;
    substract = false;
  } else if (multiplication) {
    displayBox.innerHTML = firstNumber * secondNumber;
    multiplication = false;
  } else if (division) {
    displayBox.innerHTML = firstNumber / secondNumber;
    division = false;
  }
});

////////////////////////////////////////////////////////
