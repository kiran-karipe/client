import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

class UserDashboard extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.handleCreate = this.handleCreate.bind(this);
  }

  // componentDidMount is called after the render is finished.
  // This means that the component is first rendered with emtpy default state.
  // And this method is updating the state with this.setState.
  // this.setState always renders the compoent again.
  componentDidMount() {
    // here we are trying to get the data from the backend server.
    // fetch method here resolves a promise if the call is successful
    fetch('http://localhost:5000/users')
    // this will return the response from the backend.
    // And the backend response body is converted to json response.
      .then((response) => {
        return response.json();
      })
      // this response object contains a users array under `users` keys
      // We are now updating the state using setState from backend response.
      .then((response) => {
        this.setState({
          users: response.users
        });
      })
      // .catch will catch the exception if the call to backend fails.
      .catch((error) => {
        console.log(error);
      });
  }

  // handleCreate is passed as a prop to UserForm.
  // Whenever a submit button is clicked this method is called.
  // UserFrom passes the newUser object from UserForm
  handleCreate(newUser) {
    console.log(newUser);
    // fetch makes a POST request to /users to create a new user
    // We are setting headers to communicate using json request and response
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        // client can understand the response in application/json format
        'Accept': 'application/json',
        // client is telling the server what type of data it is sending to the server
        'Content-Type': 'application/json',
      },
      // We are convering object to JSON string
      body: JSON.stringify(newUser)
    })
    // the backend server sends a response which contains the newUser object.
    // We are converting JSON string to object
    .then((response) => {
      return response.json();
    })
    // Finally we need to append the newly created user to the existing users list in our state
    .then((response) => {
      this.setState({
        users: this.state.users.concat(response.user)
      })
    })
    // .catch will catch the exception if the call to backend fails.
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      // render should return a single node.
      // That's why we are wrapping the items in a div
      <div>
        {/* Calling UserForm component with onSubmit prop */}
        <UserForm onSubmit={this.handleCreate}/>
        {/* Calling UserList component with users prop */}
        <UserList users={this.state.users}/>
      </div>
    );
  }
}

export default UserDashboard;
