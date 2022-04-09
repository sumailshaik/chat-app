import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80%;
  height: 90%;
  background: transparent;
  justify-content: center;
`;

export const Left = styled.div`
  width: 25%;
`;

export const Main = styled.div`
  height: 100%;
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Image = styled.img`
  height: ${(props) => (props.other ? '50px' : '70px')};
  width: ${(props) => (props.other ? '50px' : '70px')};
  border-radius: 50%;
  object-fit: cover;
`;
export const Title = styled.p`
  margin-left: 15px;
  font-size: 37px;
  color: #ffffff;
`;

export const SerachSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  height: 60px;
  background: #403c3c;
  border-radius: 10px;
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  font-size: 19px;
  color: #726c6c;
  outline: none;
  border: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Stack = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  height: calc(100% - 170px);
  background: #403c3c;
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Item = styled.div`
  padding: 15px 0px;
  display: flex;
  align-items: center;
  height: 60px;
  margin: 20px 15px;
  border-bottom: 1px solid #756666;
`;

export const Info = styled.div`
  margin: 0 15px;
`;
export const Name = styled.p`
  font-size: 18px;
  margin: 0 0 5px 0;
`;

export const LatestMsg = styled.p`
  font-size: 10px;
  color: #c5c5c5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
`;
export const Right = styled.div``;
