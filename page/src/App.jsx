import './App.css'
import Aside from './components/Aside'
import Header from './components/Header'
import MainHome from './components/MainHome'
import Tutorials from './pages/Tutorials'
import Projects from './pages/Projects'
import Documentations from './pages/Documentations'
import About from './pages/About'
import {Routes, Route} from 'react-router-dom'
import Recomendations from './components/Recomendations'
import Footer from './components/Footer'
function App() {
  return (
      <>
        <Header/>
        <Recomendations/>
        <Footer/>
        <Routes>
          <Route path='/' element={<MainHome/>}></Route>
          <Route path='/tutorials' element={<Tutorials/>}></Route>
          <Route path='/documentations' element={<Documentations/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </>
  )
}

export default App
