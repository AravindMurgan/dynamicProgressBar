import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch() {
  const [post, myPost] = useState([]);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [idFromButton, setIdFromButton] = useState(1);

  const handleClick = () => {
    setIdFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => myPost(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
    console.log(post);
    console.log("useEffect triggered");
  }, [idFromButton]);

  // const myHeader= posts.map(post => (
  //   <header key={post.id} >
  //     <h3>{post.title}</h3>
  //     <p>{post.body} </p>
  //   </header>
  // ))

  // const inputHeader= id.map(item => (
  //   <header key={item.id} >
  //     <h3>{item.title}</h3>
  //     <p>{item.body} </p>
  //   </header>
  // ))

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        FetchPost
      </button>
      <br />
      <br />
      {post.title}
      {/* {
       loading ? "Loading ..." : (
         <h3>{post.title}</h3>
       )
      } */}
    </div>
  );
}

export default DataFetch;
