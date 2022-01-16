import React, {useState, useEffect} from 'react';
import loginImg from "../login.svg";
import axios from "axios";

export function Register(props){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async ()=>{
      try {
        loginCall();
      } catch (error) {
        console.log(error);
      }
  }

  const loginCall = async () => {
    try {
        const res = await axios.post('http://localhost:5000/auth/register', {
          userAddress: props.account,
          password: password,
          email: email
        });

      } catch (err) {
        console.log("Đã xuất hiện lỗi vui lòng thực hiện lại 😓");
      }
  };
  return (
    <div className="base-container" ref={props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="useraddress">User address</label>
              <input type="text" name="useraddress" placeholder="useraddress" value= {props.account} disabled/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                name="email" 
                placeholder="email" 
                onChange = {(e)=>{setEmail(e.target.value)}}
                required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="password" 
                onChange = {(e)=>{setPassword(e.target.value)}}
                required/>
            </div>
            <div className="form-group">
              <input type="submit" value = "Register" onClick={handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
  )
} 
