import React,{useState} from 'react';
import { Styledbutton } from '../styled/Button.styles';
import { StyledHeader } from '../styled/Heading.styles';
import { StyledLable } from '../styled/Heading.styles';
import { StyledInput } from '../styled/Input.styles';


 


function Login() {
  // creating a instanse 
const inititialValue = {
  name:"",
  password:"",

}

// inititialion of useState
  const [data,setData]=useState(inititialValue)

  // handling the Event 
  const handleChange = (e) =>{
setData({...data,[e.target.name]:e.target.value})
  }
  const Add = ()=>{

    let auth = JSON.stringify(data)
    localStorage.setItem("auth",auth)
    // api
  }

  console.log(localStorage.getItem('auth'))


  return (

    <>
      {/* ======== hedaer =========== */}
      <StyledHeader>
     Login Page
      </StyledHeader>

      {/* ======== input =========== */}
      <StyledLable>
        Name
      </StyledLable>

      <StyledInput onChange={handleChange} name = "name" />
      <StyledLable>
        password
      </StyledLable>
      <StyledInput onChange={handleChange} name = "password" />
      {/* ======== input =========== */}

      <Styledbutton onClick={Add}>
Login
      </Styledbutton>



    </>

  );
}

export default Login;
