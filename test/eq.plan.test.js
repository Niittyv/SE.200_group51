import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq() – Phase 1 plan (self-designed tests)', () => {

  const object = { a: 1 };
  const other = { a: 1 };

  describe('Positive tests', () => {

    it('Identical strings are equal (documented example)', () => {
      expect(eq('a', 'a')).to.equal(true);
    });

    it('Different strings are not equal', () => {
      expect(eq('a', 'b')).to.equal(false);
    });

    it('Identical numbers are equal', () => {
      expect(eq(1, 1)).to.equal(true);
    });

    it('The same object is equal to itself (documented example)', () => {
      expect(eq(object, object)).to.equal(true);
    });

    it('Different objects with the same content are not equal (documented example)', () => {
      expect(eq(object, other)).to.equal(false);
    });

    it('NaN is equal to NaN (documented example)', () => {
      expect(eq(NaN, NaN)).to.equal(true);
    });

    it('Zero and negative zero are equal', () => {
      expect(eq(0, -0)).to.equal(true);
    });

    it('Floating-point numbers are compared exactly, without tolerance', () => {
      expect(eq(0.1 + 0.2, 0.3)).to.equal(false);
    });

  });

  describe('Negative tests', () => {

    it('A string is not equal to its object wrapper (documented example)', () => {
      expect(eq('a', Object('a'))).to.equal(false);
    });

    it('A number is not equal to the same number as a string', () => {
      expect(eq(1, '1')).to.equal(false);
    });

    it('The result does not depend on argument order', () => {
      expect(eq('1', 1)).to.equal(false);
    });

    it('Zero is not equal to an empty string', () => {
      expect(eq(0, '')).to.equal(false);
    });

    it('Zero is not equal to false', () => {
      expect(eq(0, false)).to.equal(false);
    });

    it('null is not equal to undefined', () => {
      expect(eq(null, undefined)).to.equal(false);
    });

  });

});
