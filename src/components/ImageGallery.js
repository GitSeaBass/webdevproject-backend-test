import './ImageGallery.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {Link} from 'react-router-dom';

function ImageGallery(props) {
    const navigate = useNavigate();

    const onClick = (e) => {
        navigate(`/show-item/${e.target.id}`);
    }
    
    return (
        <div className="grid-container">
            {/* Mapping all items onto grid */}
            {props.items.map((item, i) => (
                <div class="card" id = {item.id}onClick={onClick}>
                    <img id = {item.id} src={item.image} alt={item.title} key={i} />
                    <p>{item.title}</p>
                </div>
            ))}
                        
        </div>
    );
}

function openData(card) {
    <Link to={{
        pathname: "/imagestats",
        state: card
    }}          
    />
}

export default ImageGallery;