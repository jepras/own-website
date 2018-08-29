import React from 'react'
import styles from "../pages/index.module.css"

import { Jumbotron, Button, ListGroup, ListGroupItem } from 'reactstrap'

export default class Frontpage extends React.Component {    
    render() {
        return (
            <div>
                <FrontJumbo />
                <hr className="divider"/>
                <FrontAbout />
                <hr className="divider"/>
                <FrontProjects />
                <hr className="divider"/>
            </div>
        );
    }
}

class FrontJumbo extends React.Component {    
    render() {
        return (
            <div>
                <Jumbotron className="bg-white">
                <div className={styles.textcenter}>
                    <h1 className="display-5">Hello! I am Jeppe.</h1>
                    <p className="lead">I lead projects, consult on marketing efforts and build products</p>
                    <hr />
                    <p className="lead">
                        <Button color="primary">Read more</Button>
                    </p>
                    <small className="text-muted">.. feel free to get in touch!</small>
                </div>
                </Jumbotron>
            </div>
        );
    }
}

class FrontAbout extends React.Component {    
    render() {
        return (
            <div>
                <div>
                    <h3 class="display-6">Me in 10 seconds</h3>
                    <p>Schooled as a marketeer, currently managing projects in Microsoft & building projects as passion side projects</p>
                    <p>Previously I have crowdfunded my way to create sport facilities for a school in Nicaragua, lived as a digital nomad with my data-driven marketing consulting business and done Digital Marketing for a startup.</p>
                    <p>Avid reader, climber, runner & optimist.</p>
                </div>
            </div>
        );
    }
}

class FrontProjects extends React.Component {    
    render() {
        return (
            <div>
                <h3 className={styles.textcenter}>Projects</h3>
                <ListGroup flush>
                    <ListGroupItem tag="a" href="#"><strong>PinoleroGO</strong> - Crowdfunding project for sport facilities</ListGroupItem>
                    <ListGroupItem tag="a" href="#"><strong>Audiorecorder</strong> - Service that records your call for you to hear the quality</ListGroupItem>
                    <ListGroupItem tag="a" href="#"><strong>DataManager</strong> - Visualize all the personal data Facebook has on you</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}