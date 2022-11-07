import { Navbar, Nav, NavDropdown, Form, Button, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

const GlobalNavbar = ({  currentUser }) => {

    const history = useHistory()

    const handleLogoutClick = () => {
        logout()
        history.push('/')
    }

    const authButton = () => {
        if (currentUser === null) {
            return (
                <ButtonGroup>
                    <Button variant="secondary" as={Link} to="/login">Login</Button>
                    <Button variant="secondary" as={Link} to="/signup">Signup</Button>
                </ButtonGroup>
            )
                
        } else {
            return <Button variant="secondary" onClick={handleLogoutClick}>Logout</Button>
        }
    }

    return (
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="mb-3">
            <Navbar.Brand as={Link} to="/" className="mx-3">BG Logger</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
            </Navbar.Collapse>
            <Form inline className="mx-3">
                {authButton()}
            </Form>
        </Navbar>
    )
}

function mapStateToProps(state) {
    return { currentUser: state.currentUser }
  }

export default connect(mapStateToProps )(GlobalNavbar)