let allButtons = document.querySelectorAll('button')
let operatorBtns = document.querySelectorAll('.operator')
let numberBtns = document.querySelectorAll('.number')
let equalBtn = document.querySelector('#equal')
let clearBtn = document.querySelector('#clear')



let solvedInput = document.getElementById('solvedInput')
let input = document.getElementById('input')


let num1 = null;
let num2 = null;
let operator;
let result = getResult(Number(num1), operator, Number(num2));

//sets content of inputs
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function getOperatorNums(event){
    if(event.target.matches('button')){
        const action = event.target.getAttribute('data-action')
        if((action === 'add') || 
        (action === 'subtract') ||
        (action === 'multiply') ||
        (action === 'divide')){
           operator = event.target.textContent;
           
        }     
    }
    if (event.target.matches('.number')){
        if(operator){
            if (num2 === null) {
                num2 = 0;
            }
            num2 += event.target.textContent;
            console.log(num2)
        }else{
            if (num1 === null) {
                num1 = 0;
            }
            num1 += event.target.textContent;
            console.log(num1)
        }   
    }   
}

function getResult(num1, operator, num2){
    console.log(num1)
    num1 = Number(num1)
    num2 = Number(num2)
    let result;
    if(operator === '+'){
        let result = add(num1, num2) 
        input.value = result  
               
    }
    if (operator === '-'){
        let result = subtract(num1, num2)
        input.value = result
    }
    if (operator === '*'){
        let result = multiply(num1, num2)
        input.value = result
    }
    if (operator === '/'){
        let result = divide(num1, num2)
        input.value = result
    }    
}



function display(event) {
    if (event.target.matches('button')) {
        const key = event.target.textContent
        input.value += key
                       
    }
   //moves equation to upper input leaving result 
    if (event.target.getAttribute('data-action') === 'solve') {
        solvedInput.value = input.value
        input.value = result
      }     
      if (event.target.getAttribute('data-action') === 'clear') {
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

}

allButtons.forEach(button => {
    button.addEventListener('click', event => {
        display(event);
        getOperatorNums(event);
       
        if(button.textContent === '='){
           result = getResult(num1, operator, num2)
           num1 = input.value
           num2 = 0;
            
        }
        
        console.log(num1, operator, num2, result)
    
    });
});





