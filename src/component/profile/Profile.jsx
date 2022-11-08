import { Box, Button, Flex } from "@chakra-ui/react";
import TableNodes from './table/TableNodes'
import React from "react";

function Profile() {
  return (
    <Box>
      <Box w={"100%"} bg={"black"} p={"50px"}>
        <Flex justifyContent={"start"} mb={'20px'}>
          <Button bg={"whatsapp.400"}>add</Button>
        </Flex>
        <TableNodes/>
      </Box>
    </Box>
  );
}

export default Profile;
