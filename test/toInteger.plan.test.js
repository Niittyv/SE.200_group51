import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger() – Phase 1 plan (self-designed tests)', () => {

  describe('Positive tests', () => {

    it('Positive non-integer is truncated (documented example)', () => {
      expect(toInteger(3.2)).to.equal(3);
    });

    it('Positive non-integer is truncated, not rounded', () => {
      expect(toInteger(3.7)).to.equal(3);
    });

    it('Positive integer is returned unchanged', () => {
      expect(toInteger(5)).to.equal(5);
    });

    it('Negative integer is returned unchanged', () => {
      expect(toInteger(-5)).to.equal(-5);
    });

    it('Infinity is replaced by the largest finite number (documented example)', () => {
      expect(toInteger(Infinity)).to.equal(Number.MAX_VALUE);
    });

    // [A1]
    it('-Infinity is replaced by the smallest finite number', () => {
      expect(toInteger(-Infinity)).to.equal(-Number.MAX_VALUE);
    });

    it('Decimal numeric string is converted and truncated (documented example)', () => {
      expect(toInteger('3.2')).to.equal(3);
    });

    // [A2]
    it("String in scientific notation ('1e3' = 1000) is converted", () => {
      expect(toInteger('1e3')).to.equal(1000);
    });

    // [A2]
    it("String in hexadecimal notation ('0x1F' = 31) is converted", () => {
      expect(toInteger('0x1F')).to.equal(31);
    });

    it('Boundary: zero is returned unchanged', () => {
      expect(toInteger(0)).to.equal(0);
    });

    it('Boundary: smallest positive number becomes zero (documented example)', () => {
      expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    });

    it('Boundary: largest finite number is returned unchanged', () => {
      expect(toInteger(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
    });

  });

  describe('Negative tests', () => {

    // [A2]
    it('Numeric string with surrounding whitespace is still converted', () => {
      expect(toInteger(' 3.2 ')).to.equal(3);
    });

    // [A2]
    it('Numeric string with a decimal comma returns 0', () => {
      expect(toInteger('1,5')).to.equal(0);
    });

    it('Non-numeric string returns 0', () => {
      expect(toInteger('abc')).to.equal(0);
    });

    it('Empty string returns 0', () => {
      expect(toInteger('')).to.equal(0);
    });

    it('NaN returns 0', () => {
      expect(toInteger(NaN)).to.equal(0);
    });

    it('null returns 0', () => {
      expect(toInteger(null)).to.equal(0);
    });

    it('undefined returns 0', () => {
      expect(toInteger(undefined)).to.equal(0);
    });

    // [A3]
    it('Boolean true converts to 1', () => {
      expect(toInteger(true)).to.equal(1);
    });

    // [A3]
    it('Boolean false converts to 0', () => {
      expect(toInteger(false)).to.equal(0);
    });

    // [A4]
    it('Plain object returns 0 without error', () => {
      expect(toInteger({})).to.equal(0);
    });

    // [A4]
    it('Empty array returns 0 without error', () => {
      expect(toInteger([])).to.equal(0);
    });

    // [A4]
    it('Single-element numeric array converts to that number', () => {
      expect(toInteger([5])).to.equal(5);
    });

    // [A4]
    it('Multi-element array returns 0 without error', () => {
      expect(toInteger([1, 2])).to.equal(0);
    });

    // [A5]
    it('Symbol returns 0 without throwing', () => {
      expect(toInteger(Symbol())).to.equal(0);
    });

  });

});
