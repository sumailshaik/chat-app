import React, { useContext, useEffect, useState } from 'react';
import {
  closeAddModal,
  closeRemoveMember,
  openAddModal,
} from '../../context/Actions';
import { DataLayer } from '../../context/Context';
import axios from 'axios';
import {
  Container,
  Header,
  Title,
  Icon,
  Body,
  PresentMembers,
  Member,
  Bottom,
  AddBtn,
  Removed,
  Txt,
  Item,
} from './RemoveMem.Elements';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
const RemoveMem = () => {
  const { dispatch, selectedChat } = useContext(DataLayer);

  const [existingUsers, setExistingUsers] = useState([]);
  const [selectedUsersToRemove, setSelectedUsersToRemove] = useState([]);

  const updateExisting = (user) => {
    var arr = existingUsers;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]._id === user._id) {
        arr.splice(i, 1);
        setSelectedUsersToRemove([...selectedUsersToRemove, user]);
      }
    }
    setExistingUsers([...arr]);
  };

  const updateGroup = () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    selectedUsersToRemove.forEach(async (member) => {
      try {
        //creating api call body
        const feed = {
          chatId: selectedChat._id,
          userId: member._id,
        };

        const result = await axios.post(
          `/api/v1/chats/remove-member`,
          feed,
          config
        );
        // console.log('removed', member.name);
      } catch (err) {
        console.log(err);
      }
    });
  };

  useEffect(() => {
    setExistingUsers([...selectedChat.users]);
    console.log('rerendered...');
  }, [selectedChat]);

  return (
    <Container>
      <Header>
        <Title>Remove Members from group</Title>
        <Icon
          onClick={() => {
            dispatch(closeAddModal());
          }}
        >
          <CloseOutlinedIcon style={{ fontSize: 20, color: 'white' }} />
        </Icon>
      </Header>
      <Body>
        <PresentMembers>
          {existingUsers.map((user) => (
            <Member onClick={() => updateExisting(user)}>{user.name}</Member>
          ))}
        </PresentMembers>
      </Body>
      <Bottom>
        <AddBtn
          onClick={() => {
            updateGroup();
            dispatch(closeAddModal());
            dispatch(closeRemoveMember());
          }}
        >
          update
        </AddBtn>
      </Bottom>
      {selectedUsersToRemove.length > 0 && (
        <Removed>
          <Txt>
            Below users will be removed ({selectedUsersToRemove.length}):
          </Txt>
          {selectedUsersToRemove.map((user) => (
            <Item>{user.name}</Item>
          ))}
        </Removed>
      )}
    </Container>
  );
};

export default RemoveMem;
