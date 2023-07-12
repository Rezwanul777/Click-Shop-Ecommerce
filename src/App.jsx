// eslint-disable-next-line no-unused-vars
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />}/>
          <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='contact' element={<Contact/>}/>
        
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
