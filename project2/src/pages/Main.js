import React from 'react'
import Card from "../components/Card"
import {useEffect,useState} from "react"
import axios from "axios"
import {InputGroup,Input,InputGroupAddon,Button,Navbar} from "reactstrap"

function Main() {

    const[fakeData,setFakeData]=useState([]);
    const[searchedData,setSearchedData]=useState("");
    const[filteredData,setFilteredData]=useState([]);

    const handlefetch =()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{(setFakeData(res.data));setFilteredData(res.data)})
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    const handleChange = (e)=>{
        setSearchedData(e.target.value);
        
        const filter = fakeData.filter(fakedata=>{
            const title = fakedata.body.toUpperCase()
            const text = searchedData.toUpperCase()
            return title.includes(text)
        })

        setFilteredData(filter)
        
    }
    // console.log(filteredData)
    
    useEffect(() => {
        handlefetch();
    }, [])

    return (
     <div>
         
         


        <div>
        <Navbar color="light" light expand="md" fixed="top">
        <InputGroup onSubmit={handleSubmit}>
        <Input type="text" onChange={handleChange} placeholder="Enter a word..."/>
        <InputGroupAddon addonType="append">
          <Button color="warning" type="submit">Search...</Button>
        </InputGroupAddon>
      </InputGroup>
      </Navbar>
        </div>
        
        <div style={{backgroundColor:"lightcyan",display:"flex",flexWrap:"wrap"}}>
            {filteredData?.map(data=><Card info={data} key={data.id}/>)}
        </div>
     </div>
    )
}

export default Main
