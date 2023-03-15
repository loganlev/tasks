import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const options2 = [...options];
    const DEFAULT_OPTIONS = options[0];

    const [choice, setChoice] = useState<string>(DEFAULT_OPTIONS);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Multiple Choice Question</h3>
            </div>
            <Form.Group controlId="userChoice">
                <Form.Label>Choose an answer:</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options2.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {choice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
