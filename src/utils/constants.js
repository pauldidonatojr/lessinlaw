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
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1650558637/house_qxpp71.jpg',
  icon: <GiCompass />,
  title: 'what we do?',
  text:
   'We lease your home and rent it out as short term rentals on sites such as AirBnb.',
 },
 {
  id: 2,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1650558637/generic_1_o2z5hb.jpg',

  icon: <GiDiamondHard />,
  title: 'benefits to you.',
  text: `
   Free Property Management.
   Save Money on Insurance.
   Better than the Ordinary Tennant.
   And More.....`,
 },
 {
  id: 3,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1652561273/Vacation-Rental-Websites-The-Comprehensive-Guide_h8w2ho.jpg',
  icon: <GiStabbedNote />,
  title: "We Can Do What Other Won't",
  text: `House Utilities controlled Remotely.
Outside Cameras for Added Security.
Cleaning Crew after Each Rental.
Minor Repairs done at Our Expense.
`,
 },
 {
  id: 4,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1650558637/generic_3_saiwdi.jpg',
  icon: <GiStabbedNote />,
  title: 'our commitment.',
  text: `Never have to worry about your lease being paid on time. We love what we do and our Landlords get a house that will be maintained better than they could ever hope for.`,
 },
]
export const Reviews = [
 {
  id: 1,
  image:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_2_tiyzm1.webp',
  text: `You have options when it comes to renting your home, but most people know
       about it.`,
 },
 {
  id: 2,
  image:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_1_rfakam.jpg',
  text: ` Renting your house doesn't have to be a succession of hope and
       disappointment with each tennant you approve.`,
 },
 {
  id: 3,
  image:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_4_ajsjwl.jpg',
  text: `When you work with us, you
       get a hassle and worry free experience that makes your life so much
       easier. That is our guarantee!!!`,
 },
]
export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
