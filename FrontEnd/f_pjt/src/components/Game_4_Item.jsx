import styled from "styled-components";
import { React, useState } from 'react';

function GameItem4() {
  return (
    <><TopDiv>
    <Waiting>1</Waiting>
    <Waiting>2</Waiting>
    <Waiting>3</Waiting>
    <Waiting>4</Waiting>
    </TopDiv>
    </>
    )
  }
  const TopDiv = styled.div`
  display : flex;
  flex-wrap: wrap;
  width : 100%
  `
  const Waiting = styled.div`
  display : flex;
  justify-content: center;
  align-items: center ;
  flex: 1 1 50%;
  align-items: center ;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background : blue;
  border : black;
  background: #ffffff;
  box-shadow: 0 0 4px #F4E5B2 inset;
  box-sizing: border-box;
  `
export default GameItem4