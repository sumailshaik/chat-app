export const openSettings = () => ({
  type: 'OPEN_SETTINGS',
});

export const closeSettings = () => ({
  type: 'CLOSE_SETTINGS',
});

export const openModal = () => ({
  type: 'OPEN_MODAL',
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});

export const openAddModal = () => ({
  type: 'OPEN_ADD_MODAL',
});

export const closeAddModal = () => ({
  type: 'CLOSE_ADD_MODAL',
});

export const openMore = () => ({
  type: 'OPEN_MORE',
});

export const closeMore = () => ({
  type: 'CLOSE_MORE',
});

export const openAddMember = () => ({
  type: 'OPEN_ADD_MEMBER',
});

export const closeAddMember = () => ({
  type: 'CLOSE_ADD_MEMBER',
});

export const openRemoveMember = () => ({
  type: 'OPEN_REMOVE_MEMBER',
});

export const closeRemoveMember = () => ({
  type: 'CLOSE_REMOVE_MEMBER',
});
export const selectChat = (chat) => ({
  type: 'SELECT_CHAT',
  payload: chat,
});

export const logout = () => ({
  type: 'LOGOUT',
});
