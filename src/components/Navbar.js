import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaBars, FaCamera, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links, social } from '../utils/constants'
import { useSideContext } from '../context/sidebar_context'
import { useModalContext } from '../context/modal_context'

export default function Navbar() {
 const { openModal } = useModalContext()
 const { openSidebar } = useSideContext()

 return (
  <NavContainer>
   <div className="nav-center">
    <div className="nav-header">
     <button type="button" className="nav-toggle" onClick={openSidebar}>
      <FaBars className="faIcon" />
     </button>
    </div>

    <div className="logo-div">
     {/* {social.map((socialIcon) => {
      const { id, url, icon } = socialIcon
      return (
       <li key={id}>
        <a href={url}>{icon}</a>
       </li>
      )
     })} */}
     <img
      src="https://res.cloudinary.com/elpawl-llc/image/upload/v1657399779/Jeffrey_R._Lessin_Associates_P.C._1_tyxapa.png
"
      className="logo"
      alt="elpawl"
     />
     {/* <h4
      style={{
       textShadow: '2px 2px white',
       color: 'var(--clr-black)',
       fontWeight: 'bold',
       fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen`,
      }}
      className="header"
     >
      Jeffrey R. Lessin & Associates, P.C.
     </h4> */}
    </div>
    <button type="button" className="camera-toggle">
     <FaPhoneAlt />
    </button>

    <ul className="nav-links">
     {links.map((link) => {
      const { id, text, url } = link
      return (
       <li key={id}>
        <Link to={url}> {text} </Link>
       </li>
      )
     })}
    </ul>
   </div>
  </NavContainer>
 )
}

const NavContainer = styled.nav`
 height: 10rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px 5px;

 .logo {
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;

  position: relative;
 }
 .faIcon:hover {
  opacity: 0.3;
 }
 .nav-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
 }

 .nav-header {
  display: flex;
  align-items: center;
 }
 .nav-toggle {
  background: transparent;
  border: transparent;
  color: black;
  cursor: pointer;
  svg {
   font-size: 2rem;
  }
 }
 .camera-toggle {
  background: transparent;
  border: transparent;
  color: var(--cltr-primary-5);

  cursor: pointer;
  svg {
   font-size: 2rem;
  }
 }

 .nav-links {
  display: none;
 }

 .nav-links a {
  text-transform: capitalize;
  text-align: center;
  display: inline-block;
  font-weight: bold;
  margin-right: 0.5rem;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 1.2rem;

  transition: var(--mainTransition);
 }
 .nav-links a:hover {
  color: var(--primaryColor);
 }

 .btn:hover {
  opacity: 0.3;
 }

 @media (min-width: 576px) {
 }

 @media only screen and (max-width: 600px) {
  .logo-div {
   width: 325px;
   height: 150px;
   border-radius: 20%;
  }

  h4 {
   font-size: 0.6rem;
   margin-top: 0.5rem;
  }
 }

 @media only screen and (min-width: 600px) {
  .logo-div {
   width: 345px;
   height: 165px;
   border-radius: 20%;
  }
  h4 {
   font-size: 0.8rem;
   margin-top: 0.5rem;
  }
 }

 @media only screen and (min-width: 768px) {
  .logo-div {
   width: 385px;
   height: 175px;
  }
  .nav-links {
   grid-column: 1/3;
   grid-row: 2/3;
  }

  h4 {
   font-size: 1.2rem;
   margin-top: 0.5rem;
  }
 }

 @media (min-width: 1050px) {
  height: 16rem;

  .logo-div {
   grid-row: 2/3;
   grid-column: 1/3;
   width: 575px;
   height: 165px;
   margin-left: 15rem;
  }
  .nav-toggle {
   display: none;
  }

  .modal-overlay {
   display: none;
  }
  .show-modal {
   display: none;
  }
  .modal-container {
   display: none;
  }
  .close-modal-btn {
   display: none;
  }
  .nav-center {
   display: grid;
   grid-template-columns: auto 1fr auto;
   align-items: center;
   justify-content: center;
   grid-gap: 0.5rem;
  }
  .search-input {
   width: 30rem;
  }
  /* .nav-links {
   grid-column: 1/2;
   grid-row: 1/2;
  } */

  /* .social-icons {
   padding: 0.15rem;
   display: grid;
   justify-content: center;
   align-items: center;
   grid-column: 1/2;
   grid-row: 1/2;
   background-color: red;

   h4 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
   }
  } */
  /* .social-icons {
   display: flex;
   li {
    margin-left: 1rem;
   }
  }
  .social-icons a {
   color: black;
  }
  .social-icons a:hover {
   color: grey;
  } */
  .nav-links {
   display: flex;
   justify-content: center;
   grid-column: 1/3;
   grid-row: 1/2;

   li {
    margin: 0 0.5rem;
   }
   a {
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    padding: 0.5rem;
    &:hover {
     border-bottom: 2px solid var(--clr-primary-7);
    }
   }
  }
 }

 @media (min-width: 1280px) {
  height: 16rem;
  .logo-div {
   grid-row: 2/3;
   grid-column: 1/3;
   width: 545px;
   height: 145px;
   margin-left: 15rem;
  }
  .nav-links {
   grid-column: 1/3;
   grid-row: 3/4;
  }

  h4 {
   font-size: 1.2rem;
   margin-top: 0.5rem;
  }
 }
`
