'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ImageDialog({images} : {images: string[]}) {
  const [open, setOpen] = React.useState(false);
  const [currImg, setCurrImg] = React.useState("");

  const handleClickOpen = (currImg: string) => {
    setCurrImg(currImg);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <Grid container spacing={2}>
        {images.map((img, index) => (
            <Grid key={index} size={3} >
                <Button onClick={() => handleClickOpen(img)}>
                    <img src={img} alt={`inspo image #${index}`}/>
                </Button>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle sx={{ m: 0 }} id="customized-dialog-title">
                    
                    </DialogTitle>
                    <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                    >
                    <CloseIcon />
                    </IconButton>
                    <DialogContent>
                        <img src={currImg} alt={`inspo image #${index}`}/>
                    </DialogContent>
                </BootstrapDialog>
            </Grid>
      ))}
        </Grid>
    </React.Fragment>
  );
}
