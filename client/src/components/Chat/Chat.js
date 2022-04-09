import React, { useEffect, useRef, useState } from 'react';
import {
  ChatHeader,
  Conatiner,
  Main,
  Profile,
  Image,
  Info,
  Name,
  Members,
  MessageStack,
  Options,
  List,
  Item,
  Messages,
  Msg,
  Person,
  PerName,
  Txt,
  Time,
  Texting,
  Input,
  Bottom,
  NoChat,
  EmptyTxt,
} from './Chat.Elements';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';
import { useContext } from 'react';
import { DataLayer } from '../../context/Context';
import {
  closeAddMember,
  closeMore,
  closeRemoveMember,
  openAddMember,
  openAddModal,
  openMore,
  openRemoveMember,
} from '../../context/Actions';
import axios from 'axios';
import io from 'socket.io-client';
import { getRecieverName, getRecieverPic } from '../../utils/miscellaneous';

const ENDPOINT = 'http://localhost:8800';
var socket, selectedChatCompare;

const Chat = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat, isMoreOpened, dispatch } = useContext(DataLayer);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socketConnected, setSocketConnected] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');
  const messagesEndRef = useRef(null);

  const isAdmin = () => {
    return selectedChat.groupAdmin._id === loggedUser._id;
  };

  const getChatMembers = () => {
    if (!selectedChat) return;

    let groupMembersNames = '';
    selectedChat.users.forEach((user) => {
      groupMembersNames = groupMembersNames + ', ' + user.name;
    });

    return groupMembersNames.substring(2);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  const getAllMessages = async () => {
    if (!selectedChat) return;
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const result = await axios.get(
        `/api/v1/messages/${selectedChat?._id}`,
        config
      );
      setChatMessages(result.data.data);
      socket.emit('join chat', selectedChat._id);
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const token1 = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token1}`,
      },
    };

    try {
      const result = await axios.post(
        `/api/v1/messages/`,
        {
          content: newMessage,
          chatId: selectedChat._id,
        },
        config
      );
      // console.log(result.data.data);
      setNewMessage('');
      const msg = result.data.data;
      const room = selectedChat._id;
      socket.emit('new message', msg, room);
      setChatMessages([...chatMessages, result.data.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllMessages();
    selectedChatCompare = selectedChat;
    setLoggedUser(JSON.parse(localStorage.getItem('user')));
    console.log('all messages got ');
  }, [fetchAgain]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('setup', JSON.parse(localStorage.getItem('user')));
    socket.on('connected', () => {
      console.log('personal room created');
    });
  }, []);

  useEffect(() => {
    socket.on('message recieved', (newMessageRecieved) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        console.log('sending notification');
      } else {
        setChatMessages([...chatMessages, newMessageRecieved]);
      }
    });
  }, [chatMessages]);

  return (
    <Conatiner>
      {selectedChat ? (
        <Main>
          <ChatHeader>
            <Profile>
              <Image
                src={
                  selectedChat.isGroupChat
                    ? selectedChat.pic
                    : getRecieverPic(loggedUser, selectedChat.users)
                }
                alt=""
              />
              <Info>
                <Name>
                  {selectedChat.isGroupChat
                    ? selectedChat.chatName
                    : getRecieverName(loggedUser, selectedChat.users)}
                </Name>
                {selectedChat.isGroupChat && (
                  <Members>
                    {getChatMembers()}

                    {/* Jaffer Jigat, Thoufiq, shoiab, Ghouse & more... */}
                  </Members>
                )}
              </Info>
            </Profile>
            <MoreVertIcon
              style={{ fontSize: 35, color: '#B5B2B2', cursor: 'pointer' }}
              onClick={() => {
                isMoreOpened === true
                  ? dispatch(closeMore())
                  : dispatch(openMore());
              }}
            />
          </ChatHeader>
          <MessageStack>
            <Options open={isMoreOpened}>
              <List>
                <Item key={1}>Group Info </Item>
                {selectedChat.isGroupChat && isAdmin() && (
                  <div>
                    <Item
                      key={2}
                      onClick={() => {
                        dispatch(closeMore());
                        dispatch(openAddModal());
                        dispatch(closeRemoveMember());
                        dispatch(openAddMember());
                      }}
                    >
                      Add Members
                    </Item>
                    <Item
                      key={3}
                      onClick={() => {
                        dispatch(closeMore());
                        dispatch(openAddModal());
                        dispatch(closeAddMember());
                        dispatch(openRemoveMember());
                      }}
                    >
                      Remove Member
                    </Item>
                  </div>
                )}
                <Item key={4}>Clear Messages</Item>
              </List>
            </Options>

            <Messages>
              {chatMessages &&
                chatMessages.map((msg) => (
                  <Msg own={msg.sender._id === loggedUser._id}>
                    <Txt own={msg.sender._id === loggedUser._id}>
                      {msg.content}
                      {msg.sender._id != loggedUser._id &&
                        selectedChat.isGroupChat === true && (
                          <Person>{msg.sender.name}</Person>
                        )}
                    </Txt>
                  </Msg>
                ))}
              <div ref={messagesEndRef} />
            </Messages>

            <Bottom>
              <Texting>
                <Input
                  type="text"
                  placeholder="Type a Message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <SendIcon
                  style={{ fontSize: 50, color: '#B5B2B2' }}
                  onClick={sendMessage}
                />
              </Texting>
            </Bottom>
          </MessageStack>
        </Main>
      ) : (
        <NoChat>
          <EmptyTxt>
            Hey {loggedUser?.name}, Click on user to start chatting...
          </EmptyTxt>
        </NoChat>
      )}
    </Conatiner>
  );
};

export default Chat;
