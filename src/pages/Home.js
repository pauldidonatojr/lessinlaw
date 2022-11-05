import React from 'react'
import { Hero, Profiles, Footer } from '../components'
import styled from 'styled-components'
const HomePage = () => {
  return (
   <Wrapper>
    <main  >
     <Hero />

     {/* <Featured /> */}
     {/* <Services />
   <Filler />
   <Article /> */}
     <Footer />
    </main>
   </Wrapper>
  )
}
const Wrapper = styled.div`
   height: 95vh;

`
export default HomePage
