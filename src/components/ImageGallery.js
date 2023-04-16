import './ImageGallery.css';
import { useNavigate } from 'react-router-dom';

function ImageGallery(props) {
    const navigate = useNavigate();

    const onClick = (e) => {
        navigate(`/show-item/${e.target.id}`);
    }
    
    return (
        <div className="grid-container">
            {/* Mapping all items onto grid */}
            {props.items.map((item, i) => (    
                <img src={item.image} alt={item.title} key={item.id} id={item.id} onClick={onClick}/>
            ))}
        </div>
    );
}

export default ImageGallery;