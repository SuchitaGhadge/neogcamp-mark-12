let baseInput = document.querySelector('#input-base');
let heightInput = document.querySelector('#input-height');
let calcBtn = document.querySelector('#calc-btn');
let outputBox = document.querySelector('#output-box');


function calculateAreaOfTriangle(){
    let height = Number(heightInput.value);
    let base = Number(baseInput.value);
    let area = ((height*base)/2).toFixed(2);
    outputBox.innerHTML = `<h3>Area of triangle is ${area}</h3>`
}

calcBtn.addEventListener('click', calculateAreaOfTriangle)