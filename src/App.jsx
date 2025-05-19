import './App.css'
import { Routes, Route } from "react-router-dom";
import { Dashboard } from './pages/Dashboard'
import { Events } from './pages/Events'
import { EventDetails } from './pages/EventDetails'
import { Bookings } from './pages/Bookings'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/events/:id' element={<EventDetails />}/>
        <Route path='/bookings' element={<Bookings />}/>
      </Routes>
    </>
  )
}

export default App
