function solution(l, r) {
    var pairs = 0;
    for (i = l; i <= r; i++) {
        for (j = i + 1; j <= r; j++) {
            if (i + sumDigits(i) >= j && j - sumDigits(j) <= i) {
                pairs++;
            }
        }
    }
    return pairs;
}

function sumDigits(n) {
    var sum = 0;
    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test squareDigitsSequence

// alternative solution
// function solution(l, r) {
//     function addDigits(num) {
//         let sum = 0;

//         while (num) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }
//         return sum;
//     }

//     function comfortable(a, b) {
//         return a - addDigits(a) <= b && b <= a + addDigits(a);
//     }

//     let numbers = 0;
//     for (let a = l; a < r; a++) {
//         for (let b = a + 1; b <= r; b++) {
//             if (comfortable(a, b) && comfortable(b, a)) numbers++;
//         }
//     }
//     return numbers;
// }
