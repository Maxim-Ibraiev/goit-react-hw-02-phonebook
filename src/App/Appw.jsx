import { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      name: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState((prevState) => {
      const { name, contacts } = prevState;
      return { contacts: [...contacts, name] };
    });
  };

  render() {
    return (
      <main>
        <ContactForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        ></ContactForm>
      </main>
    );
  }
}
