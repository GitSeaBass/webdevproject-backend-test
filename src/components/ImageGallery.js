import './ImageGallery.css';
import { useState } from "react";
import {Link} from 'react-router-dom';

function ImageGallery(props) {
    return (
        <div className="grid-container">
            {/* Mapping all items onto grid */}
            {props.items.map((item, i) => (
                <div class="card">
                    <img id = {item.id} src={item.image} alt={item.title} key={i} onClick={openData(item)} />
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