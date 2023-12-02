import { useState } from 'react';
import './App.css';

const App = () => {
    const [convert, setConvert] = useState('');
    const [values, setValues] = useState(Array(8).fill(0));

    const handleInputChange = (index) => (event) => {
        const inputValue = event.target.value;
        if (Number.isInteger(Number(inputValue))) {
            const intValue = Number(inputValue);
            if (intValue >= 0 && intValue <= 1) {
                setValues((prevValues) => {
                    const newValues = [...prevValues];
                    newValues[index] = intValue;
                    return newValues;
                });
            }
        }
    };

    return (
        <div className="App">
            <div className="inputs">
                {convert && <h1>Convert: {convert}</h1>}

                {values.map((value, index) => (
                    <input
                        key={index}
                        value={value}
                        onChange={handleInputChange(index)}
                        type="number"
                        min="0"
                        max="1"
                    />
                ))}

                <button
                    onClick={() => setConvert(parseInt(values.join(''), 2))}
                >
                    Convert
                </button>
            </div>
        </div>
    );
};

export default App;
