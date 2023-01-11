/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log( first.className = 'hola' );
// first.classList.add('hello')
// first.classList.remove('hello')
// first.classList.toggle('hello')
// console.log( first.classList.contains('is-active') );


addClass('.first','aaa')  // <span class="first hello">hello</span>

removeClass('.first','aaa')


// removeClass('.first','hello')
// toggleClass('.first','hello')


/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = 'red';
console.log(first.style.fontSize);


/* 계산된 스타일 읽기 ------------------------------------------------------- */

let size = getComputedStyle(first).fontSize
console.log(size);

// 자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 . 사용 x 
// [ ] 각괄호 표기법 
function getCss(node,prop){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(prop in document.body.style)){
    SyntaxError('getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  return getComputedStyle(node)[prop]

}

function setCss(node, prop, value) {
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(prop in document.body.style)){
    SyntaxError('getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  if(!value){
    SyntaxError('setCSS 함수의 세 번째 인자는 필수값입니다.')
  }

  node.style[prop] = value;
}

function css(node, prop, value) {
  return !value ? getCss(node, prop) : setCss(node, prop, value)
}

css('.first','font-size','100px'); //set
css('.first','font-size'); // get

                          // 정확한 css 속성인지 ?
// console.log( getCss('.first','font-size') );

  // 
// setCss('.first','color','red')  // red

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
