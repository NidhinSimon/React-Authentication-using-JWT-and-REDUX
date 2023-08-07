import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import {NavLink} from 'react-router-dom'
import { Navbar, Nav, Container,NavDropdown,
  Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { LinkContainer  } from 'react-router-bootstrap';
import { useLogoutMutation } from '../Redux/adminauth';
import { logout } from '../Redux/adminSlice';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'bootstrap';
import {toast} from 'react-toastify'


const Header=styled(AppBar)`
background:#111111
`

const Tabs=styled(NavLink)`
font size:20px;
margin-right:40px;
color:inherit;
text-decoration:none;


`
const NavBar = () => {


  const {adminInfo}= useSelector((state)=>state.admin)


  const dispatch=useDispatch()
  const navigate=useNavigate()
    const [logoutApiCall]=useLogoutMutation()
  console.log('Admin Info:', adminInfo);
  const logoutHandler=async()=>{
   
  try {
    await logoutApiCall().unwrap()
    dispatch(logout())
    toast.success("Logged Out Sucessfully")
    navigate('/login')
  
  } catch (error) {
    (error)
  }
  
  
  }


  return (
   <Header position='static' >
    <Toolbar>
<Tabs >Admin</Tabs>
<Tabs to='/alluser'>All User</Tabs>
<Tabs to='/adduser'>Add User</Tabs>

<Nav className='ms-auto'>
              {adminInfo ? (
                <>
               
               <LinkContainer to='/logout'>
                <Nav.Link  onClick={logoutHandler}>
                  <FaSignOutAlt /> Logout
                </Nav.Link>
                </LinkContainer>
                </>
              ) : (
                <>
           
                <LinkContainer to='/login'>
                <Nav.Link >
                  <FaSignOutAlt /> Login
                </Nav.Link>
                </LinkContainer>
                </>
              )}
             
          
            </Nav>
    </Toolbar>
   </Header>
  )
}

export default NavBar
