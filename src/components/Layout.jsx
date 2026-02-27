import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const layout = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
        <Header />
        <main className='mx-auto max-w-7xl px-4 py-6'>
            <Outlet />

        </main>
    </div>
  )
}

export default layout