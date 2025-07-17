import { modThree } from './modThree.js';

describe('GIVEN the modulo three function is executed', () => {
    const cases = [
        { input: '', expected: 0 },
        { input: '0', expected: 0 },
        { input: '1', expected: 1 },
        { input: '01', expected: 1 },
        { input: '10', expected: 2 },
        { input: '11', expected: 0 },
        { input: '001', expected: 1 },
        { input: '010', expected: 2 },
        { input: '011', expected: 0 },
        { input: '100', expected: 1 },
        { input: '101', expected: 2 },
        { input: '110', expected: 0 },
        { input: '111', expected: 1 },
        { input: '0001', expected: 1 },
        { input: '0010', expected: 2 },
        { input: '0011', expected: 0 },
        { input: '0100', expected: 1 },
        { input: '0101', expected: 2 },
        { input: '0110', expected: 0 },
        { input: '0111', expected: 1 },
        { input: '1000', expected: 2 },
        { input: '1001', expected: 0 },
        { input: '1010', expected: 1 },
        { input: '1011', expected: 2 },
        { input: '1100', expected: 0 },
        { input: '1101', expected: 1 },
        { input: '1110', expected: 2 },
        { input: '1111', expected: 0 },
    ];

    it.each(cases)(`WHEN the binary string is '$input' THEN the output is $expected`, ({ input, expected }) => {
        const output = modThree(input);
        expect(output).toEqual(expected);
    });

    it('WHEN invalid input THEN the output is undefined', () => {
        const output = modThree('2');
        expect(output).toBeUndefined();
    });
});