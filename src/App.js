import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Main from './components/Main';


// static arrays 
// area of all posts in JSON
const DUMMY_ITEMS = [
{
  id: 'i1', // id of specific post
  title: 'Title', // title of post
  description: 'Description', // description by user
  image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80', // url of image
  date: new Date(2023, 1, 2), // date posted
  user: 'user02', // user who posted
  comments: [ // all comments on post
    {user: "user01", comment: "Woah"}, // user and comment
    {user: "user03", comment: "Yes!"}, // user and comment
  ],
  likes: [ // likes on post
    'user04', 'user07' // users who liked
  ],
},
{
  id: 'i2', 
  title: 'Title',
  description: 'This is a description',
  image: 'https://burst.shopifycdn.com/photos/misty-mountain-ranges-at-sunrise.jpg?width=1200&format=pjpg&exif=1&iptc=1',
  date: new Date(2023, 1, 1),
  user: 'user01',
  comments: [
    {user: "user02", comment: "Nice!"},
    {user: "user06", comment: "Miss u"},
  ],
  likes: [
    "user02", "user03", "user04"
  ],
},
{
  id: 'i2', 
  title: 'Title',
  description: 'This is a description',
  image: 'https://media.cnn.com/api/v1/images/stellar/prod/170407220916-04-iconic-mountains-matterhorn-restricted.jpg?q=w_2512,h_1413,x_0,y_0,c_fill/w_1280',
  date: new Date(2023, 1, 1),
  user: 'user01',
  comments: [
    {user: "user02", comment: "Nice!"},
    {user: "user06", comment: "Miss u"},
  ],
  likes: [
    "user02", "user03", "user04"
  ],
}
];

// array of all current users in JSON
const DUMMY_USERS = [
  {user: 'user01', pass: 'pass1'},
  {user: 'user02', pass: 'pass2'},
];


// react App component start
const App = () => {
  // sets DUMMYITEMS as state
  const[items, setItems] = useState(DUMMY_ITEMS);
  const addItemHandler = item => {
    setItems(() => {
      return [item, ...items];
    });
  }

  // sets DUMMYUSERS as state
  const[users, setUsers] = useState(DUMMY_USERS);
  // given new user, add to users array
  const addUsers = (newUser) => {
    setUsers(() => {
      return [newUser, ...users];
    });
  }

  // the current user logged in if logged in as state
  const[currentUser, setCurrentUser] = useState('');
  const addCurrentUser = (newUser) => {
    setCurrentUser(() => {
      return newUser;
    })
  }

  // boolean of whether current user is logged in as state
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
          <Route exact path='/' element={<Main loggedIn={isLoggedIn} onLoggedIn={onLoggedIn} user={currentUser} items={items}/>} />
          <Route path='/login' element={<LoginPage loggedIn={isLoggedIn} onLoggedIn={onLoggedIn} addCurrentUser={addCurrentUser} users={users} addItemHandler={addItemHandler}/>} />
          <Route path='/signup' element={<SignUpPage users={users} addUsers={addUsers}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
