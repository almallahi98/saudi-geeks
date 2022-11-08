import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
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
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [data,setData] = useState({
      username:"",
      password:""
    })
    const {username,password} = data;

    const changeHandler = e => {
      setData({...data,[e.target.name]:[e.target.value]});
    }

    const submitHandler = e => {
      e.preventDefault();
      console.log(data);
    }
    
    
  
    return (
      <>
        <Button onClick={onOpen}>Login</Button>
        <Modal
          LoginFromRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login your Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <div>
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
        <div className="limiter">
          <div className="container-login100 page-background">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <div className="wrap-input100 validate-input" data-validate="Enter Email">
                  <input className="input100" type="email" name="email" placeholder="Email" />
                  <span className="focus-input100" data-placeholder='@' />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <input className="input100" type="password" name="pass" placeholder="Password" />
                  <span className="focus-input100" data-placeholder="*" />
                </div>
                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Login
                  </button>
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