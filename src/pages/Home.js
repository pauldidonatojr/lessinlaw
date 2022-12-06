import React from 'react'
import { Hero, Profiles } from '../components'
import styled from 'styled-components'
const HomePage = () => {
 return (
  <Wrapper>
   <main>
    <Hero />
   </main>
  </Wrapper>
 )
}
const Wrapper = styled.div`
 height: 95vh;

 width: 100%;
`
export default HomePage
