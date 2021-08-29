const angles = document.querySelectorAll(".angleInput");
const isTriangleBtn = document.querySelector("#istriangle-btn");
const outputBox = document.querySelector("#output-box")
 
function calculateAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles)
    return sumOfAngles;
}
function isTriangle(){
    const sumOfAngles = calculateAngles(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value))
    // outputBox.innerHTML = `Sum of angles is ${sumOfAngles}`
    if(angles[0].value>0 && angles[1].value>0 && angles[2].value>0){
        if(sumOfAngles === 180){
            outputBox.innerText = "Yay!!! The angles form a triangle "
        }else{
            outputBox.innerText = "Oh oh!! The angles does not form a triangle"
        }
    }else{
        console.log('all 3 values are not entered')
    }
}

isTriangleBtn.addEventListener('click', isTriangle)