import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import Timeline from '../components/Timeline/Timeline'
import UpcomingPackages from '../components/UpcomingPackages/UpcomingPackages'

const Home = () => {
  return (
    <>
    <HomeBanner/>
    <Timeline/>
    <UpcomingPackages/>
    </>
  )
}

export default Home