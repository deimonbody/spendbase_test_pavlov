import { IData } from '@/types';

const searchTreeByName = (node: IData, targetName: string): IData | null => {
  // Перевірка, чи поточний вузол має шукане ім'я
  if (node.name === targetName) {
    return node;
  }

  // Рекурсивний пошук у вкладених вузлах
  if (node.content) {
    for (const childNode of node.content) {
      const result = searchTreeByName(childNode, targetName);
      if (result) {
        return result;
      }
    }
  }

  // Якщо ім'я не знайдено в поточному вузлі та його вкладеннях
  return null;
};

export const getSearchedFileOrFolder = (array: IData[], targetName: string) => {
  for (const node of array) {
    const result = searchTreeByName(node, targetName);
    if (result) {
      return result;
    }
  }

  // Якщо ім'я не знайдено в жодному об'єкті верхнього рівня
  return null;
};
