import { Card } from 'react-bootstrap';
import './Logout.css'

const Logout = () => {
    
    const handleClick = () => {
        localStorage.clear();
        window.location = '/';
        console.log("Successfully logged out")
    }
    const handleNoClick = () => {
        window.location = '/Home';
    }
    return (
        <div className="logout">
        <Card style={{ width: '18rem', margin: '2rem'}} >
            <center>
            <Card.Body >
                <Card.Text>
                Are you sure you want to logout?
                </Card.Text>
            <button type="button" className="btn btn-dark btn-sm" onClick={handleClick}>Yes</button>
            <button type="button" className="btn btn-dark btn-sm" onClick={handleNoClick}>No</button>
            </Card.Body>
            </center>
        </Card>
        </div>
    );
}

export default Logout;