
import React from 'react'
import {useHistory} from "react-router-dom"
import {Button} from 'reactstrap'


// "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
// molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

function Card({info}) {

    const history = useHistory()

    return (
        <div style={{backgroundColor:"lightblue",flexBasis:400,flexWrap:"wrap",position:"relative",left:10,margin:5}}>
            <p>{info.userId}</p>
            <p>{info.id}</p>
            <p>{info.title}</p>
            <p>{info.body}</p>
            <Button color="success" size="sm" onClick={()=>history.push({
                pathname:`/posts/${info.id}`
            })}>Comments</Button>
            
        </div>
    )
}

export default Card
