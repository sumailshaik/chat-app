import React, { useCallback, useEffect, useState } from 'react';
import {
  Left,
  Main,
  UserHeader,
  Profile,
  Image,
  Title,
  SerachSection,
  SearchedList,
  SearchItem,
  Input,
  Stack,
  Item,
  Info,
  Name,
  LatestMsg,
} from './History.Elements';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
// import { searchedUsers } from '../../dummydata';
import { useContext } from 'react';
import { DataLayer } from '../../context/Context';
import { openModal, openSettings, selectChat } from '../../context/Actions';
import Settings from '../settings/Settings';
import { debounce } from '../../utils/Debounce';
import axios from 'axios';
import { getRecieverName, getRecieverPic } from '../../utils/miscellaneous';

const History = ({ fetchAgain, setFetchAgain }) => {
  const { dispatch, isSettingsOpened, selectedChat } = useContext(DataLayer);
  const [chats, setChats] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState('');
  const [searchselectedItem, setSearchselectedItem] = useState();

  const handleChange = async (e) => {
    const search = e.target.value;
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.get(`/api/v1/users?search=${search}`, config);

      setSearchedUsers(result.data.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  const optimizedFn = useCallback(debounce(handleChange, 3000));

  const fetchChats = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.get('/api/v1/chats', config);
      setChats(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const showslectedchat = async (u) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.post(
        '/api/v1/chats',
        { userId: u._id },
        config
      );
      console.log('selected chat from search is ', result.data.data);
      console.log('selected user is ', u);
      dispatch(selectChat(result.data.data));
      setFetchAgain(!fetchAgain);
      setSearchedUsers([]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem('user')));
    fetchChats();
  }, [fetchAgain]);

  useEffect(() => {
    if (searchselectedItem) showslectedchat(searchselectedItem);
  }, [searchselectedItem]);

  return (
    <Left>
      <Main>
        <UserHeader>
          <Profile>
            <Image
              src={loggedUser?.pic}
              alt=""
              onClick={() => {
                dispatch(openSettings());
              }}
            />
            <Title>My Chats</Title>
          </Profile>
          <AddBoxIcon
            style={{ fontSize: 35, color: '#B5B2B2', cursor: 'pointer' }}
            onClick={() => {
              dispatch(openModal());
            }}
          />
        </UserHeader>
        <SerachSection>
          <SearchIcon style={{ fontSize: 35, color: '#726C6C', margin: 15 }} />
          <Input type="text" placeholder="Search" onChange={optimizedFn} />
          {searchedUsers && (
            <SearchedList show={searchedUsers.length === 0 ? 'false' : 'true'}>
              {searchedUsers?.map((u) => (
                <SearchItem
                  key={u._id}
                  onClick={() => setSearchselectedItem(u)}
                >
                  {u.name}
                </SearchItem>
              ))}
            </SearchedList>
          )}
        </SerachSection>
        <Stack>
          {chats.map((chat) => (
            <Item
              key={chat._id}
              onClick={() => {
                dispatch(selectChat(chat));
                setFetchAgain(!fetchAgain);
              }}
            >
              <Image
                src={
                  chat.isGroupChat
                    ? chat.pic
                    : getRecieverPic(loggedUser, chat.users)
                }
                alt=""
                other="other"
              />
              <Info>
                <Name>
                  {chat.isGroupChat
                    ? chat.chatName
                    : getRecieverName(loggedUser, chat.users)}
                </Name>
                <LatestMsg></LatestMsg>
              </Info>
            </Item>
          ))}
        </Stack>
      </Main>
      <Settings open={isSettingsOpened} />
    </Left>
  );
};

export default History;
