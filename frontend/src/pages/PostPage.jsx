import { VStack,Box,Flex,Text,Avatar,Image,Button } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import PostAction from '../components/PostAction/PostAction'
import { useState } from 'react'
import PostCommend from '../components/PostCommend/PostCommend'

const PostPage = () => {
  const [ liked,setLiked ] = useState(false);
  return (
    <>
      <Flex>

        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src='/zuck-avatar.png' size={"md"} name="Arockia udayan" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"} >arockiaudayan</Text>
            <Image src='/verified.png' w={4} h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"} >id</Text>
          <BsThreeDots/>
        </Flex>

      </Flex>

      <Text my={3}>let's talk about AI</Text>
      <Box borderRadius={6} overflow={"hidden"} border={"1px solid "} borderColor={"gray.light"} >
        <Image src={'/post1.png'} w={"full"} />
      </Box>

      <Flex gap={3} my={3} >
        <PostAction liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={3} alignItems={"center"} >
        <Text color={"gray.light"} fontSize={"sm"} >238 replies</Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"} ></Box>
        <Text color={"gray.light"} fontSize={"sm"} >
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}  >
        <Flex gap={2} alignItems={"center"} >
          <Text fontSize={"2xl"} >✌</Text>
          <Text color={"gray.light"} >Get the app to like,reply and post</Text>
        </Flex>
        <Button>
          Get
        </Button>
      </Flex>

      <Divider my={4} />

      <PostCommend 
        comment="Looks great woo!"
        createdAt='2d'
        likes={200}
        username="Dan Abrahmov"
        image="https://bit.ly/dan-abramov"
       />
      <PostCommend 
        comment="nice app"
        createdAt='4d'
        likes={700}
        username="Kola Tioluwani"
        image="https://bit.ly/tioluwani-kolawole"
       />
      <PostCommend 
        comment="nice app name to see"
        createdAt='8d'
        likes={50}
        username="Ryan Florence"
        image="https://bit.ly/prosper-baba"
       />


    </>
  )
}

export default PostPage