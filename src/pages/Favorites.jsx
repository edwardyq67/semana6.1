import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
    const favorites=useSelector(state=>state.favorites)
    const navigate=useNavigate()
    console.log(favorites)
    return (
        <div>
            favorites
            <ListGroup>
                {
                    favorites.map(favorite=>(
                        <ListGroupItem onClick={navigate(`/product/${favorite.id}`)}>
                            <h2>{favorite.title}</h2>
                            <img src={favorite.productImgs[0]} alt="" />
                        </ListGroupItem>
                    ))
                }
            </ListGroup>

        </div>
    );
};

export default Favorites;