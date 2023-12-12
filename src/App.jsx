import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Articles from './components/Articles'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Articles />} />
    </Routes>
    </>
  )
}

export default App
