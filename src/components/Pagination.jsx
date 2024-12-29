import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack spacing={2} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 56,
        gap: 8,
        padding: '0 16px',
        // backgroundColor: '#3f51b5',
        // color: 'white',
        // fontWeight: 'bold',
        // borderRadius: 16,
        // '&:hover': {
        //     backgroundColor: '#212121',
        //     color: 'white'
        // }
    }}>
      <Pagination count={10} variant="outlined" shape="rounded"  sx={{
          '& .MuiPaginationItem-root': {
            color: '#1976d2', // Change text color
            borderColor: '#1976d2',
             // Change border color
          },
          '& .Mui-selected': {
            backgroundColor: '#1976d2', // Change selected background color
            color: '#fff', // Change selected text color
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: '#e3f2fd', // Change hover background color
          },
        }} />
    </Stack>
  );
}
