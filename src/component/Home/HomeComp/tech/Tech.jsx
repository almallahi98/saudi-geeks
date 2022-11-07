import React from 'react'
import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import CardTech from './CardTech'

function Tech() {
  return (
    <Center>
      <SimpleGrid columns={[1, 2, 2, 4]} spacingX={'5px'} spacingY={'15px'} py={5}>
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
  )
}

export default Tech