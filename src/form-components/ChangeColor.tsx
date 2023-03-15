import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Pink",
        "Brown"
    ];

    const DEFAULT_COLOR = COLORS[0];

    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Change Color</h3>
            </div>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={color}
                    label={color}
                    value={color}
                    checked={false}
                    style={{
                        backgroundColor: color
                    }}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        width: "100%",
                        height: "10%",
                        backgroundColor: color
                    }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
