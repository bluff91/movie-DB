import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
