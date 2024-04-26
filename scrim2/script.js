let paraEl1 = document.getElementById("para1-el")
let paraEl2 = document.getElementById("para2-el")

let num1 = 0
let num2 = 0
let num3 = 0

function addOne(){
    num1 += 1
    console.log(num1)
    paraEl1.textContent = num1
}
function addTwo(){
    num2 += 2
    console.log(num2)
    paraEl1.textContent = num2
}
function addThree(){
    num3 += 3
    console.log(num3)
    paraEl1.textContent = num3
}
function powerOne(){
    num1 += 1
    console.log(num1)
    paraEl2.textContent = num1
}
function powerTwo(){
    num2 += 2
    console.log(num2)
    paraEl2.textContent = num2
}
function powerThree(){
    num3 += 3
    console.log(num3)
    paraEl2.textContent = num3
}