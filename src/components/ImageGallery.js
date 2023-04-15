import './ImageGallery.css';

function ImageGallery(props) {
    return (
        <div className="grid-container">
            {/* Mapping all items onto grid */}
            {props.items.map((item) => (
                <img src={item.image} alt={item.title} />
            ))}
        </div>
    );
}

export default ImageGallery;