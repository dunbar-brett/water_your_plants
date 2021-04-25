import React from 'react';
import {
  Button,
  TextField
} from '@material-ui/core';
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            name='email'
            id='email'
            type='email'
            label='Email: '
            variant="filled"
            {...register('email')}
          />
        </div>
        <div>
          <TextField
            name='password'
            id='password'
            label='Password: '
            variant="filled"
            {...register('password')}
          />
        </div>
        <Button variant="contained" type='submit'>
            Submit
        </Button>
      </form>
    </>
  );
}