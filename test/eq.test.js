import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq()', () => {

  describe('Positive test cases', () => {

    it('should return true for equal numbers', () => {
      expect(eq(10, 10)).to.be.true;
    });

    it('should return true for equal strings', () => {
      expect(eq('product', 'product')).to.be.true;
    });

    it('should return true for equal booleans', () => {
      expect(eq(true, true)).to.be.true;
    });

    it('should return true for null compared with null', () => {
      expect(eq(null, null)).to.be.true;
    });

    it('should return true for undefined compared with undefined', () => {
      expect(eq(undefined, undefined)).to.be.true;
    });

    it('should return true for NaN compared with NaN', () => {
      expect(eq(NaN, NaN)).to.be.true;
    });

    it('should return true when number and numeric string are compared', () => {
      expect(eq(1, '1')).to.be.true;
    });

    it('should return true when false and 0 are compared', () => {
      expect(eq(false, 0)).to.be.true;
    });

    it('should return true when comparing the same object reference', () => {
      const obj = { id: 1 };
      expect(eq(obj, obj)).to.be.true;
    });

    it('should return true when comparing empty array and empty string', () => {
      expect(eq([], '')).to.be.true;
    });

  });

  describe('Negative test cases', () => {

    it('should return false for different numbers', () => {
      expect(eq(10, 20)).to.be.false;
    });

    it('should return false for different strings', () => {
      expect(eq('apple', 'orange')).to.be.false;
    });

    it('should return false for different booleans', () => {
      expect(eq(true, false)).to.be.false;
    });

    it('should return false for different object references with same content', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 1 };

      expect(eq(obj1, obj2)).to.be.false;
    });

    it('should return false for different array references with same content', () => {
      expect(eq([1, 2], [1, 2])).to.be.false;
    });

    it('should return false for primitive string and String object', () => {
      expect(eq('a', Object('a'))).to.be.false;
    });

    it('should return false when only one value is NaN', () => {
      expect(eq(NaN, 5)).to.be.false;
    });

    it('should return false for undefined and 0', () => {
      expect(eq(undefined, 0)).to.be.false;
    });

    it('should return false for object and null', () => {
      expect(eq({}, null)).to.be.false;
    });

  });

  describe('E-commerce business scenarios', () => {

    it('should match product ID entered as string with numeric product ID', () => {
      expect(eq('1001', 1001)).to.be.true;
    });

    it('should match identical product categories', () => {
      expect(eq('Electronics', 'Electronics')).to.be.true;
    });

    it('should not match different product categories', () => {
      expect(eq('Electronics', 'Books')).to.be.false;
    });

    it('should match empty search values', () => {
      expect(eq('', '')).to.be.true;
    });

    it('should treat NaN values as equal during validation', () => {
      expect(eq(NaN, NaN)).to.be.true;
    });

    it('should not treat different product objects as equal', () => {
      const productA = {
        id: 1001,
        name: 'Laptop'
      };

      const productB = {
        id: 1001,
        name: 'Laptop'
      };

      expect(eq(productA, productB)).to.be.false;
    });

  });

});
