import React from 'react';
import {
  Container,
  Left,
  Main,
  UserHeader,
  Profile,
  Image,
  Title,
  SerachSection,
  Input,
  Stack,
  Item,
  Info,
  Name,
  LatestMsg,
} from './Home.Elements_bkp';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { chats } from '../../dummydata';
import Chat from '../Chat/Chat';

const Home = () => {
  return (
    <Container>
      <Left>
        <Main>
          <UserHeader>
            <Profile>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs5cEY2amVxWyc0bNsELzM2-ylVLa0rdzmQ&usqp=CAU"
                alt=""
              />
              <Title>Chats</Title>
            </Profile>
            <AddBoxIcon style={{ fontSize: 35, color: '#B5B2B2' }} />
          </UserHeader>
          <SerachSection>
            <SearchIcon
              style={{ fontSize: 35, color: '#726C6C', margin: 15 }}
            />
            <Input type="text" placeholder="Search or Create a chat" />
          </SerachSection>
          <Stack>
            {chats.map((chat) => (
              <Item>
                <Image src={chat.pic} alt="" other="other" />
                <Info>
                  <Name>{chat.name}</Name>
                  <LatestMsg>{chat.latestMsg}</LatestMsg>
                </Info>
              </Item>
            ))}
          </Stack>
        </Main>
      </Left>
      <Chat />
    </Container>
  );
};

export default Home;

<Messages>
  <Msg>
    <Txt>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Txt>
  </Msg>
  <Msg own="true">
    <Txt own="true">Assalamaalikum</Txt>
  </Msg>
  <Msg>
    <Txt>Assalamaalikum</Txt>
  </Msg>
  <Msg>
    <Txt>Assalamaalikum</Txt>
  </Msg>

  <Msg own="true">
    <Txt own="true">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Txt>
  </Msg>
  <Msg>
    <Txt>Assalamaalikum</Txt>
  </Msg>
  <Msg own="true">
    <Txt own="true">Assalamaalikum</Txt>
  </Msg>
  <Msg>
    <Txt>Assalamaalikum</Txt>
  </Msg>
  <Msg own="true">
    <Txt own="true">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Txt>
  </Msg>
  <Msg>
    <Txt>Assalamaalikum</Txt>
  </Msg>
  <Msg own="true">
    <Txt own="true">
      <div>Assalamaalikum</div>
      <Time>
        <span>11:28 AM</span>
      </Time>
    </Txt>
  </Msg>
  <Msg>
    <Txt>Assalamaalikum</Txt>
  </Msg>
  <Msg>
    <Txt>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Txt>
  </Msg>
  <Msg>
    <Txt>Assalamaalikum</Txt>
  </Msg>
  <Msg>
    <Txt>Assalamaalikum</Txt>
  </Msg>
  <Msg>
    <Txt>Assalamaalikum</Txt>
  </Msg>
</Messages>;
