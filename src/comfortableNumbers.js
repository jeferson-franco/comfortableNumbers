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
