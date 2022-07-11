import React from 'react'
import {
 FaBehance,
 FaFacebook,
 FaYoutube,
 FaTwitter,
 FaGoogle,
} from 'react-icons/fa'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
 {
  id: 0,
  text: 'Firm Overview',
  url: '/about',
 },

 {
  id: 1,
  text: 'Practice Areas Overview',
  url: '/videos',
 },
 {
  id: 2,
  text: 'Attorney Profiles',
  url: '/contact',
 },
 {
  id: 3,
  text: 'Resource Links',
  url: '/Addfood',
 },
 {
  id: 4,
  text: 'Communities',
  url: '/Addfood',
 },
 {
  id: 5,
  text: 'Contact Us',
  url: '/Addfood',
 },
]

export const services = [
 {
  id: 1,
  icon: <GiCompass />,
  title: 'mission',
  text:
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
 },
 {
  id: 2,
  icon: <GiDiamondHard />,
  title: 'vision',
  text:
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
 },
 {
  id: 3,
  icon: <GiStabbedNote />,
  title: 'history',
  text:
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
 },
]
export const social = [
 {
  id: 1,
  url: 'https://www.twitter.com',
  icon: <FaFacebook />,
 },
 {
  id: 2,
  url: 'https://www.twitter.com',
  icon: <FaTwitter />,
 },
 {
  id: 3,
  url: 'https://www.twitter.com',
  icon: <FaGoogle />,
 },
 {
  id: 4,
  url: 'https://www.twitter.com',
  icon: <FaYoutube />,
 },
]

export const profiles = [
 {
  id: 1,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1657481537/lawyer3_d9h9li.jpg',
  icon: <GiCompass />,
  title: 'Jeffrey Lessin',
  text:
   'We lease your home and rent it out as short term rentals on sites such as AirBnb.',
 },
 {
  id: 2,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1657481537/lawyer2_hpffed.jpg',

  icon: <GiDiamondHard />,
  title: 'Mark T. Richter',
  text: `
   Free Property Management.
   Save Money on Insurance.
   Better than the Ordinary Tennant.
   And More.....`,
 },
 {
  id: 3,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1657481537/lawyer1_lqnbws.webp',
  icon: <GiStabbedNote />,
  title: 'James Murphy',
  text: `House Utilities controlled Remotely.
Outside Cameras for Added Security.
Cleaning Crew after Each Rental.
Minor Repairs done at Our Expense.
`,
 },
 //  {
 //   id: 4,
 //   logo:
 //   icon: <GiStabbedNote />,
 //   title: 'our commitment.',
 //   text: `Never have to worry about your lease being paid on time. We love what we do and our Landlords get a house that will be maintained better than they could ever hope for.`,
 //  },
]
export const Reviews = [
 {
  id: 1,
  image:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_2_tiyzm1.webp',
  text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi`,
 },
 {
  id: 2,
  image:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_1_rfakam.jpg',
  text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi`,
 },
 {
  id: 3,
  image:
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  text: `When you work with us, you
       get a hassle and worry free experience that makes your life so much
       easier. That is our guarantee!!!`,
 },
]
export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
