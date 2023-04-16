import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

function ShowItemDetails(props) {
    const {id} = useParams();
    const [item, setitem] = useState({});

    const addItem = () => {
        setitem(() => {
            return props.items.find(item => item.id === id);
        })
    }

    useEffect(() => {
        addItem();
    });

    return (      
        <>
            {/* If want to include image*/}
            {/*}<img src={item.image} alt={item.description}/>{*/}
            <div>Title</div>
            <div>{item.title}</div>

            <div>Date Published</div>
            <div>{String(item.date)}</div>

            <div>Image URL</div>
            <div>{item.image}</div>

            <div>Description</div>
            <div>{item.description}</div>
        </>
    );
}

export default ShowItemDetails;