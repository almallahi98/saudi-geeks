import {React,useEffect, useState} from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
function TableNodes() {
    const [userObj, setuserObj] = useState({})
    useEffect(() => {
        setuserObj(JSON.parse(localStorage.getItem('userObj')));
        console.log(userObj);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        
        <Thead>
          <Tr>
            <Th>number</Th>
            <Th>Node Name</Th>
            <Th>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>home</Td>
            <Td>active</Td>
          </Tr>
        </Tbody>
        
      </Table>
    </TableContainer>
  );
}

export default TableNodes;
