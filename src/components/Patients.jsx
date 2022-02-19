import { useEffect, useState } from "react"

const axios = require('axios');
function Patients(){
    const [page,setPage] = useState(1)
    const [text ,setText ] = useState(null)
     const [mainPatients ,setPatients ] = useState(null)


    const getPatients =()=>{
        axios.get(`http://localhost:3001/patients?_sort=Age&_order=desc?_page=${page}&_limit=5`)
            .then(function (response) {
          
             console.log("res", response.data);
             setPatients(response.data)
              })
             .catch(function (error) {
           
            console.log(error);
            })
      }

      useEffect(()=>{
          getPatients()
      },[page])


    return<div>
        
        <button onClick={()=>{
           axios.get(`http://localhost:3001/patients?_sort=Age&_order=desc?_page=${page}&_limit=5`)
            .then(function (response) {
            
              console.log(response.data);
              setPatients(response.data)
            })
            .catch(function (error) {
           
              console.log(error);
            })
        }}
        
        >Sort by Age </button>
        <h1>Details of Patients</h1>
      
         {mainPatients?.map((el, i)=> 
         
         <div key={i} style={{
             border : "1px solid black",
             padding : "20px",
             margin : "20px"
            
         }}>
             
             <h2>Name : {el?.name}</h2>
             <h5>Age : {el?.age}</h5>
             
             <h5>Gender : {el?.gender} </h5>
             <h5>Madicens Priscripted : {el?.medicines}</h5>
             
            
         </div>
         
         
         )}
           <button onClick={()=>{
            setPage(page-1)
        }}
        >prev</button>
        <button onClick={()=>{
            setPage(page + 1)
        }}
        >next</button>
    </div>
    
}

export default Patients