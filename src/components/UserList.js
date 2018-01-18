import React, { Component } from 'react';
import User from './User';

// Component is a named export and React is a default export of 'react' module.
// A module can have only one default export. Can have multiple named exports.
class UserList extends Component {
  // componentWillMount() {
  //   console.log('Inside componentWillMount');
  // }

  //
  // componentDidMount() {
  //   console.log('Inside componentDidMount');
  // }
  //
  // componentWillReceiveProps() {
  //   console.log('Inside componentWillReceiveProps');
  // }
  //
  // shouldComponentUpdate() {
  //   console.log('Inside shouldComponentUpdate');
  // }
  //
  // componentWillUpdate() {
  //   console.log('Inside componentWillUpdate');
  // }
  // componentDidUpdate() {
  //   console.log('Inside componentDidUpdate');
  // }
  // componentWillUnmount() {
  //   console.log('Inside componentWillUnmount');
  // }

  // render is called for every component
  render() {
    console.log('Inside render');
    // Render `User` component for each user object in the users list
    const users = this.props.users.map((user) => {
      return <User key={user.firstName} user={user} />;
    })

    // return should return a single node or object
    return (
      <ul>
        { users }
      </ul>
    );
  }
}

// export UserList as default
export default UserList;
