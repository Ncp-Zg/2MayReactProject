import React from 'react'
import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"
import {Alert} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.css"

function Comments() {
    const param = useParams();
    console.log(param)

    const[comment,setComment]=useState([])

    const handleFetch = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${param.id}/comments`).then(res=>{setComment(res.data)})
    }



    useEffect(() => {
        handleFetch();
    }, [])

    return (
        <div style={{display:"flex",flexWrap:"wrap",margin:10}}>
           {comment?.map(com=>
           <div style={{backgroundColor:"tomato",borderRadius:10,flexBasis:400,margin:5}} key={com.id}>
               <p style={{fontSize:20,textAlign:"center",fontWeight:"bold"}}>{com.id}</p> 
               <p>{com.name}</p> 
               <p>{com.email}</p>
               <p>{com.body}</p>
               <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
            </div> 
           )} 
        </div>
    )
}

export default Comments
