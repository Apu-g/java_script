let a =document.getElementById("num1");

let b = document.getElementById("num2");
let resultEl = document.getElementById("result");

function add(){

    let sum = parseFloat(a.value) + parseFloat(b.value);
    console.log(sum);
    resultEl.textContent = "Result: " + sum;
    
}

function subtract(){
    let diff = parseFloat(a.value) - parseFloat(b.value);
    resultEl.textContent = "Result: " + diff;
}

function multiply(){
    let product = parseFloat(a.value) * parseFloat(b.value);
    resultEl.textContent = "Result: " + product;
}

function divide(){
    if (parseFloat(b.value) === 0) {
        resultEl.textContent = "Error: Division by zero";
        return;
    }else{
    let quotient = parseFloat(a.value) / parseFloat(b.value);
    resultEl.textContent = "Result: " + quotient;
    }
}