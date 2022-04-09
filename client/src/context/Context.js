import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
  isSettingsOpened: false,
  isModalOpened: false,
  isAddModalOpened: false,
  isMoreOpened: false,
  selectedChat: null,
  isAddMemberOpened: false,
  isRemoveMemberOpened: false,
};

export const DataLayer = createContext(INITIAL_STATE);

export const DataLayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <DataLayer.Provider
      value={{
        isSettingsOpened: state.isSettingsOpened,
        isModalOpened: state.isModalOpened,
        isAddModalOpened: state.isAddModalOpened,
        isMoreOpened: state.isMoreOpened,
        selectedChat: state.selectedChat,
        isAddMemberOpened: state.isAddMemberOpened,
        isRemoveMemberOpened: state.isRemoveMemberOpened,
        dispatch,
      }}
    >
      {children}
    </DataLayer.Provider>
  );
};
