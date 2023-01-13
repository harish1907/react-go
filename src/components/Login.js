import React, {useState} from 'react'
import Input from './Input'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='col-md-6 offset-md-3'>
        <h2>Login</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <Input 
            title="Email Address"
            type="email"
            className="form-control"
            name="email"
            autoComplete="email-new"
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input 
            title="Password Address"
            type="password"
            className="form-control"
            name="password"
            autoComplete="password-new"
            onChange={(event) => setPassword(event.target.value)}
          />    

          <hr />
          <input 
            type="submit" 
            className='btn btn-primary'
            value="Login"
          />
        </form>
    </div>
  )
}
