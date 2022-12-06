<<<<<<< Updated upstream
import React from 'react'

function Article() {
 return (
  <div style={{ backgroundColor: 'red', height: '70vh', width: '100%' }}>
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
     <h1> Article </h1>
     <h2>Content</h2>
    </div>
   </div>
  </div>
 )
=======
import React, { useState } from 'react'
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';

function Article() {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


  const card = (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="./dining.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Article
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1515 Market Street, Suite 1650 | Philadelphia, PA 19102 | Phone:
            (215) 599-1400 | Fax: 215-599-0120
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Directions </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  )

  return (

    <Wrapper>
      <div className='image-holder'>
        <img src='./Books.jpg' style={{ position: 'absolute', width: '100%', height: '70vh', top: '0px', left: '0px', objectFit: 'cover' }}></img>
        <div
          className='info-holder'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

          <div className='article-holder'
            onClick={handleToggle}
          >
            <h2 style={{opacity: '1'}}> Article </h2>
          </div>
        </div>
      </div>

      <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
              open={open}
              onClick={handleClose}>
              <Card variant="outlined">{card}</Card>
      </Backdrop>
      
    </Wrapper>
  )
>>>>>>> Stashed changes
}

export default Article

const Wrapper = styled.footer`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
height: 70vh;
width: 100%;
position: relative;
display: grid;

.image-holder{
  display: grid;
  justify-content: center;
  align-items: center; 
  width: 100%;
}

.info-holder{
  display: grid;
  position: absolute;
  height: 50%;
  width: 100%;
  background-color: black;
  justify-content: center;
  place-content: center;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08),0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14);
  z-index: 1;
  opacity: 0.7;
}

.article-holder{
    height: 100%;
    width: 100%;
    color: white;
    borderBottom: 2px solid #dadada;
    borderColor: 'white';
    opacity: 1;
}

.article-holder:hover{
  borderColor: white;
}`;
