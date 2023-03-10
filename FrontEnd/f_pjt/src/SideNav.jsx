import { React, useState } from 'react';
import { NavLink } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMartiniGlassCitrus, faGamepad, faClipboardList } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux"
import Modal from '@mui/material/Modal';
import ShotModal from "./components/ShotModal";
import { makeCocktail, stopMakeCocktail } from './store';
import { checkConnection } from './socket';



function SideNav() {
    const ratio = useSelector((state)=>state.ratio)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    

    const cancel = ()=>{
      dispatch(stopMakeCocktail())
    }

    const make = () => {
      dispatch(makeCocktail([ratio[0].rate,ratio[1].rate,ratio[2].rate,ratio[3].rate]))
    }
    
  return (
    <Bar>
    <Side>
      <NavStyle to="/game" >
      <FontAwesomeIcon icon= { faGamepad }/>
      </NavStyle>
      <NavStyle to="/drink">
        <FontAwesomeIcon icon={ faMartiniGlassCitrus }/>
      </NavStyle>
      <Shot 
        onClick={async ()=>{
          if(checkConnection()){
            make()
            handleOpen()
          }
          // setTimeout(function(){handleClose()},5000)
      }}>
        SHOT!</Shot>
        <Modal
        open={open}
        // onClose={handleClose}
      >
       <ShotModal handleClose = {handleClose} cancel = { cancel }
        />
      </Modal>
      <NavStyle to="/recipe">
        <FontAwesomeIcon icon = { faClipboardList }/>
      </NavStyle>
    </Side>
    </Bar>
  );
}

const jittery = keyframes`
5%,
  50% {
    transform: scale(1);
  }

  10% {
    transform: scale(0.9);
  }

  15% {
    transform: scale(1.15);
  }

  20% {
    transform: scale(1.15) rotate(-5deg);
  }

  25% {
    transform: scale(1.15) rotate(5deg);
  }

  30% {
    transform: scale(1.15) rotate(-3deg);
  }

  35% {
    transform: scale(1.15) rotate(2deg);
  }

  40% {
    transform: scale(1.15) rotate(0);
  }
`
const Bar = styled.div`
  display: flex;
  background: #004680;
`
const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center ;
  justify-content: space-evenly;
  width: 20vh;
  height : 100vh;
  background: #004680;
`
const NavStyle = styled(NavLink)`
  display: flex;
  align-items: center ;
  justify-content: center;
  color: white;
  padding: 2vh;
  font-size: 8vh;
  &:link {
    transition : 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: lightyellow;
    filter: drop-shadow(0.6vh 0.6vh 0.3vh rgb(0 0 0 / 0.6));
  }
  &.active {
    filter: drop-shadow(0.6vh 0.6vh 0.3vh rgb(0 0 0 / 0.6));
    color: #FAE59C;
    position: relative;
    top: 1vh;
    border-bottom: 1vh solid #FAE59C;
  }
`

const Shot = styled.div`
  font-family: 'Jua', sans-serif;
  font-weight : bold;
  font-style: normal;
  font-size: 6vh;
  color: #ffffff;
  align-items: center ;
  justify-content: center;
  color: white;
  /* animation: ${jittery} 10s infinite; */
  padding: 2vh;
  &:hover {
    filter: drop-shadow(0.6vh 0.6vh 0.3vh rgb(0 0 0 / 0.6));
    /* color: #BB2649; */
  }
`
// const Img = styled.img`
//   width: 10vh;
// `
export default SideNav;
