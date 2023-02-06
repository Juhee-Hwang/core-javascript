/* global gsap */

import { 
  tiger,
  getNode,
  renderUserCard,
  changeColor,
  renderSpinner,
  delayP,
  renderEmptyCard,
  attr
} from "./lib/index.js"

// rendingUserList 함수 만들기
// ajax (tiger) get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

  // 1. userList.js로 간다
  // 2. renderUserCard 함수 만들기
  // 3. 만들어진 함수 안에 createUserCard를 던지고
  // 4. 실제 renderUserCard함수를 사용했을 때 랜더링이 잘 될 수 있도록

const userCardContainer = getNode('.user-card-inner');

async function rendingUserList() {

  renderSpinner(userCardContainer);

  try{
    await delayP(2000)

    getNode('.loadingSpinner').remove();
        
    let response = await tiger.get('https://jsonplaceholder.typicode.com/users');
    
    let userData = response.data;
    userData.forEach((data) => {
      renderUserCard(userCardContainer, data)
    })
    changeColor('.user-card')
  
    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0,
      opacity:1,
      duration:1.5,
      stagger:0.2,
      // x:100,
      // rotation:360,
      // duration:3,
      // stagger:{
      //   each: 0.1,
      //   from: 'edges'
      // }
    })
  }catch(err){
    // console.log(err);
    renderEmptyCard(userCardContainer);
  }

  // 객체 하나만 받아서 랜더링

  // renderUserCard(userCardContainer, userData)
  // insertLast(userCardContainer,createUserCard(userData));
  
}

rendingUserList()

// 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요.

// 이벤트는 항상 부모한테 걸자!! 버블버블링!

function handler(e) {
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');
  
  if(!deleteButton || !article) return;

  let id = attr(article, 'data-index').slice(5);

  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = "";
    rendingUserList();
  });

}

userCardContainer.addEventListener('click', handler)