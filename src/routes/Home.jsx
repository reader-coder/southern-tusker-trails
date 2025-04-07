import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import Timeline from '../components/Timeline/Timeline'
import UpcomingPackages from '../components/UpcomingPackages/UpcomingPackages'

const Home = () => {
  const UPCOMING_OPTIONS = { loop: true }
  const UPCOMING_SLIDES = [
    {
      img:"https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=2149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      plan:"2 Days Trip",
      people:"4 People"
    },
    {
      img:"https://images.unsplash.com/photo-1629813538702-64c925934e19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      plan:"2 Days Trip",
      people:"6 People"
    },
    {
      img:"https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      plan:"3 Days Trip",
      people:"4 People"
    },
    {
      img:"https://images.unsplash.com/photo-1628918098760-471c0fad230c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      plan:"3 Days Trip",
      people:"6 People"
    }
  ]
  return (
    <>
    <HomeBanner/>
    <Timeline/>
    <UpcomingPackages slides={UPCOMING_SLIDES} options={UPCOMING_OPTIONS}/>
    </>
  )
}

export default Home