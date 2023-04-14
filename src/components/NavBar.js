import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar(props) {

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
        {props.loggedIn ? <p>{props.user}</p>:<></>}
          {props.loggedIn ? <button className='button'>Create Post</button>:
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