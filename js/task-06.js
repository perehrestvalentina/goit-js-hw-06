// const inputVal = document.getElementById("validation-input");

// const totalLenght = inputVal.getAttribute("data-length");
// const intTotallenght = parseInt(totalLenght, 10);

// inputVal.oninput = function() {
//   if (inputVal.value.length === intTotallenght) {
//     inputVal.classList.remove("invalid");
//     inputVal.classList.add("valid");
//   }
//   if (inputVal.value.length === 0) {
//     inputVal.classList.remove("valid");
//     inputVal.classList.remove("invalid");
//   }
//   if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
//     inputVal.classList.add("invalid");
//   }
// };
const nameInputRef= document.querySelector('#validation-input');
console.log(nameInputRef);

const onInputFocus = (event)=>{
  console.log('focus');
  console.log(event.target);
  event.target.classList.add('focus');
};

nameInputRef.addEventListener("focus", onInputFocus);

const inputBlur = (event)=>{
  const {dataset, value}= event.target;
  const requiredLength = Number(dataset.length);
  event.target.classList.remove('focus');
  console.log(requiredLength === value.length );
 if (requiredLength === value.length ){
  console.log('add');
  // event.target.classList.add('valid');
  // event.target.classList.remove('invalid');
  changeClass('valid', 'invalid', event.target);
 }
 else { 
  // event.target.classList.add('invalid');
  // event.target.classList.remove('valid');
  changeClass('invalid', 'valid', event.target);
}
  
};

nameInputRef.addEventListener("blur", inputBlur);

function changeClass(add, remove, elem){
  elem.classList.add(add);
  elem.classList.remove(remove);
};