import React from 'react'
import { useState } from 'react'
// import { Form, Button } from 'react-bootstrap'
import { useAuth } from './auth'
import { useNavigate } from 'react-router';
// import { Container } from 'react-bootstrap';

const Login = () => {

    const [user,setUser] = useState('')
    const auth = useAuth ()
    const navigate = useNavigate ()
    
    const handleLogin = () => {
        auth.login(user)
        navigate ('/profile')
    }
  return (
    <div>
      <label>
        Username:{''}
        <input type="text" onChange={(e) => setUser (e.target.value)} />
      </label>
        <button onClick={handleLogin}>Login</button> 
      
    </div>

  //   <Container>
  //       <Form>
  // <Form.Group className="mb-3" controlId="formBasicEmail">
  //   <Form.Label>Email address</Form.Label>
  //   <Form.Control type="text" placeholder="Enter email" onChange={(e) => setUser (e.target.value)} />
  //   <Form.Text className="text-muted">
  //     We'll never share your email with anyone else.
  //   </Form.Text>
  // </Form.Group>

  // <Form.Group className="mb-3" controlId="formBasicPassword">
  //   <Form.Label>Password</Form.Label>
  //   <Form.Control type="password" placeholder="Password" />
  // </Form.Group>
  // <Form.Group className="mb-3" controlId="formBasicCheckbox">
  //   <Form.Check type="checkbox" label="I'm over 18 years old" required="true" />
  // </Form.Group>
  // <Button onClick={handleLogin} variant="primary" type="submit">
  //   Login
  // </Button>
  //       </Form>
  //   </Container>
  )
}

export default Login