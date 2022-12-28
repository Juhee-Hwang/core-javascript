/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

/* eslint no-unused-vars:'off' */
let admin;
let nameAdmin;

nameAdmin = 'john';
admin = nameAdmin;

console.log(admin);

let ourPlanetName = 'Earth';
let currentUserName = 'Juhee Hwang';

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기 - 변
let calcProductQuantity;
// - 구매 제품 가격의 총 합 - 변
let totalProductPrice;
// - 1년 기준 일(day)자 수 - 상
const DAY_OF_YEAR = 365;
// - 구매 결제 여부 - 변
let isPaid = true;
// 가지고 있냐고 물어볼 때는?
let hasClassName = true;
// - 구매 결제 내역 - 변
let payHistory;
// - 브랜드 접두사 - 상
const BRAND_PREFIX = 'EUID';
// - 오늘의 운세 - 변
let fortuneOfToday;
// - 상품 정보 - 변
let productInfo = '이듐짱!';

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */

const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';


/* -------------------------------------------------------------------------- */
/*                             Lexical Environment                            */
/* -------------------------------------------------------------------------- */


var nickName = 'tiger';
let nickName2 = 'tiger';