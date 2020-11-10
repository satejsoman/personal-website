import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import main from "./main.md"
import pubs from "./pubs.md"
import press from "./press.md"
import summary from "./summary.md"
import large_header from "./large_header.png"
import Breadcrumb from "../../commons/Breadcrumb"
import gfm from 'remark-gfm'

class Covid extends React.Component { 
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
        return <ReactMarkdown source={this.state[key]} plugins={[gfm]} allowDangerousHtml/>
    }

    render = () => <div className = "fullwidth landing-right" style = {{height: "100%!important"}}>
    <Jumbotron fluid style = {{width:"100%", height:"30vh", backgroundImage: `url(${large_header})`, backgroundPosition: "top", opacity:0.6}} /> 
    <Container fluid  style={{ paddingLeft: "10vw", paddingRight: "10vw", paddingBottom: "15vh"}}>
    <Breadcrumb crumbs={["home", "research"]}/>
    <h1>Dynamics of Pandemics: Epidemiological Modeling for COVID-19</h1>
    <br/>
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

export default Covid;