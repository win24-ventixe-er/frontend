import './App.css'
import { EventDetails } from './pages/EventDetails'

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
