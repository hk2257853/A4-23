import dynamic from 'next/dynamic'

const RemoteLuigi = dynamic(
  // () => import("app1/luigi"),
  () => import("driver/userList"),
  { ssr: false }
)

const App2 = () => (<RemoteLuigi />)

export default App2
