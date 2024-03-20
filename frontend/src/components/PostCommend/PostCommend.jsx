import { VStack,Box,Flex,Text,Avatar,Image,Button } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import PostAction from '../PostAction/PostAction'


const PostCommend = (props) => {
  const [liked,setLiked] = useState(false)
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"} >
        <Avatar src={props.image} size={"sm"} name={props.username} />
        <Flex gap={1} w={"full"} flexDirection={"column"} >
          <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"} >
            <Text fontSize={"sm"} fontWeight={"bold"} >{props.username}</Text>
            <Flex gap={2} alignItems={"center"} >
              <Text fontSize={"sm"} color={"gray.light"} >{props.createdAt}</Text>
              <BsThreeDots/>
            </Flex>
          </Flex>
          <Text>{props.comment}</Text>
          <PostAction liked={liked} setLiked={setLiked} />
          <Text fontSize={"sm"} color={"gray.light"} >
            {props.likes + (liked ? 1 : 0)} likes
          </Text>
        </Flex>
      </Flex>
      <Divider my={4} />

    </>
  )
}

export default PostCommend