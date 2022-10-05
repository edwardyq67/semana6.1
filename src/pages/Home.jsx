import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  productThunk } from '../store/slices/Product.slice';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Button } from 'react-bootstrap';
const Home = () => {
   const [category,setCategory]=useState([])
   const [filtid,setFiltid]=useState({})
   const [name,setName]=useState("")
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
    const filterCategory=()=>{
      const filter=productSlice.filter(catId=catId.category.id===category.id)
    
      console.log(filter)
    }
    
    return (
        <div>
            home
           
        {
              category.map?.(categ=>(
                
         
              <Button key={categ.id} onClick={filterCategory}><h2>{categ.name}</h2></Button>
          
              ))
            }
      
      
            
              
            
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
        </div>
    );
};

export default Home;