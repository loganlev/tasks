import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    let correct = "";
    if (answer === expectedAnswer) {
        correct = "✔️";
    } else {
        correct = "❌";
    }

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Check Answer</h3>
            </div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Enter Your Answer Below:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <br></br>
            <div>Is Your Answer Correct? - {correct}</div>
        </div>
    );
}
