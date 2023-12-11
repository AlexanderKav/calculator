const nine = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four = document.querySelector(".four");
const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
const zero = document.querySelector(".zero");
const clear = document.querySelector(".delete");

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const mulitply = document.querySelector(".mulitply");
const divide = document.querySelector(".divide");

const equals = document.querySelector(".equals");
const calculatorScreen = document.querySelector(".calculator-screen");
const totalCalculation = document.querySelector(".total_calculation");
const calculations = document.querySelector(".calculations");

const calculation = document.createElement("h1");

let equation = []
let previousEquation = []


let number=""
let number2=""

let operations=""

let plus="+"
let takeaway="-"
let dividing="÷"
let mulitplying="x"

let total=0

//let plusSign = "+"

nine.addEventListener("click",()=>{
    const div = document.createElement("div");
    const no_9 = document.createElement("h1");
    no_9.textContent = "9";
    div.appendChild(no_9)
    calculations.appendChild(div);

    if(typeof number != "string"){
        number2 = number2 + "9"
        console.log(number2)
    }
    else{
    number = number + "9"
    }
});

eight.addEventListener("click",()=>{
    const div = document.createElement("div");
    const no_8 = document.createElement("h1");
    no_8.textContent = "8";
    div.appendChild(no_8)
    calculations.appendChild(div);

    if(typeof number != "string"){
        number2 = number2 + "8";
        console.log(number2);
    }
    else{
    number = number + "8";
    }
});

add.addEventListener("click",()=>{
    if (total > 0){
        calculations.textContent="";
        calculation.textContent = "";
        const div = document.createElement("div");
        const number= document.createElement("h1");
        number.textContent=total;
        div.appendChild(number);
        calculations.appendChild(number);
    }
    const operator = document.createElement("div");
    const adding = document.createElement("h1");
    adding.textContent = "+";
    operator.appendChild(adding)
    calculations.appendChild(operator);
    operations = plus
    number = parseInt(number);

});

minus.addEventListener("click",()=>{
    if (total > 0){
        calculations.textContent="";
        calculation.textContent = "";
        const div = document.createElement("div");
        const number= document.createElement("h1");
        number.textContent=total;
        div.appendChild(number);
        calculations.appendChild(number);
    }
    const operator = document.createElement("div");
    const takingAway = document.createElement("h1");
    takingAway.textContent = "-";
    operator.appendChild(takingAway)
    calculations.appendChild(operator);
    operations = takeaway
    number = parseInt(number);
});




equals.addEventListener("click",()=>{
    number = parseInt(number);
    number2 = parseInt(number2)
    if(operations = "+"){
    total = number + number2;    
    calculation.textContent = total;
    totalCalculation.appendChild(calculation);
    }

    else if(operations = "-"){
        total = number - number2;    
        calculation.textContent = total;
        totalCalculation.appendChild(calculation);
        };


    number = total;
    number2 = "";

});

