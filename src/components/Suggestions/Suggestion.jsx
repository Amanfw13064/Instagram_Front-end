import React, { Component } from "react";
import "./Suggetion.css";
import { Avatar, Grid } from "@mui/material";

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="suggestion-container">


            <Grid className="Grid-Sugg" container>
               <Grid item xs={6}>
                   <div className="suggestion-text">Suggestions for you</div>

               
               </Grid>
                <Grid item xs={6}>
                  <div className="suggestion-text2">See all</div>
                </Grid>
            
            </Grid>       
        
          <div className="suggestions-list">
           
           
            <div className="suggestion-avtx">
              <Grid container>
                <Grid display="flex" item xs={6}>
                  <Avatar className="suggested-avatar" src="" />
                  <div className="suggest-text">Freind 1</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="follow-text">Follow</div>
                </Grid>
              </Grid>
            </div>
          

           <div className="suggestion-avtx">
              <Grid container>
                <Grid display="flex" item xs={6}>
                  <Avatar className="suggested-avatar" src="" />
                  <div className="suggest-text">Freind 1</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="follow-text">Follow</div>
                </Grid>
              </Grid>
            </div>

             <div className="suggestion-avtx">
              <Grid container>
                <Grid display="flex" item xs={6}>
                  <Avatar className="suggested-avatar" src="" />
                  <div className="suggest-text">Freind 1</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="follow-text">Follow</div>
                </Grid>
              </Grid>
            </div>

             <div className="suggestion-avtx">
              <Grid container>
                <Grid display="flex" item xs={6}>
                  <Avatar className="suggested-avatar" src="" />
                  <div className="suggest-text">Freind 1</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="follow-text">Follow</div>
                </Grid>
              </Grid>
            </div>

             <div className="suggestion-avtx">
              <Grid container>
                <Grid display="flex" item xs={6}>
                  <Avatar className="suggested-avatar" src="" />
                  <div className="suggest-text">Freind 1</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="follow-text">Follow</div>
                </Grid>
              </Grid>
            </div>
          
          
          
          
          
          </div>
        </div>
      </div>
    );
  }
}
export default Suggestion;
