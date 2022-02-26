import React from "react";
import styled from 'styled-components';
import "./UploadPopup.css"

 
const Upload = props => {
  return (
      <Container>
    <div className="upload-box">
      <div className="upPopup">
        <span className="upload-close" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
    </Container>
  );
};
 
export default Upload;

const Container = styled.div`
border: none


`