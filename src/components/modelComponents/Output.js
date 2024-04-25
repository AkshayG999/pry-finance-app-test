import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import { Alert } from '@mui/material';


const Output = ({ formulaFields }) => {
    const [results, setResults] = useState([]);
    const [outputFields, setOutputFields] = useState([]);

    useEffect(() => {
        console.log({ formulaFields })
    }, [formulaFields]);

    const handleAddOutput = (e) => {
        // if (formulaFields.length == 0) {
        //     Alert('Add  atleast one Formula before adding Output');
        // } else {
        const newId = outputFields.length;
        outputFields.push({ id: newId, label: `Output ${newId + 1}`, selectedOption: [] });
        setOutputFields([...outputFields,]);
        // }
    };

    const calculateOutput = (updatedFields) => {
        let result = 0;
        // Iterate over each output field
        // updatedFields.forEach((outputField) => {
        const selectedOptions = updatedFields.selectedOption;
        selectedOptions.forEach((selectedOption) => {
            console.log(selectedOption.value);
            // Parse the value as a decimal number using parseInt with radix 10
            result += selectedOption.value;
        });
        // });
        console.log(result);
        // Return the final result
        return eval(result.slice(1));
    };


    const handleSelectChange = (newValue, id) => {
        const updatedFields = [...outputFields];
        const index = outputFields.findIndex((field) => field.id === id);
        console.log(newValue)

        let result = calculateOutput(newValue);
        console.log({ result });
        newValue.ans = result;
        updatedFields[index].selectedOption = newValue;
        setOutputFields(updatedFields);

    };
    console.log({ outputFields });
    return (
        <div>
            <Box> <Button color="neutral" variant="outlined" onClick={handleAddOutput}>Add Output</Button></Box>
            {outputFields.map((field) => (
                <div key={field.id}>
                    <label>Output {field.id + 1}</label>
                    <Select
                        isClearable={false}
                        // isMulti
                        options={formulaFields}
                        onChange={(newValue) => handleSelectChange(newValue, field.id)}
                        value={field.selectedOption}
                    />
                    <span>result: {field.selectedOption.ans}</span>
                    <br />
                    <br />
                </div>
            ))}
        </div>
    );
};

export default Output;