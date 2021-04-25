import React from 'react';

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
          <label htmlFor='email'>Email: </label>
          <input name='email'
            type='email'
            id='email' {...register('email')}/>
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input name='password'
            id='password'
            type='password' {...register('password')}/>
        </div>
        <button type='submit'>
            Submit
        </button>
      </form>
    </>
  );
}