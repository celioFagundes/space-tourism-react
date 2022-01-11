import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './screens/Home'
import Destination from './screens/Destination'
import Crew from './screens/Crew'
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination/:id' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
