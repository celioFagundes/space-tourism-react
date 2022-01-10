import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './screens/Home'
import Destination from './screens/Destination'
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination/:id' element={<Destination />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
