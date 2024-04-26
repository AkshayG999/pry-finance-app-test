import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Output from './Output';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import CustomSelect from './CustomSelect';



const defaultOptions = [
    { id: 10001, dataType: 'sign', value: '+', label: '+' },
    { id: 10002, dataType: 'sign', value: '-', label: '-' },
    { id: 10003, dataType: 'sign', value: '*', label: '*' },
    { id: 10004, dataType: 'sign', value: '/', label: '/' },
    { id: 10007, dataType: 'sign', value: '=', label: '=' },
    { id: 10005, dataType: 'sign', value: '(', label: '(' },
    { id: 10006, dataType: 'sign', value: ')', label: ')' },
];

const Formulas = ({ dataList, formulaFields, setFormulaFields }) => {
    const [options, setOptions] = useState(defaultOptions);
    // const [formulaFields, setFormulaFields] = useState([]); //{ id: 0, label: 'Formula 1', selectedOption: [] }
    const [formulas, setFormulas] = useState([]);


    useEffect(() => {
        if (dataList) {
            // Loop through each item in dataList
            dataList.forEach((newOption) => {
                // Find index of existing option with the same ID
                const index = options.findIndex((existingOption) => existingOption.id === newOption.id);

                if (index !== -1) {
                    // If the ID exists, update the option with new data
                    const updatedOptions = [...options];
                    updatedOptions[index] = {
                        label: newOption.label,
                        value: newOption.value,
                        id: newOption.id // Assuming ID should also be updated
                    };
                    setOptions(updatedOptions);
                } else {
                    // If ID doesn't exist, add the new option
                    setOptions(prevOptions => [...prevOptions, {
                        label: newOption.label,
                        value: newOption.value,
                        id: newOption.id // Assuming ID should be added
                    }]);
                }
            });
        }
    }, [dataList]);




    const handleAddFormula = (e) => {
        // console.log(e.target);
        const newId = formulaFields.length;
        formulaFields.push({ id: newId, label: `Formula ${newId + 1}`, selectedOption: [] });
        setFormulaFields([...formulaFields,]);
    };

    const handleSelectChange = (newValue, id) => {
        const updatedFields = [...formulaFields];
        const index = formulaFields.findIndex((field) => field.id === id);
        updatedFields[index].selectedOption = newValue;
        setFormulaFields(updatedFields);
        console.log({formulaFields})
    };

    return (
        <div>
            <Box> <Button color="neutral" variant="outlined" onClick={handleAddFormula}>Add Formula</Button></Box>
            {formulaFields.map((field) => (
                <div key={field.id}>
                    <label>Formula {field.id + 1}</label>
                    <CustomSelect
                        options={options}
                        onChange={(newValue) => handleSelectChange(newValue, field.id)}
                        value={field.selectedOption}
                    />
                </div>
            ))}
        </div>
    );
};


export default Formulas;