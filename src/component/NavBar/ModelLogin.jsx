import { React, useRef, useState,useEffect } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Button,
  Input,
  FormLabel,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";


function ModelLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Login, setLogin] = useState({ username: '', password: '' })
  const loginState = useRef(null)
  const LoginLogout = useRef(null);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  ;
  useEffect(() => {
    if(localStorage.getItem('userObj')!==null)
    {
      loginState.current='Logout'; 
    }
    else{
      loginState.current='Login';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  
 
 
  return (
    <>
      
      <Button onClick={(e) => {
        
        LoginLogout.current = e.target;
        if(e.target.innerText ==='Login'|| localStorage.getItem('userObj')== null)
        {
          onOpen();
          
        }
        else
        {
          localStorage.removeItem("userObj")
          e.target.innerText ='Login'
        }
      }}>
       
       {loginState.current}
      </Button>


      {/* <Button onClick={onOpen}>Login</Button>
      <Button onClick={onOpen}>logout</Button> */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>User Name</FormLabel>
              <Input ref={initialRef} placeholder="User Name"
                onChange={
                  e => {
                    setLogin({ ...Login, username: e.target.value })

                  }} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type={"password"} placeholder="Password"
                onChange={e => {
                  setLogin({ ...Login, password: e.target.value })
                }}
              />
              <Text>or you can 
                <Link 
                as={'button'}
                textDecoration={'underline'}
                fontStyle={'italic'}
                onClick={()=>{
                  //////////////////////////////////////////////////////////////////////////////////////// do somthing here
                }}>
                Register</Link></Text>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={(e) => {
                if (LoginLogout.current.innerText === 'Login') {
                  axios.get(`https://6362428d7521369cd068e6aa.mockapi.io/api/test/v1/user?username=${Login.username}&password=${Login.password}`).then(res => {
                    if (res.data[0].username === Login.username && res.data[0].password === Login.password) {
                      localStorage.setItem('userObj',JSON.stringify(Login));
                      LoginLogout.current.innerText='Logout'
                      onClose()
                      
                      }
                  });
                }
              }}
            >
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModelLogin;
