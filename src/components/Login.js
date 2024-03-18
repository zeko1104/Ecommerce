import React from 'react';
import { Stack,Box,TextField,Button } from '@mui/material';


const Login = () => {
  return (
    <Stack spacing={2} sx={{width:'250px'}}>
        <Box>
          <TextField label='Email' variant="outlined"/>
        </Box>
        <Box>
          <TextField label='Password' variant="outlined"/>
        </Box>
        <Box>
        <Button variant="contained">Login</Button>
        </Box>
    </Stack>
  )
}

export default Login