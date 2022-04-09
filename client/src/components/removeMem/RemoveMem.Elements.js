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

export const PresentMembers = styled.div`
  padding: 5px;
  width: 70%;
  display: flex;
  border: 1px dotted white;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const Member = styled.div`
  margin-top: 2px;
  border-radius: 5px;
  background: black;
  cursor: pointer;
  padding: 3px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;
export const AddBtn = styled.button`
  margin-top: 20px;
  height: 30px;
  width: 60px;
  border: none;
  cursor: pointer;
`;

export const Removed = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 15px;
`;
export const Txt = styled.p`
  margin-bottom: 10px;
  color: red;
`;
export const Item = styled.div``;
