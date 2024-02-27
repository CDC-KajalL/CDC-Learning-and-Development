import React, { useState } from 'react';
import Btn from './_1_Button';

const Form1 = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [res, setRes] = useState('Results will be displayed over here');
    const handleNum1Change = (event) => {
        setNum1(event.target.value);
    };

    const handleNum2Change = (event) => {
        setNum2(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        console.log("Number 1:", num1);
        console.log("Number 2:", num2);
        if (num1 === num2) {
            setRes("You entered same numbers!")
        } else {
            setRes("You entered different numbers")
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="text-xs">
                    <label>Enter First Number: </label>
                    <div className="w-50">
                        <input
                            type="number"
                            placeholder="Enter Any positive number"
                            value={num1}
                            onChange={handleNum1Change}
                        />
                    </div>
                </div>
                <div className="text-xs">
                    <label>Enter Second Number: </label>
                    <div className="w-50">
                        <input
                            type="number"
                            placeholder="Enter Any positive number"
                            value={num2}
                            onChange={handleNum2Change}
                        />
                    </div><br/>
                </div>
                <p>{res}</p>
                <br />
                <Btn size="sm" type="secondary" onClick={handleSubmit}>Generate</Btn>
                <br/>
            </form>
        </div>
    );
}

export default Form1;

