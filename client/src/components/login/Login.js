import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  LoginHeader,
  ControlGroup,
  Input,
  ButtonDiv,
  Submit,
  Bottom,
  Or,
  SignupLink,
} from './Login.Elements';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const handleSubmit = async (e) => {
    setLoading(true);
    const result = await axios.post('/api/v1/users/login', { email, password });
    const user = result.data;
    localStorage.setItem('token', result.data.token);
    localStorage.setItem('user', JSON.stringify(result.data.user));
    setLoading(false);
    navigate('/');
  };
  if (loggedUser != null) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <Container>
        <Wrapper>
          <LoginHeader>Login</LoginHeader>
          <ControlGroup>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <ButtonDiv>
              <Submit onClick={handleSubmit}>
                {!loading && 'LOGIN'}
                {loading && <CircularProgress size={20} color="inherit" />}
              </Submit>
            </ButtonDiv>

            <Bottom>
              <Or>or</Or>
              <SignupLink>
                Need an Account? <Link to="/signup-page">SIGNUP</Link>
              </SignupLink>
            </Bottom>
          </ControlGroup>
        </Wrapper>
      </Container>
    );
  }
};

export default Login;
