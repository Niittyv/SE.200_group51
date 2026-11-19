import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq()', () => {

  // TC01
  it('TC01 - should return true for identical numbers', () => {
    expect(eq(10, 10)).to.be.true;
  });

  // TC02
  it('TC02 - should return true for identical strings', () => {
    expect(eq('product', 'product')).to.be.true;
  });

  // TC03
  it('TC03 - should return true for identical booleans', () => {
    expect(eq(true, true)).to.be.true;
  });

  // TC04
  it('TC04 - should return true for null and null', () => {
    expect(eq(null, null)).to.be.true;
  });

  // TC05
  it('TC05 - should return true for undefined and undefined', () => {
    expect(eq(undefined, undefined)).to.be.true;
  });

  // TC06
  it('TC06 - should return true for NaN and NaN', () => {
    expect(eq(NaN, NaN)).to.be.true;
  });

  // TC07
  it('TC07 - should return true for number and equivalent numeric string', () => {
    expect(eq(1, '1')).to.be.true;
  });

  // TC08
  it('TC08 - should return true for false and 0', () => {
    expect(eq(false, 0)).to.be.true;
  });

  // TC09
  it('TC09 - should return true for the same object reference', () => {
    const obj = { id: 1 };
    expect(eq(obj, obj)).to.be.true;
  });

  // TC10
  it('TC10 - should return true for empty array and empty string', () => {
    expect(eq([], '')).to.be.true;
  });

  // TC11
  it('TC11 - should return false for different numbers', () => {
    expect(eq(10, 20)).to.be.false;
  });

  // TC12
  it('TC12 - should return false for different strings', () => {
    expect(eq('apple', 'orange')).to.be.false;
  });

  // TC13
  it('TC13 - should return false for different booleans', () => {
    expect(eq(true, false)).to.be.false;
  });

  // TC14
  it('TC14 - should return true for null and undefined', () => {
    expect(eq(null, undefined)).to.be.true;
  });

  // TC15
  it('TC15 - should return false for different object instances with identical content', () => {
    const a = { id: 1 };
    const b = { id: 1 };

    expect(eq(a, b)).to.be.false;
  });

  // TC16
  it('TC16 - should return false for different array instances with identical content', () => {
    expect(eq([1, 2], [1, 2])).to.be.false;
  });

  // TC17
  it('TC17 - should return false for primitive string and String object', () => {
    expect(eq('a', Object('a'))).to.be.false;
  });

  // TC18
  it('TC18 - should return false when only one value is NaN', () => {
    expect(eq(NaN, 5)).to.be.false;
  });

  // TC19
  it('TC19 - should return false for undefined and 0', () => {
    expect(eq(undefined, 0)).to.be.false;
  });

  // TC20
  it('TC20 - should return false for object and null', () => {
    expect(eq({}, null)).to.be.false;
  });

  // EC01
  it('EC01 - should match product ID string input to numeric product ID', () => {
    expect(eq('1001', 1001)).to.be.true;
  });

  // EC02
  it('EC02 - should match identical product categories', () => {
    expect(eq('Electronics', 'Electronics')).to.be.true;
  });

  // EC03
  it('EC03 - should not match different product categories', () => {
    expect(eq('Electronics', 'Books')).to.be.false;
  });

  // EC04
  it('EC04 - should return true for empty search field comparison', () => {
    expect(eq('', '')).to.be.true;
  });

  // EC05
  it('EC05 - should treat NaN values as equal for validation checks', () => {
    expect(eq(NaN, NaN)).to.be.true;
  });

  // EC06
  it('EC06 - should not treat different product objects as equal even if contents match', () => {
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
