import { useState, useEffect } from "react";
import axios from "axios"; 
import "./Container.css"

const Container = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
 {posts.map((post) => {
     return (
         <div className="All" key={post.id}> 
           <h5  className="Post">{post.userId}</h5>
           <h4 className="Title">{post.title}</h4>
           <br/>
           <h5 className="body">{post.body}</h5>
           <br/>
         </div>
     )
 }
 )}
    </div>
  );
};

export default Container;