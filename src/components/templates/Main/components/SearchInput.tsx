import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SearchInputStyled } from '@/components/styled';
import { IData } from '@/types';
import { dataExample } from '@/constants';
import { getSearchedFileOrFolder } from '@/helpers/getSearchedFileorFolder.helper';

interface IProps {
  changeShowData: (newData: IData[]) => void;
  isAdmin: boolean;
}

const SearchInput: React.FC<IProps> = ({ changeShowData, isAdmin }) => {
  const [inpValue, setInpValue] = useState('');

  useEffect(() => {
    let newData = getSearchedFileOrFolder(dataExample.data, inpValue);
    newData = !isAdmin && newData?.isPrivate ? null : newData;

    if (inpValue.length) {
      changeShowData(newData ? [newData] : []);
    } else {
      changeShowData(dataExample.data);
    }
  }, [inpValue]);

  return (
    <Box sx={{ alignSelf: 'flex-end' }} mb={3}>
      <SearchInputStyled
        placeholder="Пошук за назвою..."
        variant="outlined"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchInput;
