// 모듈 프로그래밍
// import가 있어야 들여보내줄거야! 하고 규제하고 있음

let a  = 10;

// 1. input value값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기
// 5. 화면에 출력하기

// 내가 받아온 함수 이외에는 다 캡슐화되어 있어서 받아올 수 
// import { getNode } from './lib/dom/getNode.js';
// import { attr } from './lib/dom/attr.js'
// import { css } from './lib/dom/css.js';
// import가 많아지면 이제 이걸 중간에서 연결해주는? 역할의 중간다리가 있다.
// dom 폴더에 index.js를 만들어서 import할 모듈을 export (re export)
// lib 폴더에서 또 index.js만들어서 import할 모듈을 export 한다
// 글고 main.js에서 ./lib/index.js를 한번만 import 해온다
import {
  getNode,
  refError,
  insertLast
} from './lib/index.js';



const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const done = getNode('#done');
const result = getNode('.result');

function getInputValue(node) {
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.');
  return node.value
}

const sum = (valueA, valueB) => valueA + valueB;

function clearContents (node) {
  if(typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

function calculateAndRender() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  return total;
}

function handler(e) {
  /* 이벤트의 기본 동작 차단을 위해서
  현재 HTML 구조는 Form 태그 안에 있고,
  form 태그 안에 잇는 정보를 어디에 전송해야 하기 때문에 꼭 안에 submit있어야 함
  우리는 입력하지 않은 상태에서 즉, 이벤트가 먹히기 전에 어떤 정보가 보내질 수 잇는데, 
  입력된 값을 확인도 하기 전에 값이 Reload되지 않게 하려고..!
  e.preventDefault()를 주면 본인이 가진 기능 자체를 수행하지 않게 막아준다.
  그 요소의 액션을 막아준다.
  submit이 순간 새로고침이 되는게 폼의 기본 동작인데, 저희는 그걸 원하지 않아서 그 이벤트를 멈춰주는것 (?) */
  e.preventDefault();
  
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  // console.log(total);

  clearContents('.result')
  insertLast('.result',total)
}

function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents('.result')
  insertLast('.result',total)
}

done.addEventListener('click',handler);

firstInput.addEventListener('change',inputHandler)
secondInput.addEventListener('change',inputHandler)



// 처음 혼자 풀다가 말은 것
// const firstNum = getNode('#firstNumber');
// const secondNum = getNode('#secondNumber');
// const button = getNode('#done')

// function handler(e) {
//   let target = e.target;

//   while(!attr(target,'calculator')){
//     target = target.parentNode;

//     if(target.nodeName === 'BODY'){
//       target = null;
//       return;
//     }
//   }

//   if(target.name === "first"){
//     console.log(firstNum.value);
//   }
// }

// button.addEventListener('click',handler)


// 필기 by. 최보영님

// //1. getnode 이어주고 찾기
// //console.log( getNode('#firstNumber') );

// //2. getNode 값 확인하고 값담기
// const firstInput = getNode('#firstNumber');
// //15.
// const secondInput = getNode('#secondNumber');

// //3.이벤트핸들러연결
// const done = getNode('#done');

// //29.
// const result = getNode('.result');


// //8. 
// function getInputValue(node){
  
//   //10.
//   if(typeof node === 'string') node = getNode(node);
//   //11. 다른 선택자 가져오면안되고 input만 가져와야해서 
//   // tagName은 항상 대문자여서 대문자로 적어주기
//   if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')
//   // 9. 노드의 value값 가져옴 // 여기서 문자열로 +(node.value) 받아버리면 바로 숫자가되지만 재사용성을 고려해서 숫자가 아닌 결과값에서 나중에 형변환 하는것이 좋다?
//   return node.value
// }

// //20.
// const sum = (valueA,valueB) => valueA + valueB; //return 생략되어있음

// //24. 유틸함수생성 왜만들었지?
// function clearContents(node){
//   if(typeof node === 'string') node = getNode(node);
//   node.textContent = '';
// }

// //5. 4번만들었으니 이어준다
// function handler(e){

//   //6. 값을 입력하고 새로고침하면 날라가니까 
//   // 현재 html구조상 form으로 되어있는데 form은 정보입력하면 전송시키는 역할인데 form 안에 submit 항상있다. 여기에 정보 입력하고 done 누르면 form어딘가에 정보를 전송해야되는데 아무것도 입력을 안했으니 새로고침되면서 증발된다.(reload되서) 그때 기본 브라우저 동작 기능을 없애는것이 필요해서 preventDefault 걸어주면 그 동작이 실행하지않는다.
//   e.preventDefault();

//   //12. //17. getInputValue에 + 추가함
//   let firstValue = +getInputValue(firstInput);
//   //14. //18. getInputValue + 추가함
//   let secondValue = +getInputValue(secondInput);
//   //19. //21. sum추가
//   let total = sum(firstValue, secondValue)

//   //16. 값 출력되는거 완료했지만 얘네 값 타입은 문자열이다.typeof 붙이면 알수있음. 문자열끼리 더하면 접함이 일어남.
//   //console.log(firstValue, secondValue);

//   //21.결과값 
//   console.log( total );

//   //25. 유틸함수적용
//   clearContents(result);

//   //7.value값 가져오기 > 유틸함수만들어서 함수로 value가져오는걸 만들어보자.
//   // let firstValue = firstInput.value;

//   //23. 기존 - 하이픈 html넣어둔게 붙으니까 얘를 없애주고 넣어라
//   //getNode('.result').textContent = '';

//   //22. html가서 insert.js 추가
//   // 문자로 받았을때 getNode로 받으라는 로직이 있어서 아래처럼 쓴다.
//   // insertLast > 문자열 끝에 위치해라 
//   insertLast(result,total)


// }


// //27.실시간으로 값넣었을때 되게끔하는 함수
// function inputHandler(){
//   let firstValue = +getInputValue(firstInput);
//   let secondValue = +getInputValue(secondInput);
//   let total = sum(firstValue, secondValue)

//   clearContents(result);
//   insertLast(result,total);
// }

// //4. 클릭했을때 핸들러 작동되게
// done.addEventListener('click',handler)


// //26. 실시간으로 값넣었을때 되게끔하는 함수 결과
// firstInput.addEventListener('change',inputHandler)
// //28.
// secondInput.addEventListener('change',inputHandler)