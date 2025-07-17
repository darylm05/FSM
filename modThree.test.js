import { modThree } from './modThree.js';

describe('GIVEN the modulo three function is executed', () => {
    it('WHEN empty string THEN the output is 0', () => {
        const output = modThree('');
        expect(output).toEqual(0);
    });
    
    it('WHEN 0 is the binary string THEN the output is 0', () => {
        const output = modThree('0');
        expect(output).toEqual(0);
    });
    
    it('WHEN 1 is the binary string THEN the output is 1', () => {
        const output = modThree('1');
        expect(output).toEqual(1);
    });
    
    it('WHEN 01 is the binary string THEN the output is 1', () => {
        const output = modThree('01');
        expect(output).toEqual(1);
    });

    it('WHEN 10 is the binary string THEN the output is 2', () => {
        const output = modThree('10');
        expect(output).toEqual(2);
    });
    
    it('WHEN 11 is the binary string THEN the output is 0', () => {
        const output = modThree('11');
        expect(output).toEqual(0);
    });

    it('WHEN 001 is the binary string THEN the output is 1', () => {
        const output = modThree('001');
        expect(output).toEqual(1);
    });

    it('WHEN 010 is the binary string THEN the output is 2', () => {
        const output = modThree('010');
        expect(output).toEqual(2);
    });

    it('WHEN 011 is the binary string THEN the output is 0', () => {
        const output = modThree('011');
        expect(output).toEqual(0);
    });

    it('WHEN 100 is the binary string THEN the output is 1', () => {
        const output = modThree('100');
        expect(output).toEqual(1);
    });

    it('WHEN 101 is the binary string THEN the output is 2', () => {
        const output = modThree('101');
        expect(output).toEqual(2);
    });

    it('WHEN 110 is the binary string THEN the output is 0', () => {
        const output = modThree('110');
        expect(output).toEqual(0);
    });

    it('WHEN 111 is the binary string THEN the output is 1', () => {
        const output = modThree('111');
        expect(output).toEqual(1);
    });

    it('WHEN 0001 is the binary string THEN the output is 1', () => {
        const output = modThree('0001');
        expect(output).toEqual(1);
    });

    it('WHEN 0010 is the binary string THEN the output is 2', () => {
        const output = modThree('0010');
        expect(output).toEqual(2);
    });

    it('WHEN 0011 is the binary string THEN the output is 0', () => {
        const output = modThree('0011');
        expect(output).toEqual(0);
    });

    it('WHEN 0100 is the binary string THEN the output is 1', () => {
        const output = modThree('0100');
        expect(output).toEqual(1);
    });

    it('WHEN 0101 is the binary string THEN the output is 2', () => {
        const output = modThree('0101');
        expect(output).toEqual(2);
    });

    it('WHEN 0110 is the binary string THEN the output is 0', () => {
        const output = modThree('0110');
        expect(output).toEqual(0);
    });

    it('WHEN 0111 is the binary string THEN the output is 1', () => {
        const output = modThree('0111');
        expect(output).toEqual(1);
    });

    it('WHEN 1000 is the binary string THEN the output is 2', () => {
        const output = modThree('1000');
        expect(output).toEqual(2);
    });

    it('WHEN 1001 is the binary string THEN the output is 0', () => {
        const output = modThree('1001');
        expect(output).toEqual(0);
    });

    it('WHEN 1010 is the binary string THEN the output is 1', () => {
        const output = modThree('1010');
        expect(output).toEqual(1);
    });

    it('WHEN 1011 is the binary string THEN the output is 2', () => {
        const output = modThree('1011');
        expect(output).toEqual(2);
    });

    it('WHEN 1100 is the binary string THEN the output is 0', () => {
        const output = modThree('1100');
        expect(output).toEqual(0);
    });

    it('WHEN 1101 is the binary string THEN the output is 1', () => {
        const output = modThree('1101');
        expect(output).toEqual(1);
    });

    it('WHEN 1110 is the binary string THEN the output is 2', () => {
        const output = modThree('1110');
        expect(output).toEqual(2);
    });

    it('WHEN 1111 is the binary string THEN the output is 0', () => {
        const output = modThree('1111');
        expect(output).toEqual(0);
    });

    it('WHEN invalid input THEN the output is undefined', () => {
        const output = modThree('2');
        expect(output).toBeUndefined();
    });
});