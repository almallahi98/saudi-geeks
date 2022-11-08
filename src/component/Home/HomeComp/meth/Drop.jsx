import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Text,
  } from '@chakra-ui/react'
function Drop() {
  return (
    <Accordion allowToggle>
      <AccordionItem>
    <>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Heading fontSize={'xl'}>FrontEnd</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </>
    <AccordionPanel pb={4}>
    <Text>since there's no visible and possible way to show row data to the user
                            it became responsible to use a front-end framework such as React Js,
                            and in our case, we will use it, its the best choice that will meet our
                            requirements.</Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Heading fontSize={'xl'}>BackEnd(EndPoint)</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Heading fontSize={'xl'}>Node's (Devices)</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </>
    <AccordionPanel pb={4}>
    <Text>fvgbhnjmk,l</Text>
    </AccordionPanel>
  </AccordionItem>
  
</Accordion>







  )
}

export default Drop