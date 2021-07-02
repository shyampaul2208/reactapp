import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function Search(props){
const[content,setContent]=useState("");
const[users,setUsers]=useState([]);
const user=props.user;
 
function handleChange(event){
    const matter=event.target.value;
    setContent(matter);
}

function handleClick(){
    if(content){

    
    axios.get(`https://friendly-celsius-82819.herokuapp.com/${content}`,{withCredentials:true}).then((res)=>{  
    setUsers(res.data);
    }).catch(err=>console.log(err));

    }

    
}

 return(
     <div class="searchbox">
     
     <input className="search" type="text" value={content} onChange={handleChange} placeholder="search" />
     <button onClick={handleClick}>search</button>
      
     <div>
         {
        
                users.map((person)=>{
             return <div className="card"> {person.name}</div>
          })
         }
         
     </div>

     </div>

 );
}

export default Search;