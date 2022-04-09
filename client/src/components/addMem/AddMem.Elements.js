import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const Title = styled.p`
  font-size: 30px;
  color: white;
`;
export const Icon = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
`;
export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Members = styled.div`
  display: ${(props) => (props.show === 'show' ? 'block' : 'none')};
  cursor: pointer;
`;
export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
  padding: 3px;
`;
export const Member = styled.div`
  height: 20px;
  background: black;
  margin: 5px;
  padding 2px;
  border-radius:5px;
`;
export const DropDown = styled.div`
  display: ${(props) => (props.show === 'show' ? 'block' : 'none')};
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 100px;
  background: black;
`;
export const Item = styled.div`
  cursor: pointer;
  margin: 5px;
  border-radius: 10px;
  &:hover {
    background: #272626;
  }
`;

export const InputGroup = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin-bottom: 10px;
  height: 30px;
  outline: none;
  padding: 5px;
`;
export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;
export const AddBtn = styled.button`
  height: 30px;
  width: 60px;
  border: none;
  cursor: pointer;
`;
