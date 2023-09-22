import React from 'react';

export default function Output({bill, tip}) {

    return (
        <div>
            <h3 className="outputText">
                You pay ${bill + tip} (${bill} + ${tip} tip)
            </h3>
        </div>

    );
};