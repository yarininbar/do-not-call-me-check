import React from 'react';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Typography } from '@mui/material';

interface LoadingDialogProps {
  isLoading: boolean;
}

const LoadingDialog: React.FC<LoadingDialogProps> = ({ isLoading }) => {
  return (
    <Dialog open={isLoading} aria-labelledby="loading-dialog-title">

        <Container style={{padding:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <CircularProgress color="primary" size={24}/>
        <Typography fontWeight="bold" mt={2}>אנא המתן</Typography>
        <Typography>מתבצעת בדיקה מול המאגר</Typography>
        </Container>
    </Dialog>
  );
};

export default LoadingDialog;
