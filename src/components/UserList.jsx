import React, { Component } from "react";

export default class UsersPage extends Component {
  render(){
    const { props: { users } } = this;
    return <div>
     <table>
       <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Company</th>
         <th>Phone number</th>
       </tr>
       {users.map((user) => {
         return <tr>
           <td>{user._id}</td>
           <td>{user.name}</td>
           <td>{user.company}</td>
           <td>{user.phone}</td>
         </tr>
       })}
     </table>
    </div>
  }
}