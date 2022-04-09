import React, { useState } from 'react';
import { Container, Wrapper } from './Home.Elements';
import Chat from '../Chat/Chat';
import History from '../history/History';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  if (loggedUser === null) {
    return <Navigate to="/login-page" replace />;
  } else {
    return (
      <Container>
        <Wrapper>
          <History fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          <Chat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        </Wrapper>
      </Container>
    );
  }
};

export default Home;
