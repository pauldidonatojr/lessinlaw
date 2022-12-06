import * as React from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { Typography, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const useStyles = makeStyles(theme => ({
    List_1: {
        width: '500px', 
        height: '100%',
        bgcolor: 'background.black', 
        position: 'relative'
      },
    
    "@media (max-width: 600px)": {
      List_1: {
        width: '300px', 
      }
    }
}));


export default function PrimarySearchAppBar() {


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
 return (
  <Wrapper className="searchbar-1">
   {/* <div className="div-1">
    <ul>
     <li> motor vehicle </li>
     <li> slip and fall </li>
     <li> fire loss </li>

     <li className="li4"> Emergencies</li>
     <li> workplace accidents</li>
     <li> medical malpractice </li>
     <li> wrongful death claims </li>

     <li className="li4"> Emergencies</li>
    </ul>
   </div> */}


<div>
   <List
      className={classes.List_1}
      component="nav"
    >
       
      <ListItemButton onClick={handleClick} sx={{ color: 'white' }}>
        <ListItemIcon>
          <InboxIcon sx={{ color: 'white' }}/>
        </ListItemIcon>
        <ListItemText primary="Options" sx={{ color: 'white' }}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{ color: 'white' }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{ color: 'white' }}/>
            </ListItemIcon>
            <ListItemText primary="Motor Vehicle" />
          </ListItemButton>


          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{ color: 'white' }}/>
            </ListItemIcon>
            <ListItemText primary="Slip and Fall" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{ color: 'white' }}/>
            </ListItemIcon>
            <ListItemText primary="fire loss" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{ color: 'white' }}/>
            </ListItemIcon>
            <ListItemText primary="Emergencies" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{ color: 'white' }}/>
            </ListItemIcon>
            <ListItemText primary="workplace accidents" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{ color: 'white' }}/>
            </ListItemIcon>
            <ListItemText primary="medical malpractice" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder sx={{ color: 'white' }}/>
            </ListItemIcon>
            <ListItemText primary="wrongful death claims" />
          </ListItemButton>

        </List>
      </Collapse>
    </List>
    </div>

   {/* <div className="div-3">
    <form className="search-form">
     <input type="text" placeholder="search" className="form-input" />
     <button type="submit" className="submit-btn">
      <FaSearch />
     </button>
    </form>
   </div> */}
  </Wrapper>
 )
}

const Wrapper = styled.div`
 background-color: var(--clr-black);
 display: flex;
 padding: 0.5rem;
 justify-content: center;


 .List-1{
        
 }

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
    color: white;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 0.60rem;
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: var(--clr-primary-10);
   }
   li:hover {
    color: white;
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
   font-size: 0.5rem;
   color: black;
   border-bottom: 3px solid var(--clr-grey-5);
  }
  .form-input {
   color: var(--clr-grey-3);
  }
  .form-input::placeholder {
   color: var(--clr-grey-5);
  }

 @media only screen and (min-width: 600px) {
      .div-1 {
         ul {
             li{
                font-size: 1rem;
             }
         }
     }
 }


`
