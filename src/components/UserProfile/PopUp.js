import React from "react";
import styled from 'styled-components';
import "./Popup.css"
 
const Popup = props => {
  return (
      <Container>
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
    </Container>
  );
};
 
export default Popup;

const Container = styled.div`
border: none


`