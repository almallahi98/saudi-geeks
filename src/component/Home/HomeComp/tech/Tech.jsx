import React from 'react'
import { Box, Center, SimpleGrid, Text } from '@chakra-ui/react'
import CardTech from './CardTech'

function Tech() {
  return (
    <Box p={5} bg={'whiteAlpha.400'}>
    <Text 
    textAlign={'center'}
    textColor={'whiteAlpha.800'}
    fontSize={'2xl'}
    fontStyle={'italic'}
    fontWeight={'bold'}
    mb={'8px'}>
      technologies used to develop our solutions 
    </Text>
    <Center>
      <SimpleGrid columns={[1, 2, 2, 4]} spacingX={'5px'} spacingY={'15px'} >
        <Box maxW={'370px'}
          boxShadow='lg'
        >
          <CardTech
            img={'./resources/imges/twitterimage.jpg'}
            libName='React router'
            links="https://reactrouter.com/"
            roll='routing' />
        </Box>
        <Box maxW={'370px'}
          boxShadow='lg'
        >
          <CardTech
            img={'./resources/imges/54212428.png'}
            libName='Chakra ui'
            links="https://chakra-ui.com/"
            roll='Ui Framwork' />
        </Box>
        <Box maxW={'370px'}
          boxShadow='lg'
        >
          <CardTech
            img={'./resources/imges/zul.png'}
            libName='Zustand'
            links="https://github.com/pmndrs/zustand"
            roll='State Management' />

        </Box>

        <Box maxW={'370px'}
          boxShadow='lg'>
          <CardTech
            img={'./resources/imges/reactImg.png'}
            libName='React'
            links="https://github.com/pmndrs/zustand"
            roll='Frontend App' />
        </Box>


      </SimpleGrid>
    </Center>
    </Box>
  )
}

export default Tech