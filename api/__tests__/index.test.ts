import api, { http } from '../';

describe('api', () => {
  const testObj = { test: true };

  beforeEach(() => {
    jest.spyOn(http, 'get').mockResolvedValueOnce({ data: [testObj] });
  });

  it('should getDefinition', async () => {
    expect.hasAssertions();

    await expect(api.getDefinition('test')).resolves.toStrictEqual(testObj);
  });

  it('should getSynonyms', async () => {
    expect.hasAssertions();

    await expect(api.getSynonyms('test')).resolves.toStrictEqual([testObj]);
  });
});
