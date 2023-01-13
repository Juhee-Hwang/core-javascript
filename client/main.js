import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert } from "./lib/index.js";

import { jujeobData } from "./data/data.js";



const submit = getNode('#submit');
const result = getNode('.result');
// console.log(submit);

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];
  
  if(!name) {
    console.log('이름을 입력해달라!');
    showAlert('.alert-error', '이름을 입력해주세요!',2000);    
    return;
  }

  if(isNumericString(name)){
    console.log('제대로 된 이름을 입력해달라!');
    showAlert('제대로 된 이름을 입력해주세요!')
    return;
  }

  clearContents(result);
  insertLast(result, pick)
}

function clickResultHandler(e) {
  e.preventDefault();


}

submit.addEventListener('click', clickSubmitHandler)

result.addEventListener('click', clickResultHandler)