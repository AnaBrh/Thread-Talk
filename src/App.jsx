import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Articles from './components/Articles'
import ArticleDetails from './components/ArticleDetails';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/articles/:article_id" element={<ArticleDetails />} />
    </Routes>
    </>
  )
}

export default App
