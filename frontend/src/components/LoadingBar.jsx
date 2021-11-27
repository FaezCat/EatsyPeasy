import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import * as React from 'react';
import "../styles/LoadingBar.scss";

export default function LinearIndeterminate() {
  return (
    <Box className="loading-bar" sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}