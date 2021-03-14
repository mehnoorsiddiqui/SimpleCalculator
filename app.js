const calculator=document.querySelector(".calculator")
const keys=document.querySelector(".calculator-keys")
const display=document.querySelector(".calculator-display")
keys.addEventListener("click",e=>{
    if(e.target.matches("button")){
        const key=e.target
        const action=key.dataset.action
        const keyContent=key.textContent
        const displayedNum=display.textContent
        if(!action){
            if(displayedNum==="0"||previousKeyType==="operator"){
                display.textContent=keyContent
                console.log("number key!")
            }
            else{
                display.textContent=displayedNum+keyContent
            }
           
        }
        if(action==="add"||action==="subtract"||action==="multiply"||action==="divide"){
            key.classList.add("is-depressed")
            calculator.dataset.previousKeyType="operator"
            console.log("operator key!")
        }
        if(action==="decimal"){
            display.textContent=displayedNum + "."
            console.log("decimal key!")
        }
        if(action==="calculate"){
            console.log("equal key!")
        }
        if(action==="clear"){
            console.log("clear key!")
        }
      // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k=> k.classList.remove("is-depressed"))


    }
})







//QuerySelector
//The Document method querySelector() returns the first Element within the document that matches the specified selector
//, or group of selectors. 
//If no matches are found, null is returned. 


//ARROW FUNCTIONS

// Well, it turns out that we’re not just substituting function with =>.
// An arrow function’s syntax can change depending on two factors:

// 1.The number of arguments required
// 2.Whether you’d like an implicit return.

// The first factor is the number of arguments supplied to the arrow function. 
// If you only supply one argument, you can remove the parenthesis that surrounds the arguments. 
// If no arguments are required, you can substitute the parenthesis (()) for an underscore (_).
// All of the following are valid arrow functions.

// const zeroArgs = () => {/* do something */}
// const zeroWithUnderscore = _ => {/* do something */}
// const oneArg = arg1 => {/* do something */}
// const oneArgWithParenthesis = (arg1) => {/* do something */}
// const manyArgs = (arg1, arg2) => {/* do something */}

// The second factor for arrow functions is whether you’d like an implicit return.
// Arrow functions, by default, automatically create a return keyword if the code only takes up one line, 
// and is not enclosed in a block.
// So, these two are equivalent:

// const sum1 = (num1, num2) => num1 + num2      
// const sum2 = (num1, num2) => { return num1 + num2 }
// https://zellwk.com/blog/es6/#arrow-functions