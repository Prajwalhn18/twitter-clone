import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { PostAddSharp } from "@material-ui/icons";

function Feed() {
  const [posts, setPosts] = useState([]);
  const usersCollectionRef = collection(db, "Posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log("From firestore:", data);

      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h1>Home</h1>
      </div>
      {/* Tweet-box */}
      <TweetBox></TweetBox>

      {/* post */}
      {posts.map((post) => (
        <Post
          displayName={post.username}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
        />
      ))}

      {/* post */}
      {/* post */}
      {/* post */}
    </div>
  );
}
export default Feed;
