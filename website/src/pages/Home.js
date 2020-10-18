import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import {ReactComponent as Duodec} from './duodec.svg'

function Home(_) {
    return <Container fluid className="fullheight">
        <Row className="fullheight">
        <Col className="landing-left fullheight">
        <div style={{textAlign: 'center'}}>
            <h1 style={{"position" : "relative", paddingTop: "20vh", paddingBottom: "5vh"}}>satej soman</h1>
            <Duodec style={{height: "35vh"}}/>
            <p style={{fontSize: 20, paddingBottom: "5vh"}}><i>πολύτροπος</i></p>
            <div style={{fontSize: 25, paddingBottom: "1vh", color: "#FFD13C", fontFamily:"Fira Code"}}>[{" "}<a href="https://twitter.com/satejsoman" className="lhlink">twitter</a>{" "}]</div>
            <div style={{fontSize: 25, paddingBottom: "1vh", color: "#FFD13C", fontFamily:"Fira Code"}}>[{" "}<a href="https://github.com/satejsoman"  className="lhlink">github</a>{" "}]</div>
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
        <Link to="/cv">
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