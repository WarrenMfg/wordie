import formatWord from '../formatWord';

describe('formatWord', () => {
  it('should formatWord', () => {
    expect.hasAssertions();

    expect(formatWord('test')).toBe('Test');
  });
});
