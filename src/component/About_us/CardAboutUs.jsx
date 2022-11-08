import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SocialProfileWithImage(props) {
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image h={"120px"} w={"full"} src={""} objectFit={"cover"} />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={""}
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {props.name}
            </Heading>
            <Text color={"gray.500"}>{props.Course}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{props.startdate}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Name:
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{props.enddate}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Major:
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
