let allButtons = document.querySelectorAll('button')
let operatorBtns = document.querySelectorAll('.operator')
let numberBtns = document.querySelectorAll('.number')
let equalBtn = document.querySelector('#equal')
let clearBtn = document.querySelector('#clear')
let solvedInput = document.getElementById('solvedInput')
let input = document.getElementById('input')
let num1 = null;
let num2 = null;
let operator = null;
let previousOperator = null;
let result = getResult(Number(num1), operator, Number(num2));

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let currentOperator = null;

function getOperatorNums(event) {
    if(event.target.matches('button')) {
        const action = event.target.getAttribute('data-action');
        if((action === 'add') || 
        (action === 'subtract') ||
        (action === 'multiply') ||
        (action === 'divide')) {
            if(operator != null) {
                let previousOperator = operator
                result = getResult(num1, operator, num2)
                operator = event.target.textContent                
                solvedInput.value = `${Number(num1)} ${previousOperator} ${Number(num2)} =`;
                num1 = input.value;
                num2 = null;             
            }
            operator = event.target.textContent;
        }
    }
    if (event.target.matches('.number')) {
        if(operator) {
            if (num2 === null) {
                num2 = 0;
            }
            num2 += event.target.textContent; 
        } else {
            if (num1 === null) {
                num1 = 0;
            }
            num1 += event.target.textContent;           
        }
    }
}

function getResult(num1, operator, num2){
    num1 = Number(num1)
    num2 = Number(num2)
    let result;
    if(operator === '+'){
        result = add(num1, num2) 
        input.value = result         
    }
    if (operator === '-'){
        result = subtract(num1, num2)
        input.value = result
    }
    if (operator === '*'){
        result = multiply(num1, num2)
        input.value = result
    }
    if (operator === '/'){       
        result = divide(num1, num2)
        input.value = result
    }    
    return result
}

function display(event) {
    const key = event.target.textContent
    if (event.target.matches('button')) {        
        input.value += key
    }
    const action = event.target.getAttribute('data-action')
    if (action === 'solve') {
        result = getResult(num1, operator, num2);        
    }
    if (action === 'clear') {
        clear()
    }
}

function clear() {
    input.value = ''
    solvedInput.value = ''
    num1 = null;
    num2 = null;
    result = null;
    operator = null;
    previousOperator = null;
}

allButtons.forEach(button => {
    button.addEventListener('click', event => {
        getOperatorNums(event);
        display(event);
        if(button.textContent === '='){    
            if(operator === null){
                let satoshis = Number(num1) * 100000000;
                let satoshisWithCommas = satoshis.toLocaleString();
                solvedInput.value =`${Number(num1)} BTC = `
                input.value = `${satoshisWithCommas} Sats  `
                return
            }
            solvedInput.value = `${Number(num1)} ${operator} ${Number(num2)} =`;
            num1 = input.value;
            num2 = 0;   
            previousOperator = operator
            operator = null;
        }    
    });
});

