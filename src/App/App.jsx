import { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { v4 as uuIdv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleSetContacts(name, number) {
    this.setState((prevState) => {
      const { contacts } = prevState;

      if (contacts.find((contact) => contact.name === name))
        return alert(`${name} is already in contacts`);

      return { contacts: [...contacts, { id: uuIdv4(), name, number }] };
    });
  }

  handleDelateContacts(id) {
    this.setState((prevState) => {
      const { contacts } = prevState;
      const updatedContacts = contacts.filter((contact) => contact.id !== id);

      return { contacts: [...updatedContacts] };
    });
  }

  handleFilter = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          onSetContacts={this.handleSetContacts.bind(this)}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelateContacts={this.handleDelateContacts.bind(this)}
        />
      </div>
    );
  }
}

export default App;
