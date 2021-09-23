const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputSide = document.querySelector('#output-side')

function calculateSumOfSquares(a,b){
    const sumOfSquare = a*a + b*b;
    return sumOfSquare;
}


function calculateHypotenuse(){
    if(sides[0].value !== "" && sides[1].value !== ""){
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value))
        const lengthOfhypotenuse = Math.sqrt(sumOfSquares).toFixed(2)
        // console.log(sumOfSquares);
        outputSide.innerText =`Length of Hypotenuse is ${lengthOfhypotenuse}`;
    }else{
        outputSide.innerText = "Please enter a valid inputs"
    }
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);