import { React, useEffect } from "react";
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
    let userObj = JSON.parse(localStorage.getItem("userObj"));
    let node = userObj.node;
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    {node.map((elm,i) => {
                        return(<Tr key={i}>
                            <Td>{elm.id}</Td>
                            <Td>{elm.dname}</Td>
                            <Td>{elm.location}</Td>
                            <Td>{elm.dactive}</Td>
                            <Td>555</Td>
                        </Tr>)
                    })}

                    {/* {UserObj.map((elm, i) => {
                        return (
                            <Tr key={i}>
                                <Td>{elm.id}</Td>
                                <Td>{elm.name}</Td>
                                <Td>{elm.activ}</Td>
                            </Tr>
                        );
                    })} */}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default TableNodes;
