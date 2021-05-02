import { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      topic: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.title} ${this.state.body} ${this.state.topic}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Title</label>
          <br />
          <input
            type="text"
            value={this.title}
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label>Body</label>
          <br />
          <textarea
            value={this.body}
            onChange={(e) => {
              this.setState({ body: e.target.value });
            }}
          />
        </div>

        <select
          value={this.topic}
          onChange={(e) => {
            this.setState({ topic: e.target.value });
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
}

export default ClassForm;
