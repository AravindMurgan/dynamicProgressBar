import { useState } from "react";
import React from "react";

function FunctionForm() {
  const [state, setState] = useState({
    title: "",
    body: "",
    topic: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${state.title} ${state.body} ${state.topic}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <br />
        <input
          type="text"
          value={state.title}
          onChange={(e) => {
            setState({
              ...state,
              title: e.target.value
            });
          }}
        />
      </div>
      <br />
      <div>
        <label>Body</label>
        <br />
        <textarea
          value={state.body}
          onChange={(e) => {
            setState({
              ...state,
              body: e.target.value
            });
          }}
        />
      </div>

      <select
        value={state.topic}
        onChange={(e) => {
          setState({
            ...state,
            topic: e.target.value
          });
        }}
      >
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </select>

      <button type="submit">Submit </button>
    </form>
  );
}

export default FunctionForm;
