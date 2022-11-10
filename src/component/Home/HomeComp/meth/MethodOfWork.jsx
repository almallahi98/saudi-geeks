import { Box, Flex, Text, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Drop from './Drop'

function MethodOfWork() {
    return (
        <>
            <Box p={'15px'}>
                <Box bg={'whiteAlpha.400'} h={'100%'} w={'100%'} p={'15px'}>
                    <Heading mb={'10px'}>Project abstraction</Heading>
                    <Text mb={'10px'}>the main functionality of this project, is to simulate the human daily activity.
                    taking in mind the huge advantages and the impact the the industry. </Text>
                    <Flex direction={'row'}>
                    <Image w={'50%'} h={'90vh'} mp={'50vh'} p={'4px'} alt='' src='/resources/imges/iota-iot_system.png'/>
                    <Image w={'50%'} h={'90vh'} mt={'50vh'} p={'4px'} alt='' src='/resources/imges/Aeris_Industries-2-scaled-1.jpg'/>
                    </Flex>
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