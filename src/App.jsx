import { Header } from './components/Header'
import { Posts } from './components/Posts'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <Sidebar />
        <Posts />
      </div>
    </>
  )
}

export default App
