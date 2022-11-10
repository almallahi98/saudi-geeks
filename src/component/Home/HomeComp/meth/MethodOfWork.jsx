import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import Drop from './Drop'

function MethodOfWork() {
    return (
        <>
            <Box p={'15px'}>
                <Box bg={'whiteAlpha.400'} h={'35vh'} w={'100%'} p={'15px'}>
                    <Heading mb={'10px'}>Project abstraction</Heading>
                    <Text mb={'10px'}>fghkjlklvgbhnj, bnm</Text>
                </Box>
                <Flex mt={'5px'}>
                    <Box w={'100%'} bg={'whiteAlpha.400'}  p={'15px'} mr={'2px'}>
                        <Heading fontSize={'3xl'}>Method of work</Heading>
                        <Text>fvgbhnjmk,l</Text>
                        <Drop />


                    </Box>

                    <Box w={'100%'} bg={'whiteAlpha.400'}  ml={'5px'} p={'15px'}>
                        <p>2</p>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default MethodOfWork