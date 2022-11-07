import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import Drop from './Drop'

function MethodOfWork() {
    return (
        <>
            <Box bg={'yellow'} p={'15px'}>
                <Box bg={'white'} h={'300px'} w={'100%'}>
                <Heading mb={'10px'}>Project abstraction</Heading>
                <Text mb={'10px'}>fghkjlklvgbhnj, bnm</Text>
                </Box>
                <Flex my={'5px'}>
                    <Box w={'100%'} bg={'green'} p={'15px'}>
                    
                        <Heading fontSize={'xl'}>FrontEnd</Heading>
                        <Text>since there's no visible and possible way to show row data to the user
                            it became responsible to use a front-end framework such as React Js,
                            and in our case, we will use it, its the best choice that will meet our
                            requirements.</Text>
                        
                        <Drop/>
                        
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