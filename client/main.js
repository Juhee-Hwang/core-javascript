import { xhrData,insertLast, delayP, tiger } from "./lib/index.js";

/*
xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  (res) => {
    insertLast('body', JSON.stringify(res))
  },
  (err) => {
    insertLast('body', '데이터 로딩에 실패하였습니다.')
  }
)
*/


async function render() {
  await delayP (2000);
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1')

  console.log(response.data);
}