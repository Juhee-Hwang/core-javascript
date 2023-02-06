import { addClass, clearContents, copy, getInputValue, getNode, getRandom, insertLast, isNumericString, removeClass, showAlert } from "./lib/index.js";

import { jujeobData } from "./data/data.js";



const submit = getNode('#submit');
const resultArea = getNode('.result');
// console.log(submit);

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];
  
  if(!name) {
    console.log('이름을 입력해달라!');
    showAlert('.alert-error', '이름을 입력해주세요!',2000);
    
    // GSAP
    // fromTo(target, duration, vars object, )
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    // addClass(resultArea, 'shake');
    // setTimeout(() => {
    //   removeClass(resultArea, 'shake')
    // }, 1000);    
    return;
  }

  if(isNumericString(name)){
    console.log('제대로 된 이름을 입력해달라!');
    showAlert('제대로 된 이름을 입력해주세요!')
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick)
}

function clickCopyHandler() {
  let text = resultArea.textContent;
  // copy()가 promise, 그리고 then~
  copy(text).then(() => {
    showAlert('.alert-success','클립보드 복사가 완료되었습니다.',2000)
  })

}

submit.addEventListener('click', clickSubmitHandler)
resultArea.addEventListener('click', clickCopyHandler)