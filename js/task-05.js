// let input = document.getElementById("name-input");
// let nameOutput = document.getElementById("name-output");

// input.oninput = function () {
//     if (input.value === '') {
//        nameOutput.innerHTML = 'Anonymous';
//     } else{
//     nameOutput.innerHTML = input.value;
//     }
// }
const inputNameRef= document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output')

const handleInputName = (event)=>{
    const{value}= event.target;
    outputRef.textContent = value? value : 'Anonymous';
};
inputNameRef.addEventListener('input',handleInputName);