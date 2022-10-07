import React, { useEffect } from 'react';
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cartFavorite } from '../../store/slices/cart.slice';

const CardsSil =({show,handleClose}) => {
  const carts=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(cartFavorite())
  },[])
    return (
        <div>
               <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {
              carts.map(cart=>(
                <ListGroup.Item >

                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    );
};

export default CardsSil;