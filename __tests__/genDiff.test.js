#!/usr/bin/env node

const fixturesPath = join(__dirname, '..', '__fixtures__');
const getFixturePath = (filename) => join(fixturesPath, filename);

test('genDiff', () => {
  const expected = '{\n  - host: hexlet.io\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n}';

  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(expected);
});

