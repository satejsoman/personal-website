import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import {ReactComponent as Duodec} from './duodec.svg'
import CV from "../assets/CV.pdf"

function Home(_) {
    return <Container fluid className="fullheight">
        <Row className="fullheight">
        <Col className="landing-left fullheight">
        <div style={{textAlign: 'center'}}>
            <h1 className="vanity">satej soman</h1>
            <Duodec style={{height: "35vh"}}/>
            <p className="polytropos"><i>πολύτροπος</i></p>
            <div className="lhlinkouter">[{" "}<a href="https://twitter.com/satejsoman" className="lhlink">twitter</a>{" "}]</div>
            <div className="lhlinkouter">[{" "}<a href="https://github.com/satejsoman"  className="lhlink">github</a>{" "}]</div>
        </div>
        </Col>
        <Col className = "fullheight">
            <p className="text-center" style={{paddingTop: "20vh"}}><i>navigation</i></p>
        <Link to="/art">
        <Card className = "landingcard">
            <Card.Body>
            <Card.Title>
                /art
            </Card.Title>
                <Card.Text>
                    algorithmic photomanipulation, digital illustration, generative pieces
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
        <Link to="/research">
        <Card className = "landingcard">
            <Card.Body>
            <Card.Title>
                /research
            </Card.Title>
                <Card.Text>
                    research briefs on current and past investigations
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
        <Link to = {CV} target = "_blank" rel="noopener noreferrer">
        <Card className = "landingcard">
            <Card.Body>
            <Card.Title>
                /cv
            </Card.Title>
                <Card.Text>
                    course of life
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
        </Col>
        </Row>
    </Container>
}

export default Home;