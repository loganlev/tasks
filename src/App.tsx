import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import daisy from "./daisy.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>This is my header!</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col>
                        <img
                            src={daisy}
                            alt="A picture of my dog Daisy in her bed."
                        />
                        <br></br>
                        <br></br>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <br></br>
                        <br></br>
                        <p>Logan Levine</p>
                        <br></br>
                        <p>Hello World</p>
                        <div
                            style={{
                                width: "50%",
                                height: "100%",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Best Icecream Flavors:
                        <ul>
                            <li>Chocolate</li>
                            <li>Cookies & Cream</li>
                            <li>Birthday Cake</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div
                            style={{
                                width: "50%",
                                height: "100%",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
