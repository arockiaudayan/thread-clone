import { Avatar } from "@chakra-ui/avatar";
import { VStack,Box,Flex,Text } from '@chakra-ui/layout'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { BsInstagram } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import './UserHearder.css'


const UserHeader = () => {

  const toast = useToast();

  const copyURL = () =>{

      const currentURL = window.location.href;
      navigator.clipboard.writeText(currentURL).then(()=>{
        toast({
          title: 'Link copied to clipboard',
          description: "Profile link copied",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      })
  }

  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Arockia Udayan
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>arockiaudayan</Text>
            <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>
              thread.next
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
          name='Arockia Udayan'
          src='/zuck-avatar.png'
          size={"xl"}
          />
        </Box>
      </Flex>
      <Text>
        Co-founder, CEO, of uda tech...
      </Text>
      <Flex justifyContent={"space-between"} w={"-webkit-fill-available"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k follower</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Text color={"gray.light"}>instatgram.com</Text>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"}  />
          </Box>
          <Box className="icon-container">
          <Menu>
            <MenuButton >
              <CgMoreO size={24} cursor={"pointer"}  />
            </MenuButton>
            <MenuList bg={"gray.dark"}>
              <MenuItem bg={"gray.dark"} onClick={copyURL} >Copy link</MenuItem>
            </MenuList>
          </Menu>
          </Box>
        </Flex>
      </Flex>
      <Flex w={"full"} >
        <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb="3" cursor={"pointer"}>
          <Text fontWeight={"bold"}>Threads</Text>
        </Flex>
        <Flex flex={1} borderBottom={"1px solid gray"} justifyContent={"center"} color={"gray.light"} pb="3" cursor={"pointer"}>
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default UserHeader