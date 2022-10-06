import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  productThunk, thunkid, thunkName } from '../store/slices/Product.slice';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

import { Button } from 'react-bootstrap';
const Home = () => {
   const [category,setCategory]=useState([])
   
   const[name,setName]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(productThunk())
  },[])
    const productSlice=useSelector(state=>state.productSlice)
   useEffect(()=>{
    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
    .then(res=>setCategory(res.data.data.categories))
   },[])
    
    
    return (
        <div className='home'>
      
      <form className="d-flex">
        <label htmlFor="text"></label>
          <input value={name} onChange={e=>setName(e.target.value)} className="form-control me-sm-2" type="text" placeholder="Search"/>
       <button onClick={()=>dispatch(thunkName(name))} className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        
       

      </form>
      <hr />
      <Row><Col>
            <ListGroup>
        {
          category.map(categ=>(
            <ListGroup.Item onClick={()=>dispatch(thunkid(categ.id))} key={categ.id}>{categ.name}</ListGroup.Item>
          ))
        }
      
      
    </ListGroup>
      </Col>
    <Col lg={10}>
            
            <Row  md={3}  className="g-4">
      {productSlice.map(newsItem => (
        <Col key={newsItem.id}onClick={()=>navigate(`/product/${newsItem.id}`)}>
          <Card>
            <Card.Img  className='img' variant="top" src={newsItem.productImgs[0]}/>
            <Card.Body>
              <Card.Title ><h4><b>{newsItem.title}</b></h4></Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
      
    </Row>
    </Col>
    </Row>
        </div>
    );
};

export default Home;