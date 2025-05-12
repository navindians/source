import React from "react";

class SignUpPage extends React.Component { 
  render(){
    return (
      <div>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" />
        <button type="submit">Sign Up</button>  

      </div>
    );  
}  
} 
export default SignUpPage;