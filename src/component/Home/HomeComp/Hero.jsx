import React from "react";
import {
    Stack,
    Flex,
    Text,
    VStack,
    Center,
    useBreakpointValue,
    Box,
    SimpleGrid,
} from "@chakra-ui/react";

function Hero() {
    return (
        <Box>


            <Flex
                w={"full"}
                h={"100vh"}
                direction={'column'}
                bg={'black'}
                backgroundImage={window.location.origin + "/resources/imges/iot.jpeg"}
                backgroundSize={"cover"}
                backgroundPosition={"center center"}

            >
                <VStack
                    w={"full"}
                    h={'100%'}
                    justify={"center"}
                    textAlign={'center'}
                    px={useBreakpointValue([0, 2, 0, 0])}
                    bgGradient={"linear(to-t, rgba(12,26,44,1) 25%, transparent)"}
                >
                    <Stack maxW={"90%"} align={"flex-end"} spacing={4} >
                        <Text
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
                            textColor={"whiteAlpha.700"}
                        >
                            The Internet of Things (IoT) involves the use of connected devices
                            for the exchange of data, (IoT) refers to a network of devices
                            that are connected via an internet connection. These devices are
                            then used to gather and analyze data for a wide range of purposes
                            in various industries.
                        </Text>
                    </Stack>
                    {/* <Box w={'100%'} minH={'20vh'}>

                        <Box mt={'20vh'} w={'100%'} minH={'45vh'} bg={'rgba(12,26,44,1)'}>
                            the pics gose hear !!  ['90%','300px','350px','350px']

                        </Box> 

                    </Box> */}

                </VStack>

            </Flex>
            <Center w={'100%'} minH={'50vh'} bg={'rgba(12,26,44,1)'}>
                {/* the pics gose hear !!  ['90%','300px','350px','350px']*/}
                <Box w={'100%'} h={'90%'} bg={'white'}>
                    <Center>
                        <Text fontSize={"2xl"} textColor={'black'} pt={'3px'}>
                            {/*entrest*/}
                            hi
                        </Text>
                        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                                <Box bg='tomato' height='100%'></Box>
                                <Box bg='tomato' height='100%'></Box>
                                <Box bg='tomato' height='100%'></Box>
                                <Box bg='tomato' height='100%'></Box>
                                <Box bg='tomato' height='100%'></Box>
                            </SimpleGrid>
                    </Center>

                </Box>
            </Center>
        </Box>
    );
}

export default Hero;
