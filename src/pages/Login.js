import React from 'react';
import {
  Box,
  Container,
} from '@material-ui/core';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    // probably change this to a grid
    <Container maxWidth='sm' m='auto'>
      <Box m={4}>
        <LoginForm />
      </Box>
    </Container>
  );
}