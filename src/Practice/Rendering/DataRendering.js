import React, { useState, useEffect } from "react";
import axios from "axios";

function DataRendering() {
  const [laoding, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Something is Wrong" + err));
    setLoading(false);
    console.log(data);
  }, []);

  const myFeeds = data.map((feed) => (
    <div key={feed.id}>
      <h3> {feed.name}</h3>
    </div>
  ));

  return <div>{laoding ? "Loading..." : myFeeds}</div>;
}

export default DataRendering;
