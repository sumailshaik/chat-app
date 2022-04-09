import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https://previews.123rf.com/images/macrovector/macrovector1407/macrovector140700436/30081081-m%C3%A9dias-de-r%C3%A9seau-social-seamless-ic%C3%B4nes-motif-de-fond-illustration-vectorielle.jpg');

  background-repeat: repeat-x;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  background: #272626;
  padding: 30px;
`;
export const LoginHeader = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;
export const ControlGroup = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin-bottom: 20px;
  font-size: 15px;
  padding: 10px;
  outline: none;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Submit = styled.button`
  background: #4d9797;
  color: white;
  border: none;
  outline: none;
  padding: 10px;
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;
export const Or = styled.p`
  text-align: center;
`;
export const SignupLink = styled.div`
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
`;
