
function addClass(node,className){

  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string'){
    typeError('addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }

  node.classList.add(className)

}

// 변경하기 : 대상의 클래스를 지운다.
function removeClass(node,className){
  if(typeof node === 'string') node = getNode(node);

  if(!className){
    node.className = ''
    return;
  }

  if(typeof className !== 'string'){
    typeError('removeClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }

  node.classList.remove(className)  
}


function toggleClass(node,className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    typeError('toggleClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }

  node.classList.toggle(className)
}
