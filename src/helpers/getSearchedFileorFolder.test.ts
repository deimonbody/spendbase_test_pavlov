import { dataExample } from '../constants/index';
import { getSearchedFileOrFolder } from './getSearchedFileorFolder.helper';

test('should find Games folder in our test data', () => {
  expect(getSearchedFileOrFolder(dataExample.data, 'Games')).toStrictEqual({
    id: '1',
    name: 'Games',
    type: 'folder',
    content: [
      {
        id: '2',
        name: 'Cars',
        type: 'folder',
        content: [],
      },
      {
        id: '3',
        name: 'Heroes Might and Magic 5.exe',
        type: 'file',
      },
      {
        id: '8',
        name: 'Call of Prypat.exe',
        type: 'file',
      },
    ],
  });
});

test('shouldn`t find Cups file in our test data', () => {
  expect(getSearchedFileOrFolder(dataExample.data, 'Cups')).toBe(null);
});
