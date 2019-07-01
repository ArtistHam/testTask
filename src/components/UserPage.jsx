import React, { Component } from "react";
import axios from "axios";
import UserList from "./UserList";

export default class UsersPage extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    try {
      axios.get("https://my-json-server.typicode.com/ArtistHam/fakeData/db").then(
        (res) => {
          this.setState({
            users: res.data.users,
          });
        }
      )
    } catch (e) {
      console.log(e);
    }
  }

  render(){
    const { state: { users } } = this;
    return <div>
      {users.length ? <UserList users={users} /> : <h2>Loading...</h2>}
    </div>
  }
}