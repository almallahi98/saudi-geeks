import { ReactNode } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, ButtonGroup } from 'react-bootstrap';
import {
    Box,
      Flex,
      Avatar,
      Link,
      Menu,
      MenuButton,
      MenuList,
      MenuItem,
      MenuDivider,
      useDisclosure,
      useColorModeValue,
      Stack,
      useColorMode,
      Center,
      Left,
      Right,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children } = { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.300', 'gray.500'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navs() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    
      <Box bg={useColorModeValue('gray.200', 'gray.700')} px={5}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
        <Link className="nav-link" to="/">
                  Sauid Geeks
                </Link>
          <header className="top-navbar" >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
          </a>
          <button           
            alignItems="center"
            justifyContent="space-between"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbars-rs-food"
            aria-controls="navbars-rs-food"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          </button>
          <Menu>
                 <MenuButton
                   p
                   as={Button}
                   rounded={'full'}
                   variant={'link'}
                   cursor={'pointer'}
                   minW={0}>
                  <Avatar
                  src="./Saudi Geeks.png"
                   size={'sm'}    
                                 
                  />
                </MenuButton>
                 <MenuList alignItems={'center'}>
                   <br />
                  <Center>
                    <Avatar
                       size={'2xl'}
                       src={''}
                     />
                   </Center>
                   <br />
                 <Center>                   
                   </Center>
                   <br />
                  <MenuDivider />
                  <MenuItem href="./Login">Home</MenuItem>
                   <MenuItem>About Us</MenuItem>
                   <MenuItem>Contact Us</MenuItem>
                 
             </MenuList>
            </Menu>
        </div>
      </nav>
    </header>
          <Flex alignItems={'right'}>
            <Stack direction={'row'} spacing={7}>
            <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}