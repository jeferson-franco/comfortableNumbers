const solution = require('./comfortableNumbers.js');

test('test 1', () => {
    expect(solution(10, 12)).toBe(2);
});

test('test 2', () => {
    expect(solution(1, 9)).toBe(20);
});

test('test 3', () => {
    expect(solution(13, 13)).toBe(0);
});

test('test 4', () => {
    expect(solution(12, 108)).toBe(707);
});

test('test 5', () => {
    expect(solution(239, 777)).toBe(6166);
});

test('test 6', () => {
    expect(solution(1, 1000)).toBe(11435);
});
