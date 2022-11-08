import { React, useRef,useState } from "react";
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
} from "@chakra-ui/react";

function ModelLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Login, setLogin] = useState({username:'',password:''})
  const LoginLogout=useRef(null);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <Button onClick={(e)=>
        {
          onOpen();
          LoginLogout.current=e.target;
          }}>Login</Button>
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
                e=>{
                    setLogin({...Login,username:e.target.value})
                  
                  }}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type={"password"} placeholder="Password" 
              onChange={e=>{
                setLogin({...Login,password:e.target.value})
              }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={(e) => {
                axios.get(`https://6362428d7521369cd068e6aa.mockapi.io/api/test/v1/user?username=${Login.username}&password=${Login.password}`).then(res=>
                {
                  if(res.data[0].username === Login.username && res.data[0].password === Login.password)
                  {
                    LoginLogout.current.innerText ='Logout'
                    onClose()
                    
                  }
                });
              
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
