import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Typography } from '@mui/material';

interface ErrorDialogProps {
  msg: string;
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({  msg }) => {

  return (

        <Container style={{padding:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Typography fontWeight="bold">אופס</Typography>
        <Typography>{msg}</Typography>
        </Container>

  );
};

export default ErrorDialog;
