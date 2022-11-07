import React from 'react'
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

function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
         
        <Button onClick={onOpen}>Login</Button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login your Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type={'email'} ref={initialRef} placeholder='Email' required />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Passowrd</FormLabel>
                <Input type={'password'} placeholder='Passowrd' required />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button  colorScheme='blue' mr={3}>
                Login
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </>
    )
  }
  export default InitialFocus;