import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavUser=({auth,setAuth})=>{
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Checkpoint-Api</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            {
                auth ? 
                <>
                <Nav.Link as={Link} to ='/listusers'>Users</Nav.Link>
                <Nav.Link onClick={()=>setAuth(false)} >Logout</Nav.Link>
                </>
                :
                <Nav.Link   onClick={()=>setAuth(true)}  >Login</Nav.Link>
            } 
            
            
            
            
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}


export default NavUser