import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Emoji = "🐲" | "🎄" | "🕎" | "🦃" | "💖";

    const EMOJI_TRANSITIONS_ABC: Record<Emoji, Emoji> = {
        "🐲": "🎄",
        "🎄": "🕎",
        "🕎": "🦃",
        "🦃": "💖",
        "💖": "🐲"
    };

    const EMOJI_TRANSITIONS_TIME: Record<Emoji, Emoji> = {
        "🐲": "💖",
        "💖": "🦃",
        "🦃": "🕎",
        "🕎": "🎄",
        "🎄": "🐲"
    };

    const [emoji, setEmoji] = useState<Emoji>("🐲");

    function shiftAlphabetically(): void {
        const ABC = EMOJI_TRANSITIONS_ABC[emoji];
        setEmoji(ABC);
    }

    function shiftTime(): void {
        const time = EMOJI_TRANSITIONS_TIME[emoji];
        setEmoji(time);
    }

    return (
        <div>
            Holiday: {emoji}
            <br></br>
            <Button onClick={shiftAlphabetically}>
                Advance by Alphabet
            </Button>{" "}
            <Button onClick={shiftTime}>Advance by Year</Button>
        </div>
    );
}
