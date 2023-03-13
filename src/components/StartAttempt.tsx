import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setValue(value - 1);
        setProgress(true);
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    function mulligan(): void {
        setValue(value + 1);
    }

    return (
        <div>
            {"Attemps: " + value}
            <br></br>
            <Button onClick={startQuiz} disabled={progress || value === 0}>
                Start Quiz
            </Button>{" "}
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>{" "}
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
