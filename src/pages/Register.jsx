// import React, { useState, useEffect } from 'react'
// import { Form, Input, message } from "antd";  
// import { Link,useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Spinner from '../components/Spinner';

// const Register = () => {
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);

//     // form submit
//     const submitHandler = async (values) => {
//         try{
//             setLoading(true);
//             await axios.post('users/register',values)
//             message.success('Registration Successful');
//             setLoading(false);
//             navigate('/login')
//         } catch(error) {
//             setLoading(false);
//             message.error('something went wrong');
//         }
//     };

//     //prevent for logged in user
//     useEffect(() => {
//         if(localStorage.getItem("user")){
//             navigate('/')
//         }
//     }, [navigate]);

//     return (
//         <div className='register-page-container'>
//             <h1>Invoice App</h1>
//             <div className="register-page">
//                 {loading && <Spinner />}
//                 <Form layout="vertical" onFinish={submitHandler}>
//                     <h1>Register</h1>
//                     <Form.Item label="Name" name="name" rules={[{required: true, message: 'Please input your name!'}]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Email" name="email" rules={[{required: true, message: 'Please input your email!'}]}>
//                         <Input type="email" />
//                     </Form.Item>
//                     <Form.Item label="Password" name="password" rules={[{required: true, message: 'Please input your password!'}]}>
//                         <Input type="password" />
//                     </Form.Item>
//                     <div className="d-flex justify-content-between">
//                         <Link to="/login">Already registered? Click here to login</Link>
//                         <button className="btn btn-primary" style={{margin:'5px'}}>Register</button>
//                     </div>
//                 </Form>
//             </div>
//         </div>
        
//     )
// }

// export default Register

import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  margin-top: 10px;
  padding: 20px;
  background-color: #ffffff8e;
`;

const Title = styled.p`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  color: rgb(51, 51, 51);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px; 
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const SubTitle = styled.p`
  margin: 0 0 32px 0;
  font-family: Poppins;
  font-style: normal;
  color: rgb(51, 51, 51);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
`;

const linkStyle = {
  textDecoration: 'underline', 
  color: 'inherit'
};

const InputBox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-right: 10px;
`;

const PrivacyPolicy = styled.b`
  margin-left: 37px;
`;

const InputButton = styled.input`
  font-size:22px;
  width: 100%;
  font-family: 'Poppins';
  border: none;
  margin-top: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #c0c0be;
  border-radius: 40px;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const navigate = useNavigate();

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
  });

	async function registerUser(event) {
    event.preventDefault()
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if(response.ok){
        setUser({name:"", email:"", password:""});
        navigate("/login");
      }
	}
  
  const handleInput = (e) =>{
    let name=e.target.name;
    let value= e.target.value;
    console.log(e);

    setUser({
      ...user,
      [name]:value,
    });
  };

  

  return (
    <div>
      <Container>
      <Wrapper>
        <Title>Sign up</Title>
        
        <SubTitle>Already have an account?<Link to="/Login" style={linkStyle}>Log in</Link></SubTitle>
        <Form onSubmit={registerUser}>
          <Input value={user.name} onChange={handleInput} name="name" type="text" placeholder="name" />
          <Input value={user.email} onChange={handleInput } name="email" type="email" placeholder="email" />
          <Input value={user.password} onChange={handleInput} name="password" type="password" placeholder="password" />
          
          <InputButton
              type="submit"
              value="Create Account"
            />
        </Form>
      </Wrapper>
    </Container>
    </div>
  )
}

export default Register