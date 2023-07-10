import dynamic from 'next/dynamic'

const RemoteLuigi = dynamic(
  () => import("manage/userList"),
  { ssr: false }
)

const App2 = () => (<RemoteLuigi />)

export default App2
