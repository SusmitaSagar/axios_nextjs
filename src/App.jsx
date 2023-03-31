import { useState,useEffect } from 'react'
import React from 'react'
import axios from "axios";

import './App.css'

function App() {
  const [myData, setmyData] = useState([]);
  const [isError,setIsError] = useState("");
  useEffect(() => { 
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setmyData(res.data))
    .catch((error) => 
        setIsError(error.message));
      //console.log("~file: App.jsx ~ line 15 ~useEffect ~ error", error)       //.then is a promise
    
  }, []);

  return (
    <>
    <h1>Axios tutorial</h1>
    { isError != "" && <h2> {isError}</h2>}
    <div className='grid'>
    {myData.map((post) => {  //fat arrow function
      const { id, title,body } = post;
      return (
        <div className='card' key={id}>
        <h2>{title.slice(0 , 15).toUpperCase()}</h2>
        <p>{body.slice(0,100)}</p>
        </div>
      )



    })}
    </div>
    </>
    
       
  );
}

export default App; 
