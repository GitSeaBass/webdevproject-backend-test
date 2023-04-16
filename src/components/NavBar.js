import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar(props) {

    // runs if user logs out
    function isLoggingOut() {
      props.onLoggedIn(false);
    }

    return (
      <div className='NavBar'>
        <div className='brand'>
          <img src="" alt="Logo" className='logo'/>
          <h3>Title</h3>
        </div>

        <div className='buttons'>
        {props.loggedIn ? <p>{props.user}</p>:<></>} {/* if logged in, display username, else do not*/}
          {/* different buttons based on if logged in or not*/}
          {props.loggedIn ? 
            <Link to='/create'>
              <button className='button'>Create Post</button>
            </Link>:
            <Link to='/login'>
              <button className='button'> Sign In</button>
            </Link>
          } 
          {props.loggedIn ? <button className='button' onClick={isLoggingOut}>Logout</button>:
          <Link to='/signup'>
            <button className='button'>Sign Up</button>
          </Link>
          }
        </div>
      </div>
    );
}

export default NavBar;