import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.open === true ? 1 : -1)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(149, 146, 146, 0.5);
  // background-color: rgba(255, 255, 255, 0.5);
`;

export const Main = styled.div`
  postion: relative;
  width: 30%;
  // min-height: 50%;
  background: #272626;
  padding: 30px;
`;
