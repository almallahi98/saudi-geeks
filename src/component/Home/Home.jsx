import React from 'react'
import Hero from './HomeComp/Hero'
import MethodOfWork from './HomeComp/meth/MethodOfWork'
import Tech from './HomeComp/tech/Tech'

function Home() {
  return (
    <div>
        <Hero/>
        <MethodOfWork/>
        <Tech/>
    </div>
  )
}

export default Home