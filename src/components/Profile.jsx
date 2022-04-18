import { useNavigate } from 'react-router'
import { useAuth } from './auth'
import { Button } from "react-bootstrap"


const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
  return (
    <div>
        Welcome  {auth.user}
        <Button onClick = {handleLogout}>Logout</Button>
    </div>)
  
}

export default Profile