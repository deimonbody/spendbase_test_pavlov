import { IExampleData } from '@/types';

export const dataExample: IExampleData = {
  data: [
    {
      id: '1',
      name: 'Games',
      type: 'folder',
      isPrivate: false,
      content: [
        {
          id: '2',
          name: 'Cars',
          type: 'folder',
          content: [],
          isPrivate: false,
        },
        {
          id: '3',
          name: 'Heroes Might and Magic 5.exe',
          type: 'file',
          isPrivate: false,
        },
        {
          id: '8',
          name: 'Call of Prypat.exe',
          type: 'file',
          isPrivate: false,
        },
      ],
    },
    {
      id: '4',
      name: 'Work',
      type: 'folder',
      isPrivate: false,
      content: [
        {
          id: '5',
          name: 'index.tsx',
          type: 'file',
          isPrivate: true,
        },
        {
          id: '6',
          name: 'Templates',
          type: 'folder',
          isPrivate: false,
          content: [
            {
              id: '7',
              name: 'firstTemplate',
              type: 'folder',
              isPrivate: false,
              content: [],
            },
          ],
        },
      ],
    },
  ],
};
