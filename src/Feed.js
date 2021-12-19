import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { PostAddSharp } from "@material-ui/icons";

function Feed(){
    return(
        <div className="feed">
            <div className="feed__header">
            <h1>Home</h1>

            </div>
            {/* Tweet-box */}
            <TweetBox></TweetBox>

            {/* post */}
           <Post/>
            {/* post */}
            {/* post */}
            {/* post */}

        </div>
    );
}
export default Feed;