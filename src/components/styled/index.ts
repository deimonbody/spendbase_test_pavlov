import { Stack, TextField, styled } from '@mui/material';
import { TreeItem } from '@mui/x-tree-view';

export const MainWrapper = styled(Stack)(() => ({
  padding: '50px 40px',
}));

export const FolderTreeItem = styled(TreeItem)(() => ({
  '& .MuiTreeItem-label': {
    fontSize: '1rem',
    fontFamily: 'Montserrat-Medium !important',
  },
}));

export const FilteTreeItem = styled(TreeItem)(() => ({
  '& .MuiTreeItem-label': {
    fontSize: '0.9rem',
    fontFamily: 'Montserrat-Medium',
  },
}));

export const SearchInputStyled = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    fontSize: '0.9rem',
    fontFamily: 'Montserrat-Medium',
  },
  '& fieldset': {
    borderRadius: '30px',
  },
}));

export const NoResultText = styled('p')(() => ({
  alignSelf: 'center',
  fontSize: '1.5rem',
  fontFamily: 'Montserrat-Bold',
}));
