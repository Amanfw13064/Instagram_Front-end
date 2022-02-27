import React, { Component } from "react";
import "./Content.css";
import { Grid } from "@mui/material";
import {Stories} from "../Stories/Story";
import {MainPosts} from "../MainPostCont/MainPosts";
import {InfoSidebar} from "../InfoSideBar/Info";
import {Suggestion} from "../Suggestions/Suggestion";
// import useMediaQuery from '@mui/material/useMediaQuery';
import { useMediaQuery } from "../mediaQueries/Media";

const Content = () => {
  let isPageWide = useMediaQuery("(max-width: 1024px)");
  // let lowGrid = useMediaQuery("(min-width: 1174px)");
  let IncMargin = useMediaQuery("(max-width: 1287px)");
  let rightmarg = useMediaQuery("(max-width: 1105px)");
  // let rightmarg1 = useMediaQuery("(max-width: 1079px)");

  console.log(isPageWide);
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid marginRight={IncMargin?"75px":"-52px"}item xs={6}>
      
        <div>
          <Stories />

          <MainPosts />
        </div>
      </Grid>


      <Grid id="suggestion-div" display ={rightmarg? "none":"block"} item xs={3}>

    
         <InfoSidebar />
        <Suggestion />
     
       
      </Grid>

      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Content;
