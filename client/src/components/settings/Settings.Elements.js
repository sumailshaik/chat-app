import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #272626;
  position: absolute;
  border: 2px solid #403c3c;
  border-radius: 10px;
  top: 0;
  left: ${(props) => (props.open === true ? '0' : '-100%')};
  transition: all 0.5s ease;
`;

export const Main = styled.div`
  height: 95%;
  width: 90%;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  cursor: pointer;
`;
export const Text = styled.div`
  margin: 5px;
  font-size: 20px;
  color: #c4c4c4;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
`;
export const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0px;
`;

export const Name = styled.p`
  font-size: 25px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background: #312e2e;
  }
`;

export const OptTxt = styled.p`
  margin-left: 5px;
`;

export const Change = styled.div`
  height: 50px;
  color: black;
`;
export const Input = styled.input`
  margin-bottom: 3px;
  margin-left: 30px;
  background: #b5b2b2;
  padding: 2px;
  outline: none;
  border: none;
`;

export const Bottom = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Logout = styled.button`
  border-radius: 3px;
  height: 20px;
  width: 90%;
  border: none;
  background: #312e2e;
  color: white;

  &:hover {
    background: #611818;
  }
`;
