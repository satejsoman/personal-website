import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import slums_header from "./slums/small_header.png"
import covid_header from "./covid/small_header.png"

const ResearchNavCard = (props) =>
<Link to={props.to}>
<Card className = "landingcard research-link">
<Card.Img variant="top" src={props.header} />
    <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.desc}</Card.Text>
    </Card.Body>
</Card>
</Link>

function Research(_) {
    return <Container fluid className="fullheight">
        <Row className="fullheight">
        <Col className = "fullheight landing-left">
        <ResearchNavCard to="/research/slums" header={slums_header} title="infrastructure access in slums" desc="measuring informality of urban settlements globally by quantifying access to infrastructure"/>
        </Col>
        <Col className="fullheight landing-right">
        <ResearchNavCard to="/research/covid" header={covid_header} title="dynamics of pandemics" desc={<>real-time Bayesian epidemiology &<br></br>responsive, localized policy-response</>}/>
        </Col>
        </Row>
    </Container>
}
export default Research;