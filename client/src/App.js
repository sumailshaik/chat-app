import { Container } from './App.Elements';
import Home from './components/home/Home';
import Modal from './components/Modal/Modal';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import AddMember from './components/addMember/AddMember';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={[<Home />, <Modal />, <AddMember />]} />
          <Route path="/login-page" element={<Login />} />
          <Route path="/signup-page" element={<Signup />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
