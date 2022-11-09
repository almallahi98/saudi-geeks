import { React,useState } from "react";
import axios from "axios";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    FormControl,
    FormLabel,
    Input,
    Switch,
} from "@chakra-ui/react";

function ProfileAddNode() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [Device, setDevice] = useState({dname:'',location:'',dactive:false})

    const addDevice=(node)=>{
        axios.put(`https://6362428d7521369cd068e6aa.mockapi.io/api/test/v1/user/${node.id}`,node).then(res=>{console.log(res);})
    }
    return (
        <>
            <Button bg={"#1a202c"} onClick={onOpen}>
                Add Node (Device)
            </Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight="bold" mb="1rem">
                            form body
                        </Text>
                        {/* any text */}
                        <FormControl>
                            <FormLabel>name</FormLabel>
                            <Input placeholder="device name"
                            onChange={e=>{ setDevice({...Device,dname:e.target.value})}} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>location</FormLabel>
                            <Input placeholder="location"
                            onChange={e=>{ setDevice({...Device,location:e.target.value})}} />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="active-dev" mb="0">
                                Active
                            </FormLabel>
                            <Switch id="active-dev"  onChange={e=>{ setDevice({...Device,dactive:e.target.checked})}}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={()=>{
                            let user=JSON.parse(localStorage.getItem('userObj'))
                            let node=user.node;
                            node.push(Device)
                            addDevice(user)
                            
                            onClose()
                            
                        }}>
                            Save
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ProfileAddNode;
