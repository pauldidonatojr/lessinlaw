import React from 'react'
import styled from 'styled-components'
const Footer = () => {
 return (
  <Wrapper>
   <div className="div1">
    <h4>
     Jeffrey R. Lessin & Associates, P.C., represents people living in
     communities throughout Pennsylvania
    </h4>
   </div>

   <div className="div2">
    {' '}
    <p>
     Location: 1515 Market Street, Suite 714 | Philadelphia, PA 19102 | Phone:
     (215) 599-1400 | Fax: 215-220-3988
    </p>
    <h5>
     &copy; {new Date().getFullYear()}
     <span> Lessin Law</span>
    </h5>
    <p style={{ fontSize: '0.85rem' }}>
     {' '}
     Counties: Berks County • Bucks County • Chester County • Delaware County •
     Lehigh County • Montgomery County • Northampton County • Philadelphia
     County
    </p>{' '}
   </div>
   <div className="div3"> </div>
  </Wrapper>
 )
}

const Wrapper = styled.footer`
 min-height: 10rem;
 width: 100%;
 position: absolute;
 font-family: roboto;
 bottom: 0;
 display: grid;
 justify-content: center;
 align-items: center;
 background: var(--clr-black);
 text-align: center;
 span {
  color: var(--clr-grey-9);
 }
 h5 {
  color: var(--clr-white);
  margin: 0.1rem;

  font-weight: 400;
  text-transform: none;
  line-height: 1.25;
 }
 .logo {
  width: 100%;
  display: block;
  object-fit: cover;
  height: 2rem;
 }

 .div1,
 .div2,
 .div3,
 .div4,
 .div5 {
  p:hover {
   color: var(--clr-grey-6);
  }
  h5:hover {
   color: var(--clr-grey-6);
  }
  span:hover {
   color: var(--clr-grey-6);
  }
 }
 .div1 {
  display: grid;
  grid-column: 2/3;
  grid-row: 1/2;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-size: 0.7rem;
  font-family: roboto;
  color: white;

  img {
   padding: 0.5rem;
  }
 }
 .div2 {
  grid-column: 1/3;
  grid-row: 2/3;

  font-size: 1rem;
  color: white;
  font-family: roboto;
 }
 .div3 {
  grid-column: 1/2;
  grid-row: 2/3;

  color: white;
  font-family: roboto;
 }
 @media (min-width: 576px) {
 }

 @media only screen and (max-width: 600px) {
  .div1 {
  }
  .div2 {
  }
  .div3 {
  }
 }

 @media only screen and (min-width: 600px) {
 }

 @media only screen and (min-width: 768px) {
 }
 @media (min-width: 776px) {
 }
`

export default Footer
