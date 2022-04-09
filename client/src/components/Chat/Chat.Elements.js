import styled from 'styled-components';

export const Conatiner = styled.div`
  display: flex;
  width: 60%;
  margin-left: 35px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Main = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.div`
  margin-left: 15px;
  color: #ffffff;
`;
export const Name = styled.div`
  font-size: 30px;
`;
export const Members = styled.div`
  font-size: 10px;
  color: #b3b0b0;
`;
export const Title = styled.p`
  margin-left: 15px;
  font-size: 37px;
  color: #ffffff;
`;

export const MessageStack = styled.div`
  position: relative;
  margin-top: 20px;
  background: #403c3c;
  border-radius: 10px;
  height: calc(100% - 90px);
  // overflow: hidden;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Options = styled.div`
  position: absolute;
  background: #194040;
  top: -30px;
  z-index: ${(props) => (props.open ? 100 : -100)};
  right: 15px;
  border-radius: 10px;
`;
export const List = styled.div`
  margin: 10px;
`;
export const Item = styled.div`
  border: 2px solid #1d544f;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #1d544f;
  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 80px);
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  //   background: green;
`;

export const Msg = styled.div`
  display: flex;
  margin: 8px 55px;
  justify-content: ${(props) => (props.own ? 'flex-start' : 'flex-end')};
`;

export const Txt = styled.div`
  min-width: 52px;
  position: relative;
  display: inline-block;
  background: ${(props) => (props.own ? '#645F5F' : '#171717')};
  padding: 10px 10px 5px 10px;
  border-radius: 20px;
  max-width: 400px;
  text-align: justify;
`;

export const Person = styled.div`
  position: absolute;
  right: 8px;
  font-size: 8px;
  color: black;
  bottom: -10px;
`;

export const Time = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 8px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 80px;
  width: 100%;
`;

export const Texting = styled.div`
  margin: 5px 30px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
`;

export const Input = styled.input`
  height: 100%;
  border-radius: 30px;
  flex: 0.9;
  padding-left: 20px;
  border: none;
  background: #b5b2b2;
  outline: none;
  font-size: 20px;
  color: #000000;
`;

export const NoChat = styled.div`
  height: 100%;
  width: 100%;
  background: #403c3c;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyTxt = styled.p`
  font-size: 15px;
`;
