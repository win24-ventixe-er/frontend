import React from 'react'
import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const PortalLayout = () => {
  return (
    <div className="portal-wrapper"> 
        <Nav />
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
