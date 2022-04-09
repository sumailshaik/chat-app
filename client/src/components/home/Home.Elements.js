import styled from 'styled-components';

export const Container = styled.div`
  postion: relative;
  width: 80%;
  height: 90%;
  @media (max-width: 930px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: transparent;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
