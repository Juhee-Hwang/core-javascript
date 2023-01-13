import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js";

export function showAlert(node, text = '에러입니다.', timeout = 1500) {
  // 입력된 노드값을 node에 넣어주기
  if(typeof node === 'string') node = getNode(node);
  // node에게 text 넣어주기
  node.textContent = text;
  // node에게 class를 줄 것인디 'is-active'을 클래스로 주었다가
  addClass(node, 'is-active');

  // 몇초 뒤에 'is-active'클래스를 제거해줌으로서 잠시만 나타났다가 사라지게 해준다.
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}