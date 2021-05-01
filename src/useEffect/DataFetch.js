import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetch() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => setFeeds(res))
      .catch((err) => console.log(err));
    setLoading(false);
    console.log(feeds);
  }, []);

  return <div>Hi</div>;
}

export default DataFetch;
