import './ImageGallery.css';

function ImageGallery(props) {
    return (
        <div className="grid-container">
            {/* Mapping all items onto grid */}
            {props.items.map((item, i) => (
                <img src={item.image} alt={item.title} key={i}/>
            ))}
        </div>
    );
}

export default ImageGallery;