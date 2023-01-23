import { mockData } from '../setupTests';
import { getSizesAndExtras } from './dataHelpers';

describe('getSizesAndExtras', () => {
  it('returns expected values', () => {
    const { sizes, extras } = getSizesAndExtras(
      mockData,
      '60ba1a062e35f2d9c786c56d'
    );

    expect(sizes).toEqual([
      {
        _id: '60ba18d13ca8c43196b5f606',
        name: 'Large',
        __v: 0,
      },
      {
        _id: '60ba3368c45ecee5d77a016b',
        name: 'Venti',
      },
    ]);

    expect(extras).toEqual([
      {
        _id: '60ba197c2e35f2d9c786c525',
        name: 'Select the amount of sugar',
        subselections: [
          {
            _id: '60ba194dfdd5e192e14eaa75',
            name: 'A lot',
          },
          {
            _id: '60ba195407e1dc8a4e33b5e5',
            name: 'Normal',
          },
        ],
      },
    ]);
  });

  it('throws error if type id does not match with data', () => {
    expect(() => getSizesAndExtras(mockData, '123123123')).toThrowError(
      'No coffee type with id 123123123 found'
    );
  });
});
