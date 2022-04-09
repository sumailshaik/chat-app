const Reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_SETTINGS':
      return {
        ...state,
        isSettingsOpened: true,
      };
    case 'CLOSE_SETTINGS':
      return {
        ...state,
        isSettingsOpened: false,
      };
    case 'OPEN_MODAL':
      let UpdatedState = {
        ...state,
        isModalOpened: true,
      };
      return UpdatedState;
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpened: false,
      };
    case 'OPEN_ADD_MODAL':
      return {
        ...state,
        isAddModalOpened: true,
      };
    case 'CLOSE_ADD_MODAL':
      return {
        ...state,
        isAddModalOpened: false,
      };
    case 'OPEN_MORE':
      return {
        ...state,
        isMoreOpened: true,
      };
    case 'CLOSE_MORE':
      return {
        ...state,
        isMoreOpened: false,
      };

    case 'OPEN_ADD_MEMBER':
      return {
        ...state,
        isAddMemberOpened: true,
      };
    case 'CLOSE_ADD_MEMBER':
      return {
        ...state,
        isAddMemberOpened: false,
      };

    case 'OPEN_REMOVE_MEMBER':
      return {
        ...state,
        isRemoveMemberOpened: true,
      };
    case 'CLOSE_REMOVE_MEMBER':
      return {
        ...state,
        isRemoveMemberOpened: false,
      };
    case 'SELECT_CHAT':
      return {
        ...state,
        selectedChat: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        user: null,
      };

    default:
      return state;
  }
};

export default Reducer;
