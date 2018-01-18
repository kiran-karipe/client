import React from 'react';

class UserForm extends React.Component {
  constructor() {
    super();
    // Always try to set the default empty state.
    this.state = {
      firstName: '',
      lastName: '',
      dateOfBirth: ''
    };

    // this is to make sure that handleChange is always called in the context of this component
    // and not where it was called.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this method is called when any of the form fields are changed.
  // event.target.name contains the field changed
  // event.target.value contains the vaule of that field
  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    // Prevent default is stops the page from reloading.
    // because form looks for action prop and tries to submit as a regular form submit
    // But here we need to submit asynchronously
    event.preventDefault();
    // We need to pass the new user details from form
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      // this.handleSubmit is called when the form is submitted.
      <form onSubmit={ this.handleSubmit }>
        <label>FirstName: </label>
        <input name = "firstName" type = "text" value = {this.state.firstName} onChange={this.handleChange} />
        <br />
        <label>LastName: </label>
        <input name = "lastName" type = "text" value = {this.state.lastName} onChange={this.handleChange} />
        <br />
        <label>DateOfBirth:</label>
        <input name = "dateOfBirth" type = "date" value = {this.state.dateOfBirth} onChange={this.handleChange} />
        <br />
        <input type = "submit" value="Submit" />
      </form>
    );
  }
}

export default UserForm;
