import React from 'react';

export default function BillInput({bill, onSetBill}) {

    return (
        <div className="billInput">
            <label>How much was the bill?
            <input
                className='inputText'
                type="text"
                placeholder="Cost of bill"
                value={bill}
                onChange={e => onSetBill(Number(e.target.value))}
            />
            </label>
        </div>

    );
};