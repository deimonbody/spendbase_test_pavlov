export interface IData {
  id: string;
  name: string;
  type: 'file' | 'folder';
  isPrivate: boolean;
  content?: IData[];
}

export interface IExampleData {
  data: IData[];
}
