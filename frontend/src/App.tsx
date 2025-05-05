import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/DashBoard';
import Navbar from './components/NavBar/NavBar';

function App() {

  return (

    <Router>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Dashboard />}/>

      </Routes>

    </Router>
  )
}


export default App
