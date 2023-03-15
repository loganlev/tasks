import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<string>("");

    function reduceAttempts() {
        setAttempts(attempts - 1);
    }

    function addAttempts() {
        if (!isNaN(parseInt(reqAttempts))) {
            setAttempts(parseInt(reqAttempts) + attempts);
        }
    }

    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
            </div>
            <div>Your Current Number Of Attempts - {attempts}</div>
            <br></br>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>
                    How Many Attempts Do You Want to Request?
                </Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setReqAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <br></br>
            <Button onClick={reduceAttempts} disabled={attempts === 0}>
                Use
            </Button>{" "}
            <Button onClick={addAttempts}>Gain</Button>
        </div>
    );
}
