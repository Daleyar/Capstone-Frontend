import Button from '@restart/ui/esm/Button';
import React, {Component} from 'react';
import { Form, Card } from 'react-bootstrap';
import './Dashboard.css'

class Dashboard extends Component {

	render() {
        return(
            <div className="dashWrapper">
                <div>
                    <Form>
                        <Card style={{ width: '18rem', margin: '2rem'}} >
                            <center>
                            <Card.Body >
                                <Card.Title >Manage Menu</Card.Title>
                                <Card.Text>
                                    Create a menu of a products
                                </Card.Text>
                                <Button className="btn btn-dark" to={"/CreateMenu"}>Manage</Button>
                            </Card.Body>
                            </center>
                        </Card>
                    </Form>
                </div>
            </div>
        );       
	}
}

export default Dashboard;