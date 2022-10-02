"use strict";
/* ________________________________ Problem - 1 ________________________________
Chef has AA patties and BB buns. To make 11 burger, Chef needs 11 patty and 11 bun.
Find the maximum number of burgers that Chef can make.
*/
let totalBurger;
const maxBurger = (a, b) => {
    return (totalBurger = a < b ? a : b);
};
/* ________________________________ Problem - 2 ________________________________
There is a problem worth XX points. Chef finds out that the problem has exactly 1010 test cases. It is known that each test case is worth the same number of points.

Chef passes NN test cases among them. Determine the score Chef will get.
*/
const placementTest = (testPoint, passed) => {
    let mark = testPoint / 10;
    return mark * passed;
};
// console.log(placementTest(130, 4));
/* ________________________________ Problem - 3 ________________________________
Link: https://www.codechef.com/submit/MY1STCONTEST
*/
let userResult;
const newUserResult = (newUsers, unanswered, answered) => {
    const getRating = newUsers - unanswered;
    const hightRating = getRating - answered;
    return (userResult = getRating + " " + hightRating);
};
// console.log(newUserResult(10, 3, 2));
/* ________________________________ Problem - 4 ________________________________
Link: https://www.codechef.com/submit/PRIZEPOOL
*/
let total;
const totalPrize = (firstPrize, secondPrize) => {
    return (total = firstPrize * 10 + secondPrize * 90);
};
/* ________________________________ Problem - 5 ________________________________
Link: https://www.codechef.com/submit/PRIZEPOOL
*/
let targetAchieved = 0;
const practiceChecking = (w1, w2, w3, w4) => {
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
let prettyNumber = 0;
const findPretty = (a, b) => {
    const numberArray = [];
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
const greenLightRedLight = (heightOfTwo, othersHeight) => {
    const peopleKilled = othersHeight.filter((height) => height > heightOfTwo);
    return peopleKilled.length;
};
/* ________________________________ Problem - 8 ________________________________
Link: https://www.codechef.com/submit/MANIPULATE
*/
let EzioWin;
const manipulate = (ability, guard) => {
    EzioWin = ability > guard ? "YES" : "NO";
    return EzioWin;
};
/* ________________________________ Problem - 9 ________________________________
Link: https://www.codechef.com/submit/BATTERYLOW
*/
let batteryLow;
const showNotification = (charge) => {
    batteryLow = charge <= 15 ? "Yes" : "No";
    return batteryLow;
};
/* ________________________________ Problem - 10 ________________________________
Link: https://www.codechef.com/submit/BATTERYLOW
*/
let isPossible;
const checkPossibility = (teamFirst1, teamSecond1, teamFirst2, teamSecond2) => {
    isPossible =
        teamFirst1 <= teamFirst2 && teamSecond1 <= teamSecond2
            ? "POSSIBLE"
            : "IMPOSSIBLE";
    return isPossible;
};
