import { useEffect, useState } from "react";
import User from "./User";
import './style.css'



export default function GithubProfileFinder() {
  
    const [username , setUsername] = useState('kanakk365');
    const [data , setData] = useState(null)
    const [loading, setLoading] = useState(false)

    function handleSubmit(){
        fetchData()
    }
    
    async function fetchData(){

        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        if(data){setData(data)}
        console.log(data)
        setLoading(false)
    }
    
    useEffect(()=>{
        fetchData()
    },[])
    
    if(loading) {
        return(  <h1> Loading Please wait </h1> )
    }
    
    return (
    <div className="profile-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Username"
          name="search-by-username"
          value={username}
          onChange={(event)=> setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {data ? <User user={data}/> : null}
    </div>
  );
}
