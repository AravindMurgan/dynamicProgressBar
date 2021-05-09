import React, { useState } from "react";

function FormHandling() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    alert(state.username);
  };

  return (
    <div>
      <h3> Form Handling </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={state.username}
            onChange={(e) =>
              setState({
                ...state,
                username: e.target.value
              })
            }
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              setState({
                ...state,
                email: e.target.value
              })
            }
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={state.password}
            onChange={(e) => (e) =>
              setState({
                ...state,
                password: e.target.value
              })}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormHandling;
