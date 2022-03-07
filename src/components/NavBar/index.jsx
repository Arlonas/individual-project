// Di chakra ui Box itu seperti div bisa di kasih display flex kalo seperti itu lebih baik 
// menggunakan stack karena stack itu sama saja seperti box tp di display flex


import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
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
} from '@chakra-ui/react';
import { BsSun } from 'react-icons/bs'
import { HiMoon } from 'react-icons/hi'


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>ARA</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} paddingRight={9}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <HiMoon /> : <BsSun />}
              </Button>
            </Stack>
            <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
            >
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
          </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
              
             
