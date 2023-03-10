let addBtnEl = document.querySelector(".add-btn");
let clrBtnEl = document.querySelector(".clear-btn");
let numberInEl =document.querySelector(".number");


let sum = 0;


addBtnEl.addEventListener('click' , function () {
    sum += 1;
    // $addBtnEl.style.backgroundColor = 'red'
    numberInEl.innerHTML = sum;
});
    
    clrBtnEl.addEventListener('click', function () {
        sum = 0;
        numberInEl.innerHTML = sum;
    })
    

