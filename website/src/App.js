import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container fluid>
    <Row>
    <Col xs={3}>
    <div className="App">
      <header className="App-header">
        <h1>satej soman</h1>
        <p><i>πολύτροπος</i></p>
        <div>
        <a href="https://twitter.com/satejsoman"><code>twitter</code></a>{" "}
        <a href="https://github.com/satejsoman"><code>github</code></a>
        </div>
        </header>
    </div>
    </Col>
    <Col>
    art
    </Col>
    </Row>
    </Container>
  );
}

export default App;
