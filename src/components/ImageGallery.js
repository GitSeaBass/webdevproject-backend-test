import './ImageGallery.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

function ImageGallery(props) {
    const navigate = useNavigate();

    const onClick = (e) => {
        navigate(`/show-item/${e.target.id}`);
    }
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8082/api/items')
            .then((res) => {
                setItems(res.data);
            }).catch((err) => {
                console.log('Error from ImageGallery')
            })
    })


    return (
        <div className="grid-container">
            {/* Mapping all items onto grid */}
            {items.map((item, i) => (
                <div className="card" id = {item._id} onClick={onClick} key={i}>
                    <img id = {item._id} src={item.image} alt={item.title}/>
                    <p>{item.title}</p>
                </div>
            ))}
                        
        </div>
    );
}

/*function openData(card) {
    <Link to={{
        pathname: "/imagestats",
        state: card
    }}          
    />
}*/

export default ImageGallery;