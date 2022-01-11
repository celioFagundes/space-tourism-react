import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './screens/Home'
import Destination from './screens/Destination'
import Crew from './screens/Crew'
import Technology from './screens/Technology'
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination/:id' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
