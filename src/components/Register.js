import React from 'react';
import { Stack,Box,TextField,Button } from '@mui/material';

const Register = () => {
  return (
  <Stack spacing={2} sx={{width:'250px'}}>
    <Box>
      <TextField label='Email' variant="outlined"/>
    </Box>
    <Box>
      <TextField label='Password' variant="outlined"/>
    </Box>
    <Box>
      <TextField label='Confirm Password' variant="outlined"/>
    </Box>
    <Box>
    <Button variant="contained">Register</Button>
    </Box>
  </Stack>
  )
}

export default Register