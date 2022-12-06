import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useModalContext } from '../context/modal_context'
import Contact from './Contact'

const Hero = () => {
 const { openModal } = useModalContext()

 const { isModalOpen, closeModal } = useModalContext()


 return (
  <Wrapper>
   <div className="content">
    <img
     className="img-content"
     src="https://res.cloudinary.com/elpawl-llc/image/upload/v1657311447/lessin_law-logos_yddbqn.jpg"
    />

    <button type="button" className="submit-btn" onClick={openModal}>
     Contact us today
    </button>
   </div>
   <div
    className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}
   >
    <div className="modal-container">
     <button className="close-modal-btn" onClick={closeModal}>
      <FaWindowClose style={{position:'relative', zIndex: '1'}}></FaWindowClose>
     </button>
     <Contact/>
    </div>
   </div>
  </Wrapper>
 )
}



const Wrapper = styled.section`
 display: grid;
 align-items: center;
 background-color: rgb(20, 39, 79);
 /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1650559874/generic_4_nzua4y.jpg')
  no-repeat center center;
 background-size: cover; */
 height: 130vh;
 width: 100%;
 .modal-container {
  background: transparent;
  border-radius: var(--radius);
  height: 75vh;
  max-width: var(--fixed-width);
  text-align: center;
  display: flex;
  place-items: center;
  position: absolute;
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
 input {
  text-align: center;
  font-family: roboto;
 }
 .section-center {
  background-color: var(--clr-primary-1);
  transition: var(--transition);
 }
 .content {
  display: grid;
  justify-content: center;
  text-align: center;
  color: #fff;
  transition: var(--transition);
  p {
   color: #fff;
   font-size: 1.5rem;
   text-transform: capitalize;
  }
 }
 .contact-form {
  display: grid;
  justify-content: center;
  align-items: center;
 }

 .form-input,
 .submit-btn {
  border: 2px solid var(--clr-black);
 }
 .form-input {
  color: var(--clr-black);
 }
 /* .submit-btn {
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
 } */
 .form-input::placeholder {
  color: var(--clr-black);
  text-transform: capitalize;
 }
 .submit-btn {
  background: var(--clr-black);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  color: var(--clr-grey-9);
 }
 .submit-btn:hover {
  color: var(--clr-white);
 }
 .btn {
  background: var(--clr-grey-5);
  color: var(--clr-bcg);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  border-color: transparent;
  text-transform: capitalize;
  transition: all 0.3s linear;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
 }

 .btn,
 .btn-white,
 .btn-primary {
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  color: var(--clr-font);
  border: 2px solid var(--clr-primary);
  padding: 0.45rem 0.8rem;
  display: inline-block;
  transition: var(--Transition);
  cursor: pointer;
  font-size: 0.8rem;

  border-radius: var(--mainBorderRadius);
  border-color: transparent;
 }
 .btn:hover {
  background: var(--clr-bcg);
  color: var(--clr-font);
 }
 @media (min-width: 576px) {
  .section-center {
   border-radius: 2%;
   height: 60vh;
   background-color: blue;
  }
  .header {
   font-size: 2.15rem;
  }
  .content {
   height: 40vh;
  }
 }
 @media only screen and (max-width: 600px) {
  height: 80vh;
  display: grid;
  justify-content: grid;
  align-items: center;

  .header {
   font-size: 1rem;
   margin-bottom: 5rem;
  }
  .submit-btn {
   font-size: 1.2rem;
   padding: 0.5rem 0.5rem;
  }
  .content {
   width: 100%;
   height: 70vh;
   display: grid;
   align-items: center;
   justify-content: center;
  }
  .img-content {
   width: 35vh;
   height: 40vh;
   padding: 1rem;
  }
 }
 @media only screen and (min-width: 600px) {
  height: 80vh;
  display: grid;
  justify-content: grid;
  align-items: center;

  .header {
   font-size: 1rem;
   margin-bottom: 5rem;
  }
  .submit-btn {
   font-size: 1.2rem;
   padding: 0.5rem 0.5rem;
  }
  .content {
   width: 100%;
   height: 70vh;
   display: grid;
   align-items: center;
   justify-content: center;
  }
  .img-content {
   width: 35vh;
   height: 40vh;
   padding: 1rem;
  }
 }

 @media only screen and (min-width: 768px) {
  height: 80vh;
  display: grid;
  justify-content: grid;
  align-items: center;

  .header {
   font-size: 1rem;
   margin-bottom: 5rem;
  }
  .submit-btn {
   font-size: 1.2rem;
   padding: 0.5rem 0.5rem;
  }
  .content {
   width: 100%;
   height: 70vh;
   display: grid;
   align-items: center;
   justify-content: center;
  }
  .img-content {
   width: 35vh;
   height: 40vh;
   padding: 1rem;
  }
 }

 @media (min-width: 992px) {
  height: 80vh;
  display: grid;
  justify-content: grid;
  align-items: center;

  .header {
   font-size: 1rem;
   margin-bottom: 5rem;
  }
  .submit-btn {
   font-size: 1.2rem;
   padding: 0.5rem 0.5rem;
  }
  .content {
   width: 100%;
   height: 70vh;
   display: grid;
   align-items: center;
   justify-content: center;
  }
  .img-content {
   width: 35vh;
   height: 40vh;
   padding: 1rem;
  }
 }
 @media (min-width: 1280px) {
  height: 80vh;
  display: grid;
  justify-content: grid;
  align-items: center;

  .header {
   font-size: 1rem;
   margin-bottom: 5rem;
  }
  .submit-btn {
   font-size: 1.2rem;
   padding: 0.5rem 0.5rem;
  }
  .content {
   width: 100%;
   height: 70vh;
   display: grid;
   align-items: center;
   justify-content: center;
  }
  .img-content {
   width: 35vh;
   height: 40vh;
   padding: 1rem;
  }
 }
`


const CardWrapper = styled.section`
align-items: center;
background-color:transparent;
display: flex;
justify-content: center;
height: 100vh;

 .form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: 500px;
    padding: 20px;
    width: 320px;
  }
  
  .title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }
  
  .subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }
  
  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }
  
  .ic1 {
    margin-top: 40px;
  }
  
  .ic2 {
    margin-top: 30px;
  }
  
  .input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }
  
  .cut {
    background-color: #15172b;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }
  
  .cut-short {
    width: 50px;
  }
  
  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }
  
  .placeholder {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }
  
  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }
  
  .input:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
  }
  
  .input:focus ~ .placeholder {
    color: #dc2f55;
  }
  
  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    // outline: 0;
    text-align: center;
    width: 100%;
  }
  
  .submit:active {
    background-color: #06b;
  }
`

export default Hero
