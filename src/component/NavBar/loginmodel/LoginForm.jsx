
import { React, useRef, useState } from "react";
import { useNavigate } from 'react-router'
import axios from "axios";
import {
    Modal,
    Button,
    ModalOverlay,
    useDisclosure,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    
  } from '@chakra-ui/react'
   import './Login.css'

function LoginFrom() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [Login, setLogin] = useState({ username: '', password: '' })
    const LoginLogout = useRef(null);
    
   
    
    
  
    return (
      <>
       <Button  onClick={(e) => {
        
        LoginLogout.current = e.target;
        if(e.target.innerText ==='Login')
        {
          onOpen();
          
        }
        else
        {
          onClose();
        }
      }}>Login</Button>
      
        <Modal 
          
          LoginFromRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay   />
          <ModalContent background= {'transparent'}    >
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody  pb={6}>
            <div  >
        {/* google font */}
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
        {/* icons */}
        <link href="..assets/fonts/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="../assets/plugins/iconic/css/material-design-iconic-font.min.css" />
        {/* bootstrap */}
        <link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        {/* style */}
        <link rel="stylesheet" href="assets/css/extra_pages.css" />
        {/* favicon */}
        <link rel="shortcut icon" href="../assets/img/favicon.ico" />
        <div className="limiter"  >
          <div className="container-login100 page-background"  >
            <div className="wrap-login100" >
              <form className="login100-form validate-form" >
                <div className="wrap-input100 validate-input" data-validate="Enter username" >
                  <input className="input100" type="username"  ref={initialRef} name="username" placeholder="username" required onChange={ e=>{
                    setLogin({...Login , username : e.target.value})
                  } } />
                    
                                      
                  
                  <span className="focus-input100" data-placeholder='@' />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <input className="input100" type="password" name="pass" placeholder="Password" required onChange={e => {
                  setLogin({ ...Login, password: e.target.value })
                   }}
                   
                  />
                  <span className="focus-input100" data-placeholder="*" />
                </div>
                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label  className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>
                <div className="container-login100-form-btn">
                <Button 
              colorScheme="blue"
              mr={3}
              onClick={(e) => {
                if (LoginLogout.current.innerText === 'Login') {
                  axios.get(`https://6362428d7521369cd068e6aa.mockapi.io/api/test/v1/user?username=${Login.username}&password=${Login.password}`).then(res => {
                    if (res.data[0].username === Login.username && res.data[0].password === Login.password) {
                      
                      LoginLogout.current.innerText = 'Logout'
                      localStorage.setItem('userObj',JSON.stringify({user:res.data[0].username,password:res.data[0].password,id:res.data[0].id}));
                      console.log('login');
                      onClose()
                      }
                      else{
                       
                      }
                  });
                }
              }}
            >
              Login
            </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </>
    )
  }
  export default LoginFrom;