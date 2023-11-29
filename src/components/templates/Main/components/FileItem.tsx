import React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { IData } from '@/types';
import { FilteTreeItem } from '@/components/styled';

interface IProps {
  data: IData;
  isAdmin: boolean;
}
const FileItem: React.FC<IProps> = ({ data, isAdmin }) => {
  return !isAdmin && data.isPrivate ? null : (
    <FilteTreeItem label={data.name} nodeId={data.id} icon={<InsertDriveFileIcon />} />
  );
};

export default FileItem;
