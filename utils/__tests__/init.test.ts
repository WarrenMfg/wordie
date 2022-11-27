import init from '../init';
import alert from '../alert';
import api from '../../api';
import { Definition } from '../../types/api.types';

describe('init', () => {
  let warning: jest.Mock;

  beforeEach(() => {
    jest.spyOn(process.stdout, 'write').mockImplementationOnce(jest.fn());

    warning = jest.fn();
    jest.spyOn(alert, 'warning').mockImplementationOnce(warning);
  });

  it('should handle no arg', async () => {
    expect.hasAssertions();

    await init();

    expect(warning).toHaveBeenCalledTimes(1);
  });

  it('should handle no definitions', async () => {
    expect.hasAssertions();

    jest
      .spyOn(api, 'getDefinition')
      .mockResolvedValueOnce({ defs: [] as string[] } as Definition);

    await init('test');

    expect(warning).toHaveBeenCalledTimes(1);
  });

  it('should init', async () => {
    expect.hasAssertions();

    jest
      .spyOn(api, 'getDefinition')
      .mockResolvedValueOnce({ defs: ['n\ta definition'] } as Definition);

    jest.spyOn(api, 'getSynonyms').mockResolvedValueOnce([]);

    const log = jest.fn();
    jest.spyOn(console, 'log').mockImplementation(log);

    await init('test');

    expect(log).toHaveBeenCalledTimes(4);
  });
});
