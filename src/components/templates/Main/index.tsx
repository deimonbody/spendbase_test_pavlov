import React, { useState } from 'react';
import { TreeView } from '@mui/x-tree-view';
import { dataExample } from '@/constants';
import { MainWrapper, NoResultText } from '@/components/styled';
import { IData } from '@/types';
import FileItem from './components/FileItem';
import FolderItem from './components/FolderItem';
import SearchInput from './components/SearchInput';

const MainPageTemplater: React.FC = () => {
  const [showData, setShowData] = useState<IData[]>(dataExample.data);
  const isAdmin = true; // THE ACCESS TO PRIVATE FILES;

  const changeShowData = (newData: IData[]) => {
    setShowData(newData);
  };

  return (
    <MainWrapper>
      <SearchInput changeShowData={changeShowData} isAdmin={isAdmin} />
      <TreeView>
        {showData.length ? (
          showData.map((item) =>
            item.type === 'folder' ? (
              <FolderItem data={item} key={item.id} isAdmin={isAdmin} />
            ) : (
              <FileItem data={item} key={item.id} isAdmin={isAdmin} />
            )
          )
        ) : (
          <NoResultText>Нічого не було знайдено</NoResultText>
        )}
      </TreeView>
    </MainWrapper>
  );
};

export default MainPageTemplater;
