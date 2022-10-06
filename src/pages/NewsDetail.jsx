import React, { useEffect, useState } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const NewsDetail = () => {
    const [findProductid,setfindProduct]=useState({})
    const {id}=useParams()
    const productSlice=useSelector(state=>state.productSlice)
    const [sugerid,setSugerid]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        const findProduct=productSlice.find(productSlice=>productSlice.id===Number(id))
        const fliterid=productSlice.filter(productsnew=>productsnew.category?.id===Number(findProduct.category?.id) )
        setfindProduct(findProduct)
        setSugerid(fliterid)
       
    },[productSlice,id])
    
    return (
        <div className='newDetail'>
            NewsDetail
            <Row>
                <Col >
            <h2>{id}</h2>
            <h1>{findProductid?.category?.name}</h1>
            <img src={findProductid?.productImgs?.[0]} alt="" />
            <div><h3>price: </h3>{findProductid?.price}</div>
            <p>{findProductid?.description}</p>
            </Col>
            <Col lg={3}>
            <ListGroup variant="flush">{
                sugerid.map(filt=>(
                <ListGroup.Item onClick={()=>navigate(`/product/${filt.id}`)} key={filt.id}>
                     <h2>{filt.title}</h2>
                        <img src={filt.productImgs[0]} alt="" />
                </ListGroup.Item>
                    
                ))
            }
        
       
      </ListGroup>
           
           </Col>
           </Row>
        </div>
    );
};

export default NewsDetail;