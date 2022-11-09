import { Box, Flex } from "@chakra-ui/react";
import TableNodes from './table/TableNodes'
import React from "react";
import ProfileAddNode from "./profileModel/ProfileAddNode";

function Profile() {
  return (
    <Box h={'100vh'}>
      <Box w={"100%"} bg={"black"} p={"50px"}>
        <Flex justifyContent={"start"} mb={'20px'}>
          <ProfileAddNode/>
        </Flex>
        <TableNodes/>
      </Box>
    </Box>
  );
}

export default Profile;
