import React, { useContext, useState } from 'react';
import { closeAddModal, closeModal, openAddModal } from '../../context/Actions';
import { DataLayer } from '../../context/Context';
import axios from 'axios';
import {
  Container,
  Header,
  Title,
  Icon,
  Body,
  InputGroup,
  Members,
  Group,
  Member,
  Input,
  DropDown,
  Item,
  Bottom,
  AddBtn,
} from './AddMem.Elements';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
const AddMem = () => {
  const { dispatch, selectedChat } = useContext(DataLayer);
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

      // taking already present users ids in array
      let alreadyPresentUserIDs = [];
      selectedChat.users.forEach((user) => {
        alreadyPresentUserIDs = [...alreadyPresentUserIDs, user._id];
      });

      let resultantUsers = result.data.data.users;
      let showUsers = [];

      // removing already present ids from result
      resultantUsers.forEach((user) => {
        if (!alreadyPresentUserIDs.includes(user._id)) {
          showUsers = [...showUsers, user];
        }
      });

      setUsers(showUsers);
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

  const updateGroup = () => {
    // console.log(selectedChat._id);
    // console.log(selectedMembers);
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    selectedMembers.forEach(async (member) => {
      try {
        //creating api call body
        const feed = {
          chatId: selectedChat._id,
          userId: member._id,
        };

        const result = await axios.post(
          `/api/v1/chats/add-member`,
          feed,
          config
        );
      } catch (err) {
        console.log(err);
      }
    });
    setselectedMembers([]);
    setUsers([]);
  };

  return (
    <Container>
      <Header>
        <Title>Add Members in Group</Title>
        <Icon onClick={() => dispatch(closeAddModal())}>
          <CloseOutlinedIcon style={{ fontSize: 20, color: 'white' }} />
        </Icon>
      </Header>
      <Body>
        <InputGroup>
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
        <AddBtn
          onClick={() => {
            updateGroup();
            dispatch(closeAddModal());
          }}
        >
          Add
        </AddBtn>
      </Bottom>
    </Container>
  );
};

export default AddMem;
