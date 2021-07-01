import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function Search(props){
const[content,setContent]=useState("");
const[posts,setPosts]=useState([]);
const user=props.user;
 
function handleChange(event){
    const matter=event.target.value;
    setContent(matter);
}

function handleClick(){
    if(content){

    
    axios.get(`https://friendly-celsius-82819.herokuapp.com/${content}`,{withCredentials:true}).then((res)=>{  
    setPosts(res.data);
    }).catch(err=>console.log(err));

    }

    
}

 return(
     <div class="searchbox">
     
     <input className="search" type="text" value={content} onChange={handleChange} placeholder="search" />
     <button onClick={handleClick}>search</button>
      
     <div>
         {
        
                posts.map((image)=>{
             return <div className="card"><Post className="card" key={image._id} userid={user._id} imageid={image._id} text={image.description} src={image.selectedFile} creator={image.createdBy.name} likes={image.likes}/> </div>
          })
         }
         
     </div>

     </div>

 );
}

export default Search;