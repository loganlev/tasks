import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
            </div>
            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="Toggle Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ? (
                <Form.Check
                    type="checkbox"
                    id="student-check"
                    label="Toggle Student"
                    checked={student}
                    onChange={updateStudent}
                />
            ) : (
                <></>
            )}
            {editMode ? (
                <Form.Group controlId="formSetUserName">
                    <Form.Label>Enter Your Name Below:</Form.Label>
                    <Form.Control value={userName} onChange={updateUserName} />
                </Form.Group>
            ) : (
                <></>
            )}

            <div>
                The user is {!editMode ? "not in Edit Mode" : "in Edit Mode"}.
            </div>
            <div>
                {userName} is {student ? "a student" : "not a student"}
            </div>
        </div>
    );
}
