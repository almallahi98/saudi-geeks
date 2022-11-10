import { React, useEffect, useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Flex,
} from "@chakra-ui/react";
//import axios from 'axios'
import { Navigate } from "react-router";
import ProfileEditNode from "../profileModel/ProfileEditNode";


function TableNodes() {
    const [TableData, setTableData] = useState({})
    //const [User, setUser] = useState({})
    //const getdata=async (id)=>{await axios.get(`https://6362428d7521369cd068e6aa.mockapi.io/api/test/v1/user/${id}`).then(res=>{setTableData(res.data.node); setUser(res.data)})}
    //const deletee=async (id)=>{await axios.put(`https://6362428d7521369cd068e6aa.mockapi.io/api/test/v1/user/${id}`,{...User,node:TableData}).then(res=>{console.log(res);})}
const x=JSON.parse(localStorage.getItem('userObj'))
    useEffect(() => {
        //setTableData()
       //await setTableData(JSON.parse(localStorage.getItem('userObj')))
        //getdata(id.id)
        //console.log(localStorage.getItem('userObj'));

    }, [])

    return (
        <TableContainer>
            <Table variant="striped" colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th>number</Th>
                        <Th>Node Name</Th>
                        <Th>location</Th>
                        <Th>active</Th>
                        <Th> </Th>

                    </Tr>
                </Thead>
                <Tbody>
                {console.log(x)}
                    {
                        x.node.map((elm, i) => {
                            return (
                                <Tr key={i}>
                                    <Td>{i+1}</Td>
                                    <Td>{elm.dname}</Td>
                                    <Td>{elm.location}</Td>
                                    <Td>{elm.dactive}</Td>
                                    
                                    <Td>
                                        <Flex direction={'row'}>
                                        <Button value={i} onClick={(i) => {
                                        //TableData[i]
                                        const x = [...TableData]
                                        x.splice(i, 1)
                                        setTableData(x)
                                        Navigate('/profile')
                                    }}>delet</Button>
    
                                    <ProfileEditNode index={i} inputName={elm.dname} inputLocation={elm.location} active={elm.dactive}/>
                                        </Flex>
                                    </Td>
                                </Tr>
                        )}
                    )}
                   
                    
                     
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default TableNodes;
