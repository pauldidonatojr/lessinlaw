import React from 'react'

function Section() {
 return (
  <div style={{ backgroundColor: 'purple', height: '70vh', width: '100%' }}>
   <div
    style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}
   >
    <div
     style={{
      height: '40vh',
      width: '40vh',
      backgroundColor: 'lightblue',
      marginTop: '10rem',
     }}
    >
     <h1> Section </h1>
     <h2>Content</h2>
    </div>
   </div>
  </div>
 )
}

export default Section
