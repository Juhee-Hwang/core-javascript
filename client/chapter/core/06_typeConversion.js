/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> '2022'
const YEAR = 2022;
console.log(String(YEAR));

// undefined -> 'undefined'
// null -> 'null'
let days = null;
console.log(String(days));
console.log(String(undefined));

// boolean
let isKind = true;
console.log(isKind + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed -> NaN
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean
// +1 *1 /1 처럼 숫자 앞에 연산기호를 붙이면 숫자가 된다.
let cutie = false;
console.log(+cutie);

// string
let num = '     123      '
console.log(num * 1);

// numeric string
let width = '320px';
console.log(parseInt(width, 10)); // 원하는 정수만 쏙 빼서 출력해줌.
width = '492.3452px';
console.log(parseFloat(width, 10)); // 여기는 부동소수점까지 보여줌

/* 
Number 함수에 문자 + 숫자 넣으면 NaN나옴
parseInt 함수에 문자 + 숫자 넣으면 정수만 파싱해서 출력해준다
*/

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean('')); 