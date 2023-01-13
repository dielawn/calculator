//create functions add subtract multiply divide
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let allButtons = document.querySelectorAll('button')
let operatorBtns = document.querySelectorAll('.operator')
let numberBtns = document.querySelectorAll('.number')
let equalBtn = document.querySelector('#equal')
let clearBtn = document.querySelector('#clear')

const solved = document.getElementById('solvedInput')
const input = document.getElementById('input');
const equation = document.getElementById('equation')



function getOperator (operator) {
    firstOperator = input.textContent;
    thisOperation = operator;
    equation.textContent = `${firstOperator} ${thisOperation}` 
}

function operate() {   
let display = displayButtonClicked()
console.log(display)
    // let a = Number(a);
    // let b = Number(b);
    //     if(operator === '+'){
    //     return add(a, b)   
    // }
    //     if(operator === '-'){
    //     return subtract(a, b)    
    // }        
    //     if(operator === '*'){
    //     return multiply(a, b)   
    // }
    //     if(operator === '/'){
    //     if (b === 0) result = null
    //     else return divide(a, b)    
    // }    
  
    }
   operate()
    
function reset(){
    input.textContent = '';
    let firstOperator = '';
    let secondOperator = '';
}


function displayButtonClicked(){        
    numberBtns.forEach(button => {
        button.addEventListener('click', displayButtonClicked)
    })
    
     
}

allButtons.forEach(button => {
    button.addEventListener('click', displayButtonClicked => {
        if (displayButtonClicked.target.matches('button')) {
            const key = displayButtonClicked.target       
            input.value += key.textContent
            let display = input.value
            const keySymbol = key.textContent
            console.log(keySymbol)
            return display
            
        }
       
    })
})   

// operatorBtns.forEach(button => {
//     button.addEventListener('click', getOperator())
    
// })

// equalBtn.addEventListener('click', () => {       
//     operate()
// })



// clearBtn.addEventListener('click', () => {
//     reset()
// })




// let stringEqation = input.value;
// const problem = stringEqation.split(/[\+\-\*\/]/)

// let stringEqation = input.value;
// const problem = stringEqation.split(/[\+\-\*\/]/)
// let a = Number(problem[0])
// let b = Number(problem[1])
// console.log(a)
// console.log(b)
// /// \d/g, '' removes numbers from string
// let operator = stringEqation.replace(/\d/g, '')
// console.log(operator)
// if(operator === '+'){
//     result = add(a, b)
// }
// if(operator === '-'){
//     result = subtract(a, b)
// }        
// if(operator === '*'){
//     result = multiply(a, b)
// }
// if(operator === '/'){
//     if (b === 0) result = null
//     else result = divide(a, b)
// }

// console.log()
// let equation = `${input.value} = ${result}`


// input.value = " ";
// document.getElementById('equation').innerText = equation;

// console.log(equation)