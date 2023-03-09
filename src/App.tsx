import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import daisy from "./daisy.jpeg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
//import { QuestionType } from "./interfaces/question";
//import { countShortWords } from "./arrays";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

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
                        <div
                            style={{
                                width: "100%",
                                height: "10%",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <p>Logan Levine</p>
                        <p>Hello World</p>
                        <img
                            src={daisy}
                            alt="A picture of my dog Daisy in her bed."
                        />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "10%",
                                backgroundColor: "red"
                            }}
                        ></div>
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
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
