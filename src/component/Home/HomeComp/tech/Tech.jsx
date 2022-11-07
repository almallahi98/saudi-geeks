import React from 'react'
import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import CardTech from './CardTech'

function Tech() {
  return (
    <Center>
      <SimpleGrid columns={[1,2, 2, 4]} spacingX={'5px'} spacingY={'15px'} py={5}> 
        <Box maxW={'370px'}
          boxShadow='lg'
        >
          <CardTech
            img={'./resources/imges/twitterimage.jpg'}
            libName='React router'
            links="https://reactrouter.com/"
            roll='routing' />
        </Box>
      <Box maxW={'370px'}><CardTech img={'./resources/imges/twitterimage.jpg'} /></Box>
      <Box maxW={'370px'}><CardTech img={'./resources/imges/twitterimage.jpg'} /></Box>
      <Box maxW={'370px'}><CardTech img={'./resources/imges/twitterimage.jpg'} /></Box>
      <Box maxW={'370px'}><CardTech img={'./resources/imges/twitterimage.jpg'} /></Box>
      <Box maxW={'370px'}><CardTech img={'./resources/imges/twitterimage.jpg'} /></Box>
    </SimpleGrid>
    </Center>
  )
}

export default Tech