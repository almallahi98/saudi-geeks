import React,{useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Button, FormControl, FormLabel, Input, Switch,
  } from '@chakra-ui/react'

function ProfileEditNode(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Save, setSave] = useState({inputName:'',inputLocation:'',active:true})
    let d=props.inputName;
    let c=props.inputLocation;
    let i=props.index;
    return (
      <>
        <Button ml={'5px'} bg={'yellow.400'} color={'black'} value={props.index} onClick={() => {
            onOpen()
                                    
                            }}>Edit</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              
              
              <FormControl>
                <FormLabel>name</FormLabel>
                <Input type={'text'} onChange={e=>{setSave({...Save,inputName:e.target.value})}} value={d}/>
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input type={'text'} onChange={e=>{setSave({...Save,inputLocation:e.target.localName})}} value={c}/>
              </FormControl>
            </ModalBody>
            <FormControl>
                <FormLabel>name</FormLabel>
                <Switch _active={props.active} onChange={(e)=>{setSave({...Save,active:e.target.value})}}/>
              </FormControl>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={(i)=>{
                
                let userObj=localStorage.getItem('userObj');
                userObj.node[i].dname=Save.inputName;
                userObj.node[i].location=Save.inputLocation;
                userObj.node[i]. dactive=Save.active;
                
               
                localStorage.setItem("userObj",{...userObj,node:userObj.node})
                onClose()
              }}>
                seve
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
 
}

export default ProfileEditNode