import UserHeader from "../components/UserHeader/UserHeader"
import UserPost from "../components/UserPost/UserPost"

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={1200} replies={481} postImg='./post1.png' postTitle="Let talk about Ai" />
      <UserPost likes={456} replies={500} postImg='./post2.png' postTitle="Let talk about power" />
      <UserPost likes={600} replies={600} postImg='./post3.png' postTitle="Let talk about laravel" />
      <UserPost likes={566} replies={50} postImg='./post3.png' postTitle="Let talk about powerpoint" />
    </>
  )
}

export default UserPage