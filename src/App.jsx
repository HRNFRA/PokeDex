import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Pokemons from './pages/Pokemons'
import Type from './pages/Type'
import Types from './pages/Types'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/type/:element" element={<Type />} />
            <Route path="/types" element={<Types />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
