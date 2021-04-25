import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField
} from '@material-ui/core';
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container maxWidth='sm' m='auto'>
      <Box m={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box pb={2}>
            <TextField
              name='email'
              id='email'
              type='email'
              label='Email: '
              variant='filled'
              {...register('email')}
            />
          </Box>
          <Box pb={2}>
            <TextField
              name='password'
              id='password'
              label='Password: '
              type='password'
              variant='filled'
              {...register('password')}
            />
          </Box>
          <Button variant="contained" type='submit'>
              Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}