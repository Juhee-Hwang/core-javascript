import { typeError } from '../error/typeError.js';
/* 
  readyState
  0 : uninitialized // 초기화
  1 : loading // 로딩
  2 : loaded // 로딩 완료된
  3 : interactive // 인터렉티브
  4 : complete // 완료
*/


// function xhrData(options) {

export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin' : '*',
  },
} = {}) {

  // 받은 객체를 구조분해할당으로 받아오기
  // const {method, url, body} = options
  
  const xhr = new XMLHttpRequest();
  
  // ⭐️ 이거끼리 세트! open(), send() 무조건 세트
  // ⭐️ 비동기 통신 오픈
  xhr.open(method, url)

  // 이걸 쓰는 이유는 headers 객체를 -> 배열로 -> foEach로 구조분해할당 -> key, value 값 받기
  /*Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });
  */
  
  
  // 객체 구조 분해 할당  
  xhr.addEventListener('readystatechange',()=>{
    const {status,readyState,response} = xhr; // 객체 구조 분해 할당 


    if(status >= 200 && status < 400){
      if(readyState === 4){
        console.log('통신 성공');
        
        onSuccess(JSON.parse(response));
      }  
    }else{
      // console.error();
      onFail('통신 실패')
    }
  })
  
  // ⭐️ 서버에 요청
  xhr.send(JSON.stringify(body));
}

// shorthand property

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}

/* 
xhrData.delete(
  'https://jsonplaceholder.typicode.com/users/3',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)

 */

/*
xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  (result)=>{
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
)
*/

/*
xhrData.post(
  'https://jsonplaceholder.typicode.com/users',
  {
    "name": "MESSI",
    "username": "GOAT",
    "email": "goat@messi.psg",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  (result)=>{
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
)
*/

/*
xhrData({
  url : 'https://jsonplaceholder.typicode.com/users/1',
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (err) => {
    console.error(err);
  }
})
*/

// 객체 받아서 바로 넣기
// xhrData({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   method : 'GET',
//   body: null,
//   headers: {
//     'Content-Type' : 'application/json'
//   }
// })

const defaultOptions = {
  url:'',
  method:'GET',
  headers:{
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body:null
}

export function xhrPromise(options = {}){
  


  const xhr = new XMLHttpRequest();




  const {method,url,body,headers} = Object.assign({},defaultOptions,options);




  if(!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.');
              
  xhr.open(method,url);


  xhr.send(body ? JSON.stringify(body) : null)
  
  return new Promise((resolve, reject) => {


    xhr.addEventListener('readystatechange',()=>{
      const {status, readyState, response} = xhr;


      if(status >= 200 && status < 400){
         if(readyState === 4){
           resolve(JSON.parse(response));
         }
      }else{
        reject('에러입니다.');
      }
    })
  })
}


/*
xhrPromise({url:'https://jsonplaceholder.typicode.com/users/1'})
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})
*/

xhrPromise.get = (url) =>{
  return xhrPromise({
    url
  })
}

xhrPromise.post = (url, body) =>{
  return xhrPromise({
    url,
    body,
    method:'POST'
  })
}

xhrPromise.put = (url, body) =>{
  return xhrPromise({
    url,
    body,
    method:'PUT'
  })
}

xhrPromise.delete = (url) =>{
  return xhrPromise({
    url,
    method:'DELETE'
  })
}

/*
xhrPromise
.get('www.naver.com')
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
*/