import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger', () => {

  it('TC1: should return the same integer when input is already an integer', () => {
    expect(toInteger(5)).to.equal(5);
  });

  it('TC2: should return 0 when input is 0', () => {
    expect(toInteger(0)).to.equal(0);
  });

  it('TC3: should truncate positive decimal values', () => {
    expect(toInteger(3.2)).to.equal(3);
  });

  it('TC4: should truncate positive decimals with large fractional parts', () => {
    expect(toInteger(9.99)).to.equal(9);
  });

  it('TC5: should truncate negative decimal values toward zero', () => {
    expect(toInteger(-3.2)).to.equal(-3);
  });

  it('TC6: should truncate negative decimals with large fractional parts toward zero', () => {
    expect(toInteger(-9.99)).to.equal(-9);
  });

  it('TC7: should convert numeric string decimals and truncate them', () => {
    expect(toInteger('3.2')).to.equal(3);
  });

  it('TC8: should convert integer strings correctly', () => {
    expect(toInteger('10')).to.equal(10);
  });

  it('TC9: should convert Number.MIN_VALUE to 0', () => {
    expect(toInteger(Number.MIN_VALUE)).to.equal(0);
  });

  it('TC10: should convert Infinity to Number.MAX_VALUE', () => {
    expect(toInteger(Infinity)).to.equal(Number.MAX_VALUE);
  });

  it('TC11: should convert -Infinity to -Number.MAX_VALUE', () => {
    expect(toInteger(-Infinity)).to.equal(-Number.MAX_VALUE);
  });

  it('TC12: should return 0 for non-numeric strings', () => {
    expect(toInteger('abc')).to.equal(0);
  });

  it('TC13: should return 0 for undefined', () => {
    expect(toInteger(undefined)).to.equal(0);
  });

  it('TC14: should return 0 for null', () => {
    expect(toInteger(null)).to.equal(0);
  });

  it('TC15: should return 0 for NaN', () => {
    expect(toInteger(NaN)).to.equal(0);
  });

  it('TC16: should return 0 for empty objects', () => {
    expect(toInteger({})).to.equal(0);
  });

  it('TC17: should return 0 for empty arrays', () => {
    expect(toInteger([])).to.equal(0);
  });

  it('TC18: should convert single-element numeric arrays correctly', () => {
    expect(toInteger([5])).to.equal(5);
  });

});
