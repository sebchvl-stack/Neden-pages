import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Moodboard from './pages/Moodboard'
import Layout from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cgu" element={<Terms />} />
        <Route path="/moodboard" element={<Moodboard />} />
      </Routes>
    </Layout>
  )
}
