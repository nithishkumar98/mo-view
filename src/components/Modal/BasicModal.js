import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '90%',
  // maxWidth: '100%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
  zIndex: 20,
};

export default function BasicModal(props) {
  // console.log('props.data')
  // console.log(props.data)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{textTransform: 'none', background: 'none'}} onClick={handleOpen}>Overview</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className=" w-11/12 sm:w-2/3" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {props.data.title}
          </Typography>
          <Typography  id="modal-modal-description" sx={{ mt: 2 }}>
           {props.data.overview}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}