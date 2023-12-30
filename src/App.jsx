import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/myRoute/home'
import AboutUs from './pages/myRoute/aboutUs'
import OurSkill from './pages/myRoute/ourSkill'
import Choose from './pages/myRoute/choose'
import Portfolio from './pages/myRoute/portfolio'
import Blog from './pages/myRoute/blog'
import Contact from './pages/myRoute/contact'
import Errorpage from './pages/myRoute/errorpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='aboutUs' element={<AboutUs />} />
          <Route path='OurSkill' element={<OurSkill />} />
          <Route path='Choose' element={<Choose />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Errorpage />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
