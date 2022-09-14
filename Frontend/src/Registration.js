import React, { useEffect, useState } from "react";
import Axios from "axios";
import './registerForm.css';



export default function Registration() {
  const [firstnameReg, setFirstnameReg] = useState("");
  const [lastnameReg, setLastnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [phoneReg,  setPhoneReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

 

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:8080/register", {
      firstname: firstnameReg,
      lastname: lastnameReg,
      email: emailReg,
      phone: phoneReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
   <div className="container">
    <h2 className="tittle">Register Form</h2>
    <div className="register-form"><br/>
      <div className="GrpBtn">
        <label>First Name: 
          <input 
            type="text"
            name="firstName"
            onChange={(e) => {
              setFirstnameReg(e.target.value);
            }}
           
          />  
        </label>
      </div>  <br/>
      <div className="GrpBtn">
        <label>Last Name:
          <input 
            type="text" 
            className=""
            name="lastName"
            onChange={(e) => {
              setLastnameReg(e.target.value);
            }}
           />
        </label>
      </div> <br/> 
      <div className="GrpBtn">
        <label>Email:
          <input 
            type="text" 
            className=""
            name="email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />  
        </label>
      </div> <br/> 
      <div className="GrpBtn">
        <label>Phone Number:
          <input 
            type="text" 
            className=""
            name="phone"
            onChange={(e) => {
              setPhoneReg(e.target.value);
            }}
          />  
        </label>
      </div>  <br/>
      <div className="GrpBtn">
        <label>password:
          <input 
            type="password" 
            className=""
            name="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          /> 
        </label>
      </div> <br/>
     
      <div className="Btn">
        <label>
          <input 
            type="submit" 
            className=""
            name="submit"
            onClick={register}
          />  
        </label>
      </div>  


      

    </div>

   </div>
  );
}


