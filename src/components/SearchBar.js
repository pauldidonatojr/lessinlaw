import * as React from 'react'

import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

export default function PrimarySearchAppBar() {
 return (
  <Wrapper className="searchbar-1">
   <div className="div-1">
    <ul>
     <li> Safety</li>
     <li> Resources </li>
                 <li> Complaints </li>
                 
     <li className="li4"> Emergencies</li>
    </ul>
   </div>

   <div className="div-3">
    <form className="search-form">
     <input type="text" placeholder="search" className="form-input" />
     <button type="submit" className="submit-btn">
      <FaSearch />
     </button>
    </form>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 background-color: #4d4dff;
 display: flex;
 padding: 0.5rem;
 justify-content: center;

 @media screen and (max-width: 992px) {
  display: grid;
  .div-3 {
   display: none;
  }
 }
 .div-1 {
  flex: 1;
  ul {
   display: flex;
   justify-content: 'center';
   li {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 0.85rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: var(--clr-primary-10);
   }
   li:hover {
    color: black;
    box-shadow: 0 2px var(--clr-primary-10);
   }
   .li4 {
    display: none;
   }
  }
 }
 .div-2 {
  flex: 1;
  display: flex;
  h3 {
   font-size: 2rem;
  }
  h3:hover {
   color: black;
   box-shadow: 0 4px var(--clr-primary-10);
  }
  p {
   color: black;
  }
 }
 .div-3 {
  .search-form {
   display: flex;
   justify-content: center;
  }

  .form-input,
  .submit-btn {
   padding: 0.03rem 0.4rem;
   border: none;
   text-transform: capitalize;
   letter-spacing: var(--spacing);
   font-size: 1.5rem;
   color: black;
   border-bottom: 3px solid var(--clr-grey-5);
  }
  .form-input {
   color: var(--clr-grey-3);
  }
  .form-input::placeholder {
   color: var(--clr-grey-5);
  }
 }
`
