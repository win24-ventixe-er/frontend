import React, { useEffect } from 'react'
import { EventCard } from '../components/EventCard'

export const Events = () => {
    const [events, setEvents] = React.useState([])

    const getEvents = async () => {
        const response = await fetch('')//sätt rätt URL här
        if (response.ok) {
            const data = await response.json()
            setEvents(data)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

  return (
    <div>
        <h2>Events</h2>
        { 
            events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))
        }
    </div>
  )
}
