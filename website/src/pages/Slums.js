import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import main from "../assets/slums/main.md"
import pubs from "../assets/slums/pubs.md"
import press from "../assets/slums/press.md"
import summary from "../assets/slums/summary.md"

class Slums extends React.Component { 
    constructor(props) { 
        super(props)
        this.state = {
            main: null,
            pubs: null, 
            press: null,
            summary: null
        }
    }

    componentDidMount() {
        Promise.all([
            fetch(main).then((res) => res.text()).then((text) => {this.setState({main: text})}),
            fetch(pubs).then((res) => res.text()).then((text) => {this.setState({pubs: text})}),
            fetch(press).then((res) => res.text()).then((text) => {this.setState({press: text})}),
            fetch(summary).then((res) => res.text()).then((text) => {this.setState({summary: text})}),
        ])
    }

    content(key) { 
        return <ReactMarkdown source={this.state[key]} allowDangerousHtml/>
    }

    render = () => <div className = "fullheight fullwidth landing-right"><Container fluid className = "fullheight" style={{paddingLeft: "10vw", paddingRight: "10vw", paddingTop: "15vh"}}>
    <h1>Infrastructure Access in Slums</h1>
    {this.content("summary")}
    <Row>
        <Col> <h2>Publications + Talks</h2> {this.content("pubs")} </Col>
        <Col> <h2>Press</h2> {this.content("press")} </Col>
    </Row>
    <hr/>
    {this.content("main")}
    </Container>
    </div>
}

export default Slums;