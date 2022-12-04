import React from 'react'
import { Hero, Profiles, Article, Filler, Section } from '../components'
import styled from 'styled-components'
const HomePage = () => {
 return (
  <Wrapper>
   <main>
    <Hero />

   <Article/>
       <Filler />
       <Section />
   </main>
  </Wrapper>
 )
}
const Wrapper = styled.div`
 height: 95vh;

 width: 100%;
`
export default HomePage
