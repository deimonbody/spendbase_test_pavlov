import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOffIcon from '@mui/icons-material/FolderOff';
import { IData } from '@/types';
import { FolderTreeItem } from '@/components/styled';
import FileItem from './FileItem';

interface IProps {
  data: IData;
  isAdmin: boolean;
}

const FolderItem: React.FC<IProps> = ({ data, isAdmin }) => {
  return !isAdmin && data.isPrivate ? null : (
    <FolderTreeItem label={data.name} nodeId={data.id} icon={data.content?.length ? <FolderIcon /> : <FolderOffIcon />}>
      {data.content && data.content.length
        ? data.content.map((el) =>
            el.type === 'folder' ? (
              <FolderItem data={el} key={el.id} isAdmin={isAdmin} />
            ) : (
              <FileItem data={el} key={el.id} isAdmin={isAdmin} />
            )
          )
        : null}
    </FolderTreeItem>
  );
};

export default FolderItem;
