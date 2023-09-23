import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './components/Home.jsx'
import { Navigation } from './components/Navigation.jsx'
import { SearchPage } from './components/SearchPage.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='search' element={<SearchPage />} />
          </Route>

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
