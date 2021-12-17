import React from "react";
import "./TweetBox.css"; 
import { Avatar, Button } from "@material-ui/core";   

function TweetBox(){
    return(
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_960_720.png"></Avatar>
                    <input placeholder="what's happening?"/>
                </div>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}
export default TweetBox;