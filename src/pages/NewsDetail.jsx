import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const {id}=useParams()
    const productSlice=useSelector(state=>state.productSlice)
    const findProduct=productSlice.find(productSlice=>productSlice.id===Number(id))
    console.log(findProduct)
    
    
    return (
        <div>
            NewsDetail
            <h2>{id}</h2>
            <h1>{findProduct?.category?.name}</h1>
            <img src={findProduct?.productImgs?.[0]} alt="" />
            <div><h3>price: </h3>{findProduct?.price}</div>
            <p>{findProduct?.description}</p>
           
        </div>
    );
};

export default NewsDetail;