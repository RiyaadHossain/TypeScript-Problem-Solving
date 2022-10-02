/* ________________________________ Problem - 1 ________________________________ 
Chef has AA patties and BB buns. To make 11 burger, Chef needs 11 patty and 11 bun.
Find the maximum number of burgers that Chef can make. 
*/

let totalBurger: number;
const maxBurger = (a: number, b: number): number => {
  return (totalBurger = a < b ? a : b);
};

/* ________________________________ Problem - 2 ________________________________ 
There is a problem worth XX points. Chef finds out that the problem has exactly 1010 test cases. It is known that each test case is worth the same number of points.

Chef passes NN test cases among them. Determine the score Chef will get.
*/
const placementTest = (testPoint: number, passed: number): number => {
  let mark = testPoint / 10;
  return mark * passed;
};
// console.log(placementTest(130, 4));

/* ________________________________ Problem - 3 ________________________________ 
Link: https://www.codechef.com/submit/MY1STCONTEST
*/

let userResult: string;
const newUserResult = (
  newUsers: number,
  unanswered: number,
  answered: number
): string => {
  const getRating = newUsers - unanswered;
  const hightRating = getRating - answered;
  return (userResult = getRating + " " + hightRating);
};

// console.log(newUserResult(10, 3, 2));

/* ________________________________ Problem - 4 ________________________________ 
Link: https://www.codechef.com/submit/PRIZEPOOL
*/

let total: number;
const totalPrize = (firstPrize: number, secondPrize: number): number => {
  return (total = firstPrize * 10 + secondPrize * 90);
};

/* ________________________________ Problem - 5 ________________________________ 
Link: https://www.codechef.com/submit/PRIZEPOOL
*/
let targetAchieved: number = 0;

const practiceChecking = (w1: number, w2: number, w3: number, w4: number) => {
  w1 >= 10 ? (targetAchieved += 1) : null;
  w2 >= 10 ? (targetAchieved += 1) : null;
  w3 >= 10 ? (targetAchieved += 1) : null;
  w4 >= 10 ? (targetAchieved += 1) : null;

  return targetAchieved;
};

// console.log(practiceChecking(10, 9, 13, 32));

/* ________________________________ Problem - 6 ________________________________ 
Link: https://www.codechef.com/submit/PRIZEPOOL
*/
let prettyNumber: number = 0;
const findPretty = (a: number, b: number): number => {
  const numberArray: number[] = [];
  for (let n = a; n <= b; n++) {
    numberArray.push(n);
  }

  numberArray.forEach((number) => {
    const lastDigit = String(number).slice(-1);
    if (lastDigit === "2" || lastDigit === "3" || lastDigit === "9") {
      prettyNumber += 1;
    }
  });

  return prettyNumber;
};

console.log(findPretty(1, 10));

/* ________________________________ Problem - 7 ________________________________ 
Link: https://www.codechef.com/submit/DOLL
*/

const greenLightRedLight = (
  heightOfTwo: number,
  othersHeight: number[]
): number => {
  const peopleKilled = othersHeight.filter((height) => height > heightOfTwo);
  return peopleKilled.length;
};

/* ________________________________ Problem - 8 ________________________________ 
Link: https://www.codechef.com/submit/MANIPULATE
*/

let EzioWin: string;
const manipulate = (ability: number, guard: number): string => {
  EzioWin = ability > guard ? "YES" : "NO";
  return EzioWin;
};

/* ________________________________ Problem - 9 ________________________________ 
Link: https://www.codechef.com/submit/BATTERYLOW
*/

let batteryLow: string;
const showNotification = (charge: number): string => {
  batteryLow = charge <= 15 ? "Yes" : "No";
  return batteryLow;
};

/* ________________________________ Problem - 10 ________________________________ 
Link: https://www.codechef.com/submit/BATTERYLOW
*/

let isPossible: string;
const checkPossibility = (
  teamFirst1: number,
  teamSecond1: number,
  teamFirst2: number,
  teamSecond2: number
): string => {
  isPossible =
    teamFirst1 <= teamFirst2 && teamSecond1 <= teamSecond2
      ? "POSSIBLE"
      : "IMPOSSIBLE";
  return isPossible;
};
