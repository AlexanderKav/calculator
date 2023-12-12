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
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const dot = document.querySelector(".dot");

const equals = document.querySelector(".equals");
const calculatorScreen = document.querySelector(".calculator-screen");
const totalCalculation = document.querySelector(".total_calculation");
const calculations = document.querySelector(".calculations");

const calculation = document.createElement("h1");

let equation = []

let number=""
let number2=""
let total=0

let operations=""

let plus="+"
let takeaway="-"
let dividing="÷"
let multiplying="x"

clear.addEventListener("click", ()=>{
for(let i = 0; i < equation.length; i++){
        equation.shift();
        }
    calculations.textContent="";
    totalCalculation.textContent=""
    number = "";
    number2 = "";
    total = 0

});

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

seven.addEventListener("click",()=>{
    const div = document.createElement("div");
    const no_7 = document.createElement("h1");
    no_7.textContent = "7";
    div.appendChild(no_7);
    calculations.appendChild(div);

    if(typeof number != "string"){
        number2 = number2 + "7";
        console.log(number2);
    }
    else{
    number = number + "7";
    }
});





add.addEventListener("click",()=>{
    if (total > 0 || total < 0){
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
    operator.appendChild(adding);
    calculations.appendChild(operator);
    operations = plus;
    number = parseInt(number);
    equation.push(operations)


});

minus.addEventListener("click",()=>{
    if (total > 0 || total < 0){
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
    operations = takeaway;
    number = parseInt(number);
    equation.push(operations)
});

multiply.addEventListener("click",()=>{
    if (total > 0 || total < 0){
        calculations.textContent="";
        calculation.textContent = "";

        const div = document.createElement("div");
        const number= document.createElement("h1");

        number.textContent=total;
        div.appendChild(number);
        calculations.appendChild(number);
    }
    const operator = document.createElement("div");
    const multiplication = document.createElement("h1");
    multiplication.textContent = "X";
    operator.appendChild(multiplication)
    calculations.appendChild(operator);
    operations = multiplying;
    number = parseInt(number);
    equation.push(operations)
});


divide.addEventListener("click",()=>{
    if (total > 0 || total < 0){
        calculations.textContent="";
        calculation.textContent = "";

        const div = document.createElement("div");
        const number= document.createElement("h1");

        number.textContent=total;
        div.appendChild(number);
        calculations.appendChild(number);
    }
    const operator = document.createElement("div");
    const division = document.createElement("h1");
    division.textContent = "÷";
    operator.appendChild(division)
    calculations.appendChild(operator);
    operations = dividing;
    number = parseInt(number);
    equation.push(operations)
});

dot.addEventListener("click",()=>{
    const operator = document.createElement("div");
    const point = document.createElement("h1");
    point.textContent = ".";
    operator.appendChild(point)
    calculations.appendChild(operator);
});



equals.addEventListener("click",()=>{

    if(equation.length > 1){
alert("You cannot use more than one operator at a time");
alert("Please begin again");
for(let i = 0; i < equation.length; i++){
    equation.shift();
}
calculations.textContent="";
number = "";
number2 = "";
total = 0
   } 


   else if(equation.length = 1){
    number = parseInt(number);
    number2 = parseInt(number2)


    if(operations === plus){
    total = number + number2;    
    calculation.textContent = total;
    totalCalculation.appendChild(calculation);
    }

    else if(operations === takeaway){
        total = number - number2;    
        calculation.textContent = total;
        totalCalculation.appendChild(calculation);
        }
    
        else if(operations === multiplying){
            total = number * number2;  
            calculation.textContent = total;
            totalCalculation.appendChild(calculation);
            }

            else if(operations === dividing){
                total = number / number2;  
                calculation.textContent = total;
                totalCalculation.appendChild(calculation);
                }
    
        number = total;
        number2 = "";
    }

    if(equation.length > 0){
        for(let i = 0; i < equation.length; i++){
            equation.shift();
        }
    }

});

