import React, { useCallback, useState, useEffect } from 'react';
import {
  Container,
  Main,
  Top,
  Text,
  User,
  Photo,
  Info,
  Name,
  List,
  Option,
  OptTxt,
  Change,
  Input,
  Bottom,
  Logout,
} from './Settings.Elements';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Brightness5RoundedIcon from '@material-ui/icons/Brightness5Rounded';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { useContext } from 'react';
import { DataLayer } from '../../context/Context';
import { closeSettings, logout } from '../../context/Actions';
import { debounce } from '../../utils/Debounce';
import { Link, useNavigate } from 'react-router-dom';

const Settings = ({ open }) => {
  const { dispatch, isSettingsOpened } = useContext(DataLayer);
  const [changePassword, setChangePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [loggedUser, setLoggedUser] = useState('');
  const navigate = useNavigate();

  const handlepassword = (e) => {
    setPassword(e.target.value);
  };

  const submitPassword = (e) => {
    console.log('calling fetch api');
    if (password === e.target.value) {
      setRePassword('password saved');
    } else {
      setRePassword('worng password');
    }
  };

  const optimizedPassword = useCallback(debounce(handlepassword, 3000));
  const optimizedSavePassword = useCallback(debounce(submitPassword, 3000));

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <Container open={open}>
      <Main>
        <Top
          onClick={() => {
            dispatch(closeSettings());
          }}
        >
          <KeyboardBackspaceIcon style={{ fontSize: 30, color: '#C4C4C4' }} />
          <Text>Profile</Text>
        </Top>

        <User>
          <Photo src={loggedUser.pic} alt="" />
        </User>

        <Info>
          <Name>{loggedUser.name}</Name>
        </Info>

        <List>
          <Option>
            <EmailOutlinedIcon />
            <OptTxt>{loggedUser.email}</OptTxt>
          </Option>
          <Option>
            <Brightness5RoundedIcon />
            <OptTxt>Brightness</OptTxt>
          </Option>
          <Option>
            <BookmarkBorderOutlinedIcon />
            <OptTxt>Saved</OptTxt>
          </Option>
          <Option onClick={() => setChangePassword(!changePassword)}>
            <LockOpenOutlinedIcon />
            <OptTxt>Change Password</OptTxt>
          </Option>
          {changePassword && (
            <Change>
              <Input
                placeholder="Enter Password"
                onChange={optimizedPassword}
              />

              <Input
                placeholder="Re-enter password"
                onChange={optimizedSavePassword}
              />
              <p>{repassword}</p>
            </Change>
          )}
        </List>

        <Bottom>
          <Logout
            onClick={() => {
              dispatch(logout());
              localStorage.removeItem('user');
              localStorage.removeItem('token');
              navigate('/login-page');
            }}
          >
            Logout
          </Logout>
        </Bottom>
      </Main>
    </Container>
  );
};

export default Settings;
