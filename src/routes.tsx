import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Rest from './pages/Restaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Rest />} />
  </Routes>
)

export default Rotas
