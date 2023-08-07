import { Navbar, Nav, Container,NavDropdown,
  Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { LinkContainer  } from 'react-router-bootstrap';
import { useLogoutMutation } from '../Redux/adminauth';
import { logout } from '../Redux/adminSlice';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {

const {adminInfo}= useSelector((state)=>state.admin)


const dispatch=useDispatch()
const navigate=useNavigate()
  const [logoutApiCall]=useLogoutMutation()
console.log('Admin Info:', adminInfo);
const logoutHandler=async()=>{
 
try {
  await logoutApiCall().unwrap()
  dispatch(logout())
  navigate('/')

} catch (error) {
  console.log(error)
}


}

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>MERN App</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
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
                  <FaSignOutAlt /> Sign Up
                </Nav.Link>
                </LinkContainer>
                </>
              )}
             
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default AdminHeader;