import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './pages/movieDetails.jsx'
import ScrollToTop from './components/scrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <ScrollToTop />

    <Routes>
      <Route path='' element={<App />} />
      <Route path='/details/:id' element={<MovieDetails />} />
    </Routes>

  </BrowserRouter>

)
