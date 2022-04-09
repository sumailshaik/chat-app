import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  SignupHeader,
  ControlGroup,
  Input,
  ButtonDiv,
  Submit,
  Bottom,
  Or,
  SignupLink,
} from './Signup.Elements';
import { CircularProgress } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandle = async () => {
    setLoading(true);
    let message;
    if (!name || !email || !password) {
      message = 'Enter all details';
    }

    if (password != confirmPassword) {
      message = "password didn't matched";
    }

    try {
      const result = await axios.post('/api/v1/users/sing-up', {
        name,
        email,
        password,
      });
      console.log(result);
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('user', JSON.stringify(result.data.data.user));
      setLoading(false);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <SignupHeader>Signup</SignupHeader>
        <ControlGroup>
          <Input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ButtonDiv>
            <Submit onClick={submitHandle}>
              {!loading && 'CREATE'}
              {loading && <CircularProgress size={20} color="inherit" />}
            </Submit>
          </ButtonDiv>

          <Bottom>
            <Or>or</Or>
            <SignupLink>
              To Chat? <Link to="/login-page">LOGIN</Link>
            </SignupLink>
          </Bottom>
        </ControlGroup>
      </Wrapper>
    </Container>
  );
};

export default Signup;
