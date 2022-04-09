import React, { useState } from 'react';
import {
  Container,
  Main,
  Header,
  Title,
  Icon,
  Body,
  InputGroup,
  Input,
  Members,
  Group,
  Member,
  DropDown,
  Item,
  Bottom,
  CreateBtn,
} from './Modal.Elements';
import { useContext } from 'react';
import axios from 'axios';
import { DataLayer } from '../../context/Context';
import { closeModal } from '../../context/Actions';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
const Modal = () => {
  const { dispatch, isModalOpened } = useContext(DataLayer);
  const [name, setName] = useState('');
  const [selectedMembers, setselectedMembers] = useState([]);
  const [users, setUsers] = useState([]);

  const getUsers = async (e) => {
    const search = e.target.value;
    if (!search) {
      setUsers([]);
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.get(`/api/v1/users?search=${search}`, config);

      setUsers(result.data.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  const addUserToGroup = (user) => {
    setselectedMembers([...selectedMembers, user]);
  };

  const removeUserFromGroup = (user) => {
    var arr = selectedMembers;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]._id === user._id) {
        arr.splice(i, 1);
      }
    }
    setselectedMembers([...arr]);
  };

  const createGroup = async () => {
    var membersIDs = [];
    for (var i = 0; i < selectedMembers.length; i++) {
      membersIDs = [...membersIDs, selectedMembers[i]._id];
    }

    const feed = {
      name: name,
      users: membersIDs,
    };

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.post(
        `/api/v1/chats/create/group-chat`,
        feed,
        config
      );

      console.log(result.data.data);
    } catch (err) {
      console.log(err);
    }
    dispatch(closeModal());
  };

  return (
    <Container open={isModalOpened}>
      <Main>
        <Header>
          <Title>Create Group Chat</Title>
          <Icon onClick={() => dispatch(closeModal())}>
            <CloseOutlinedIcon style={{ fontSize: 20, color: 'white' }} />
          </Icon>
        </Header>
        <Body>
          <InputGroup>
            <Input
              placeholder="Group Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {selectedMembers && (
              <Members show={selectedMembers.length === 0 ? 'hide' : 'show'}>
                <Group>
                  {selectedMembers.map((m) => (
                    <Member onClick={() => removeUserFromGroup(m)}>
                      {m.name}
                    </Member>
                  ))}
                </Group>
              </Members>
            )}
            <Input placeholder="Add Members in group" onChange={getUsers} />
            {users && (
              <DropDown show={users.length === 0 ? 'hide' : 'show'}>
                {users.map((user) => (
                  <Item onClick={() => addUserToGroup(user)}>{user.name}</Item>
                ))}
              </DropDown>
            )}
          </InputGroup>
        </Body>
        <Bottom>
          <CreateBtn
            onClick={() => {
              createGroup();
            }}
          >
            Create
          </CreateBtn>
        </Bottom>
      </Main>
    </Container>
  );
};

export default Modal;
