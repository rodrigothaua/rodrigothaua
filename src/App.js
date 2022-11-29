import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Links from './pages/Links'

function App() {
  return (

    // Rotas
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/links' element={<Links />} />
      </Routes>
    </Router>
  )
}

export default App
