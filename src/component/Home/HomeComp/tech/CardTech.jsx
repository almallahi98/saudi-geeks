import React from 'react'
import { Box, Link, Image, Flex, Text} from '@chakra-ui/react'

function CardTech(props) {
    return (
        <Box borderRadius="lg"  minH={'380px'} overflow="hidden" bg={'blackAlpha.800'} textColor={'white'}>
            <Link href={props.links} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Flex direction={'column'}>
                    <Image
                        transform="scale(1.0)"
                        src={
                            props.img
                        }
                        alt=""
                        objectFit="contain"
                        width="100%"
                        minH={'100%'}
                        transition="0.3s ease-in-out"
                        _hover={{
                            transform: 'scale(1.05)',
                        }}
                    />
                    <Flex direction={'column'} p={4} pt={[null,null,null,"30px"]} fontSize={'xl'}>
                    <Text textAlign={'start'}>{props.libName+" "+props.roll}</Text>
                    {/* <Text textAlign={'start'}>{props.roll}</Text> */}
                    </Flex>
                </Flex>
            </Link>
        </Box>
    )
}

export default CardTech