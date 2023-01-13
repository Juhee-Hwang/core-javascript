export function isNumericString (data) {
  data = Number(data); // 숫자인 척 하는 문자가 숫자로 바뀌었다. 숫자는 isNaN 안에 넣으면 false (Not a Number냐고 물엇는데 Number니까)
  return !isNaN(data) // !false 하면 true니까 숫자인척하는 문자.
}