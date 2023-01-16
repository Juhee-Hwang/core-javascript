import { attr, clearContents, diceAnimation, disableElement, enableElement, getNode, getNodes, insertLast, invisibleElement, visibleElement } from './lib/index.js';

/*
[주사위 굴리기]
1. dice 애니메이션 불러오기
2. bindEvent 유틸 함수 만들기
3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기
4. 변수 보호를 위한 클로저 + IIFE 만들기
*/

/* 
  [레코드 리스트 보이기]
  1. handleRecord 함수를 만들기
  2. disable 활성 유틸 함수 만들기
  3. handleReset 함수 만들기
  4. visible 활성 유틸 함수 만들기
  5. toggleState 유틸 함수 만들기
*/

/*
[ 레코드 템플릿 뿌리기 ]
1. renderRecordListItem 함수 만들기
2. HTML 템플릿 만들기
3. 템플릿 뿌리기 
*/

// 배열의 구조분해할당
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)')
// const resetButton = getNode('.buttonGroup > button:nth-child(3)')

// setinterval은 반복작업?
// let id = setInterval(() => {
//   console.log('안녕');
// }, 1000);

// setinterval을 취소하는 것
// clearInterval(id)

/* const handleRollingDice = () =>{
  let isRolling = false;
  let stopAnimation;
  
  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation,100);
      disableElement(recordButton);
      disableElement(resetButton);
    }else{
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }
  
    isRolling = !isRolling;
  }
} */
// rollingDiceButton.addEventListener('click', handleRollingDice())
// -> 이미 한 번 실행한다''



/* -------------------------------------------------------------------------- */
/*                                   render                                   */
/* -------------------------------------------------------------------------- */

let count = 0;
let total = 0;

function renderRecordListItem(params) {
  let diceValue = Number(attr('#cube','data-dice'));
  let template = /*html */ `
  <tr>
    <td>${++count}</td> 
    <td>${diceValue}</td> 
    <td>${total += diceValue}</td> 
  </tr>
  `

  insertLast('.recordListWrapper tbody', template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}

/* -------------------------------------------------------------------------- */
/*                                    event                                   */
/* -------------------------------------------------------------------------- */

// 🔥To Do : 클로저? IIFE 패턴 사용하는 이유 공부하기
// IIFE 패턴
const handleRollingDice = (() =>{

  let isRolling = false;
  let stopAnimation;
  
  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation,100);
      // recordButton.disabled = true;
      disableElement(recordButton);
      disableElement(resetButton);
    }else{
      clearInterval(stopAnimation);
      // recordButton.disabled = false;
      enableElement(recordButton);
      enableElement(resetButton);
    }
    isRolling = !isRolling;
  }
})()

const handleRecord = () => {
  visibleElement(recordListWrapper);
  renderRecordListItem();
}

const handleReset = () => {
  invisibleElement(recordListWrapper);
  clearContents('.recordListWrapper tbody');
  total = 0;
  count = 0;
}

rollingDiceButton.addEventListener('click', handleRollingDice);

recordButton.addEventListener('click',handleRecord);

resetButton.addEventListener('click',handleReset)