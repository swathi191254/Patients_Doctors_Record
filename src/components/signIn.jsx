import React from 'react'
import Link from 'react'
import { useState } from 'react';
import Patients from './Patients'
import { useNavigate } from "react-router-dom"; 
function SignIn(props) {
  
    
  
      return (
    <div className="container">
        <h3>Sing In to Start Work</h3>
      <form >
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-primary"
  
>Submit

</button>
</form>


    </div>
  )
}


export default SignIn
