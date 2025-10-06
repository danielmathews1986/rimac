
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login/login'
import Layout from './layout/layout'
import Home from './components/home/home'
import { PortafolioHome } from './components/portafolio/portafolio'
import DetailUser from './components/detail/detail'

function App() {

  return (
    <Router>
      <Routes>
      <Route path="portafolio" element={<PortafolioHome />} />
      <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="user/:id" element={<DetailUser />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
