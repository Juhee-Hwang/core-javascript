import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from './typeOf.js';

const first = getNode('.first');
// const second = getNode('.second');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}


delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    delay(()=>{
      first.style.top = '0px';
    })
    first.style.transform = 'rotate(360deg)';
  })
})


/*
delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)'
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
})
*/

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공했습니다.',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}) {

  let config = {...defaultOptions} // 얕은 복사 진행
  // let config = Object.assign({}, defaultOptions) // 얕은 복사 진행

  if(isNumber(options)){
    config.timeout = options;
  }

  // 객체 합성 mixin
  if(isObject(options)){
    config = {...config, ...options};
  }

  const {shouldReject, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
      // if(!shouldReject){
      //   resolve('성공');
      // }else{
      //   reject('실패!');

      // }
    }, timeout);
  })
}

delayP({
  data: '안녕',
}).then((res) => {
  console.log(res); // 진짜 성공
})


/*
function delayP(shouldReject = false, timeout = 1000, data = '성공했습니다.', errorMessage = '알 수 없는 오류가 발생했습니다.') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
      // if(!shouldReject){
      //   resolve('성공');
      // }else{
      //   reject('실패!');

      // }
    }, timeout);
  })
}

delayP(false, 1000, '진짜 성공', '오류가 발생했다!!!').then((res) => {
  console.log(res);
})

// delayP()
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })
*/

// async await
/* function delayA() {
  return new Promise((resolve, reject) => {
    resolve('완료')
  })
} */
// 같은 역할 -> 갓 async
async function delayA(){
  return '완료'
}
// let result = delayA().then((res) => {console.log(res);});
let result = await delayA(); // 값이 담긴다!!!
console.log(result);

// await을 안 쓰면 promise 프로퍼티가 나온다.
// await을 쓰는 것은 resolve를 안만들기 위해서! return문이 필요 없어진다!

// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await : 1. promise가 반환하는 result를 가져오기
//         2. 코드 실행 흐름 제어

/*
async function 라면끓이기() {
  try {
    await delayP()
    first.style.top = '-100px';

    await delayP()
    first.style.transform = 'rotate(360deg)';

    await delayP()
    first.style.top = '0px';

    await delayP()
    console.log('계란 넣기');

    throw new Error('계란 껍질이 들어가버렸다!')
    await delayP()
    console.log('그릇에담기');
  } catch (err) {
    console.log(err);
  }
}

라면끓이기()
*/