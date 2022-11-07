import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import React from 'react'

function MethodOfWork() {
    return (
        <>
            <Box bg={'yellow'} p={'15px'}>
                <Flex my={'5px'}>
                    <Box w={'100%'} bg={'green'} p={'15px'}>
                        <Heading mb={'10px'}>Project abstraction</Heading>
                        <Text mb={'10px'}>fghkjlklvgbhnj, bnm</Text>
                        <Heading fontSize={'xl'}>FrontEnd</Heading>
                        <Text>since there's no visible and possible way to show row data to the user
                            it became responsible to use a front-end framework such as React Js,
                            and in our case, we will use it, its the best choice that will meet our
                            requirements.</Text>
                        <Heading fontSize={'xl'}>BackEnd(EndPoint)</Heading>
                        <Text>fvgbhnjmk,l</Text>
                        <Heading fontSize={'xl'}>Node's (Devices)</Heading>
                        <Text>fvgbhnjmk,l</Text>
                        <Heading fontSize={'3xl'}>Method of work</Heading>
                        <Text>fvgbhnjmk,l</Text>
                    </Box>
                    
                    <Box w={'100%'} bg={'blue'}>
                        <p>2</p>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default MethodOfWork