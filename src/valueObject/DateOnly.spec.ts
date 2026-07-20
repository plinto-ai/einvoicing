import DateOnly from './DateOnly';

describe('DateOnly', () => {
  test('accepts ISO 8601 dates', () => {
    expect(DateOnly.create('2026-06-30').toPrimitive()).toBe('2026-06-30');
  });

  test('strips a timezone suffix allowed by xsd:date', () => {
    expect(DateOnly.create('2026-06-30+02:00').toPrimitive()).toBe(
      '2026-06-30',
    );
    expect(DateOnly.create('2026-06-30-05:00').toPrimitive()).toBe(
      '2026-06-30',
    );
    expect(DateOnly.create('2026-06-30Z').toPrimitive()).toBe('2026-06-30');
  });

  test('normalises day-first dates to ISO 8601', () => {
    expect(DateOnly.create('17-06-2026').toPrimitive()).toBe('2026-06-17');
  });

  test('trims surrounding whitespace', () => {
    expect(DateOnly.create(' 2026-06-30 ').toPrimitive()).toBe('2026-06-30');
  });

  test('rejects unrecognised formats', () => {
    expect(() => DateOnly.create('30/06/2026')).toThrow('Invalid date format');
    expect(() => DateOnly.create('2026-06')).toThrow('Invalid date format');
    expect(() => DateOnly.create('not a date')).toThrow('Invalid date format');
  });
});
