import React from 'react'
import {
  Box,
  Button,
  TextField
} from '@material-ui/core';
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  
  return (
    <>
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
    </>
  )
}
