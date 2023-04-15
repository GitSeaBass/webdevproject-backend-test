import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

const DUMMY_ITEMS = [
{
  id: 'i1', // id of specific post
  title: '', // title of post
  description: '', // description by user
  image: '', // url of image
  date: '', // date posted
  user: '', // user who posted
  comments: [ // all comments on post
    {user: "", comment: ""}, // user and comment
    {user: "", comment: ""}, // user and comment
  ],
  likes: [ // likes on post
    '', // users who liked
  ],
},
{
  id: 'i2', 
  title: 'Title',
  description: 'This is a description',
  image: '',
  date: new Date(2023, 1, 1),
  user: 'user01',
  comments: [
    {user: "user02", comment: "Nice!"},
    {user: "user06", comment: "Miss u"},
  ],
  likes: [
    "user02", "user03", "mydad"
  ],
}
];

const DUMMY_USERS = [
  {user: 'user01', pass: 'pass1'},
  {user: 'user02', pass: 'pass2'},
];

const App = () => {
  const[items, setItems] = useState(DUMMY_ITEMS);
  const addItemHandler = item => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  }

  const[users, setUsers] = useState(DUMMY_USERS);
  const addUsers = (newUser) => {
    setUsers(() => {
      return [newUser, ...users];
    });
  }

  const[currentUser, setCurrentUser] = useState('');
  const addCurrentUser = (newUser) => {
    setCurrentUser(() => {
      return newUser;
    })
  }

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const onLoggedIn = (value) => {
    setIsLoggedIn(() => {
      return value;
    });
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<NavBar loggedIn={isLoggedIn} onLoggedIn={onLoggedIn} user={currentUser}/>} />
          <Route path='/login' element={<LoginPage loggedIn={isLoggedIn} onLoggedIn={onLoggedIn} addCurrentUser={addCurrentUser} users={users}/>} />
          <Route path='/signup' element={<SignUpPage users={users} addUsers={addUsers}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
