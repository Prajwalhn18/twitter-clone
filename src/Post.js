import React from "react";
import "./Post.css";
import { Avatar} from "@material-ui/core"; 
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({displayName,username,verified,text,avatr}){
    
    return(
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_960_720.png"></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Prajs
                        <span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge"/>@prajs
                        </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
              <p>First Tweet on clone</p>
            </div>
                </div>
                <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
            </div>

        </div>
    );
}

export default Post;