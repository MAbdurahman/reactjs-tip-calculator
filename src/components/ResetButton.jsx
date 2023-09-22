import React from 'react';

export default function ResetButton({onReset}) {

    return (
        <div className="buttonContainer">
            <button className="resetButton" onClick={onReset}>Reset</button>;
        </div>

    );
};