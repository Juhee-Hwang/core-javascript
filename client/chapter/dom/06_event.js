/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const first = getNode('.first');
const second = getNode('.second');
const ground = getNode('.ground');
const ball = getNode('.ball');

function handler() {
  console.log('hit~! 맞아땅');
  // 클릭 시 world 없어지게
  // css('.second','display','none');
}


ground.addEventListener('click',function (e) {
  console.log(e.offsetX, e.offsetY);
  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px, ${e.offsetY - ball.offsetHeight / 2}px)`;
})

// 컴퓨터 성능 저하에 진짜 큰 원인이 mousemove, resize
// mousemove 함수 예시
// ground.addEventListener('mousemove', function (e) {
//   console.log(e.offsetX, e.offsetY);

//   let posX = e.offsetX;
//   let posY = e.offsetY;

//   insertLast(ground, emotion);
// })

first.addEventListener('click', handler);

// function bindEvent(node, type, handler) {
//   if(typeof node === 'string'){
//     node = getNode(node);
//   }

//   if(!(/mouseenter|click|mousemove|mouseleave/g.test(type))){
//       typeError('bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.')
//   }

//   node.addEventListener(type, handler);

//   return () => node.removeEventListener(type, handler)
// }

// const off = bindEvent('.first', 'click', handler);

// bindEvent('.first','click',handler);

// second.addEventListener('click',function () {
//   first.removeEventListener('click',handler)
// })
