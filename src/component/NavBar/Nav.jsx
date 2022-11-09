import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
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

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    
      <Box bg={useColorModeValue('gray.200', 'gray.700')} px={5}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
        <Link className="nav-link" to="/">
                  Sauid Geeks
                </Link>
          <header className="top-navbar">
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
          <div className="collapse navbar-collapse" id="navbars-rs-food">
            <ul className="navbar-nav ml-auto">
               <Link className="nav-link" to="/Home">
                  Home
                </Link>
                <Link className="nav-link" to="/About_us">
                  About us
                </Link>
                <Link className="nav-link" to="/About_us">
                 Login
                </Link>
                <Link className="nav-link" to="/Contact">
                Contact Us
                </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
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