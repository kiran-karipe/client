import React from 'react';

class User extends React.Component {
  render() {
    return (
      <li>{this.props.user.firstName} {this.props.user.lastName} {this.props.user.dateOfBirth}</li>
    );
  }
}

export default User;
