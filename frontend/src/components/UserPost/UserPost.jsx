import { VStack,Box,Flex,Text,Avatar,Image } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import PostAction from '../PostAction/PostAction'
import { useState } from 'react'


const UserPost = (props) => {


  const [liked,setLiked] = useState(false)
  
  return (
    <Link to={"/udayan/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar
            size="md"
            name='Udayan'
            src='/zuck-avatar.png'
          />
          <Box w={"1px"} h={"full"} bg="gray.light" my={2} ></Box>
          <Box position={"relative"} w={"full"} >
            <Avatar size="xs"
              name='john doe'
              src='http://picsum.photos/50'
              position={"absolute"}
              top={"0px"}
              left="15px"
              padding={"2px"}
            />
            <Avatar size="xs"
              name='john doe'
              src='http://picsum.photos/50'
              position={"absolute"}
              bottom={"0px"}
              right="-5px"
              padding={"2px"}
            />
            <Avatar size="xs"
              name='john doe'
              src='http://picsum.photos/50'
              position={"absolute"}
              bottom={"0px"}
              left="4px"
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} gap={2} flexDirection={"column"}>

          <Flex justifyContent={"space-between"} w={"full"} >
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"} > arocckiaudayan</Text>
              <Image src="/verified.png" w={4} h={4} ml={1} />
            </Flex>
            <Flex gap={4} alignItems={"center"}> 
              <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
              <BsThreeDots/>
            </Flex>
          </Flex>

          <Text fontSize={"sm"}>
            {props.postTitle}
          </Text>

          <Box borderRadius={6} overflow={"hidden"} border={"1px solid "} borderColor={"gray.light"} >
            <Image src={props.postImg} w={"full"} />
          </Box>

          <Flex>
            <PostAction liked={liked} setLiked={setLiked}/>
          </Flex>
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize={"sm"}>{props.replies} replies</Text>
            <Box w={.5} h={0.5} borderRadius={"full"} bg={"gray.light"} ></Box>
            <Text color={"gray.light"} fontSize={"sm"}>{props.likes} likes</Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  )
}

export default UserPost