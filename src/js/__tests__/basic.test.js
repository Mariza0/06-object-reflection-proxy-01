import orderByProps from '../classes/basic';

test.each(
  [
    [
      ['name', 'level'], [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
      ],
    ],
    [
      ['name', 'health'], [
        { key: 'name', value: 'мечник' },
        { key: 'health', value: 10 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'level', value: 2 },
      ],
    ],
    [
      ['defence', 'attack'], [
        { key: 'defence', value: 40 },
        { key: 'attack', value: 80 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 },
        { key: 'name', value: 'мечник' },
      ],
    ],
  ],
)('Odered properties', (arrKeys, expectation) => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  expect(orderByProps(obj, arrKeys)).toEqual(expectation);
});
