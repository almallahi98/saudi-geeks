import React from 'react'
import { Box, Link, Image, Flex, Text} from '@chakra-ui/react'

function CardTech(props) {
    return (
        <Box borderRadius="lg" overflow="hidden" bg={'blackAlpha.800'} textColor={'white'}>
            <Link href={props.links} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Flex direction={'column'}>
                    <Image
                        transform="scale(1.0)"
                        src={
                            props.img
                        }
                        alt="dd"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                            transform: 'scale(1.05)',
                        }}
                    />
                    <Box p={4} fontSize={'2xl'}>
                    <Text textAlign={'start'}>{"library Name : "+props.libName}</Text>
                    <Text textAlign={'start'}>{'Roll : '+props.roll}</Text>
                    </Box>
                </Flex>
            </Link>
        </Box>
    )
}

export default CardTech