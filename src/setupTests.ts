// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

export const mockData = {
  _id: '60ba1ab72e35f2d9c786c610',
  types: [
    {
      _id: '60ba1a062e35f2d9c786c56d',
      name: 'Ristretto',
      sizes: ['60ba18d13ca8c43196b5f606', '60ba3368c45ecee5d77a016b'],
      extras: ['60ba197c2e35f2d9c786c525'],
    },
    {
      _id: '60be1db3c45ecee5d77ad890',
      name: 'Espresso',
      sizes: ['60ba3368c45ecee5d77a016b', '60ba33dbc45ecee5d77a01f8'],
      extras: ['60ba34a0c45ecee5d77a0263'],
    },
    {
      _id: '60be1eabc45ecee5d77ad960',
      name: 'Cappuccino',
      sizes: [
        '60ba18d13ca8c43196b5f606',
        '60ba3368c45ecee5d77a016b',
        '60ba33dbc45ecee5d77a01f8',
      ],
      extras: ['60ba197c2e35f2d9c786c525', '60ba34a0c45ecee5d77a0263'],
    },
  ],
  sizes: [
    {
      _id: '60ba18d13ca8c43196b5f606',
      name: 'Large',
      __v: 0,
    },
    {
      _id: '60ba3368c45ecee5d77a016b',
      name: 'Venti',
    },
    {
      _id: '60ba33dbc45ecee5d77a01f8',
      name: 'Tall',
    },
  ],
  extras: [
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
    {
      _id: '60ba34a0c45ecee5d77a0263',
      name: 'Select type of milk',
      subselections: [
        {
          _id: '611a1adeff35e4db9df19667',
          name: 'Soy',
        },
        {
          _id: '60ba348d8c75424ac5ed259e',
          name: 'Oat',
        },
        {
          _id: '60ba349a869d7a04642b41f4',
          name: 'Cow',
        },
      ],
    },
  ],
};

const mockFetch = async (_url: string) => ({
  ok: true,
  status: 200,
  json: async () => mockData,
});

beforeAll(() => {
  jest.spyOn(window, 'fetch');
});
beforeEach(() => {
  (window.fetch as jest.Mock).mockImplementation(mockFetch);
});
