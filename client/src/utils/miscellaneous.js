export const getRecieverName = (loggedInUser, users) => {
  return loggedInUser && loggedInUser._id === users[0]._id
    ? users[1].name
    : users[0].name;
};

export const getRecieverPic = (loggedInUser, users) => {
  return loggedInUser && loggedInUser._id === users[0]._id
    ? users[1].pic
    : users[0].pic;
};
