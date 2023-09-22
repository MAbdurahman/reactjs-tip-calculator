import React, {useState} from 'react';
import BillInput from "../layouts/BillInput";
import PercentageSelect from "../layouts/PercentageSelect";
import Output from "./Output";
import ResetButton from "./ResetButton";

export default function TipCalculator() {
    const [bill, setBill] = useState("");
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);

    const tip = bill * ((percentage1 + percentage2) / 2 / 100);


    function handleReset() {
        setBill("");
        setPercentage1(0);
        setPercentage2(0);
    }

    return (
        <div className="innerWrapper">
            <h1 className="title">Tip Calculator</h1>
            <BillInput bill={bill} onSetBill={setBill} />
            <PercentageSelect percentage={percentage1} onSelect={setPercentage1}>
                How did you like the service?
            </PercentageSelect>
            <PercentageSelect percentage={percentage2} onSelect={setPercentage2}>
                How did your friend like the service?
            </PercentageSelect>
            {bill > 0 && (
                <>
                    <Output bill={bill} tip={tip} />
                    <ResetButton onReset={handleReset} />
                </>
            )}
        </div>

    );
};