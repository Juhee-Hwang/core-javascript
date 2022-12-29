/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

let firstValue = prompt("덧셈하 첫 번째 숫자를 입력해주세요.", 1);
let secondValue = prompt("덧셈하 두 번째 숫자를 입력해주세요.", 2);

console.log(firstValue + secondValue);


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a + b;

// 삼항 연산자
// let ternary = 10 > 5 ? 'big':'small';  // 이렇게 하면 늘  10은 5보다 커서 빨간줄이 그어진다.
let ternary = Math.random() > 0.5 ? 'big':'small';

// 산술 연산자: 덧셈
let addition = a + b;
// 산술 연산자: 뺄셈
let subtraction = a - b;

// 산술 연산자: 곱셈
let multiplication = a * b;

// 산술 연산자: 나눗셈
let division = a / b;

// 산술 연산자: 나머지
let remainder = a % b;

// 산술 연산자: 거듭 제곱
let power = a ^ b;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];

let newArray = [1,2,3].concat(4,5,6) // [1,2,3,4,5,6]
console.log(newArray);

let firstArray = [1,2,3];
let secondArray = [4,5,6];
firstArray.concat(secondArray);

// 전개연산자 (spread operator)
let newArray2 = [...firstArray, ...secondArray]; // [1,2,3,4,5,6]
console.log(newArray2);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; 
// 1. 10 % 4 = 2
// 2. 10 /= 2 = 5
// 3. 5**3 = 125