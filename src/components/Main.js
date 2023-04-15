import NavBar from './NavBar';
import ImageGallery from './ImageGallery';

// component for main front page of website
function Main(props) {
    return (
        <>
            <NavBar {...props}/>
            <ImageGallery items = {props.items}/>
        </>
    );
}

export default Main;