import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import {ReactComponent as Duodec} from './duodec.svg'
import CV from "../assets/CV.pdf"

const SocialLink = (props) => 
    <div className="lhlinkouter">[{" "}<a href={props.to} className="lhlink">{props.name}</a>{" "}]</div>

const NavCard    = (props) =>
<Link to={props.to} target={props.target} rel={props.rel}>
    <Card className = "landingcard">
        <Card.Body>
        <Card.Title>/{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
    </Card>
</Link>

const Home       = (_) =>
<Container fluid className="fullheight">
    <Row className="fullheight">
    <Col className="landing-left fullheight">
    <div style={{textAlign: 'center'}}>
        <h1 className="vanity">satej soman</h1>
        <Duodec style={{height: "35vh"}}/>
        <p className="polytropos"><i>πολύτροπος</i></p>
        <SocialLink to="https://twitter.com/satejsoman" name="twitter"/>
        <SocialLink to="https://github.com/satejsoman"  name="github"/>
    </div>
    </Col>
    <Col className = "landing-right fullheight">
        <p className="text-center" style={{paddingTop: "20vh"}}><i>navigation</i></p>
        <NavCard to="/art"      title="art"      desc="algorithmic photomanipulation, digital illustration, generative pieces"/>
        <NavCard to="/research" title="research" desc="research briefs on current and past investigations"/>
        <NavCard to={CV} target = "_blank" rel="noopener noreferrer" title="cv" desc = "course of life"/>
    </Col>
    </Row>
</Container>

export default Home;