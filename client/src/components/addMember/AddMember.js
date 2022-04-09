import React, { useContext } from 'react';
import { DataLayer } from '../../context/Context';
import AddMem from '../addMem/AddMem';
import RemoveMem from '../removeMem/RemoveMem';
import { Container, Main } from './AddMember.Elements';

const AddMember = () => {
  const {
    isAddModalOpened,
    isAddMemberOpened,
    isRemoveMemberOpened,
    selectedChat,
    dispatch,
  } = useContext(DataLayer);
  return (
    <Container open={isAddModalOpened}>
      <Main>
        {isAddMemberOpened && <AddMem />}
        {isRemoveMemberOpened && <RemoveMem />}
      </Main>
    </Container>
  );
};

export default AddMember;
