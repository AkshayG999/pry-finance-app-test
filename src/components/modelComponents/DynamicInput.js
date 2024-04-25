import React, { useState } from 'react';
import Formulas from './Formulas';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';


const DynamicInput = ({ dataList, setDataList }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputType, setInputType] = useState('');
  const [inputs, setInputs] = useState([]);
  // const [dataList, setDataList] = useState([]);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleInputTypeSelect = (type) => {
    setInputs([...inputs, { type, label: '', value: '' }]);
    setShowPopup(false);
  };

  const handleInputChange = (e, index) => {
    console.log(e.target);
    if (e.target.type == "number") {
      let newInputs = [...inputs];
      console.log(newInputs);
      newInputs[index].value = e.target.value;
      newInputs[index].id = index;
      setInputs(newInputs);
      updateDataList(newInputs);
    }
    if (e.target.type == "text") {
      let newInputs = [...inputs];
      console.log(newInputs);
      newInputs[index].label = e.target.value;
      newInputs[index].id = index;
      setInputs(newInputs);
      updateDataList(newInputs);
    } else {
      let newInputs = [...inputs];
      console.log(newInputs);
      newInputs[index].value = e.target.value;
      newInputs[index].id = index;
      setInputs(newInputs);
      updateDataList(newInputs);
    }
  };

  const updateDataList = (newInputs) => {
    const newDataList = newInputs.map(input => ({
      id: input.id,
      dataType: input.type,
      label: input.label,
      value: input.value,
    }));
    console.log("newDataList", newDataList);
    setDataList(newDataList);
  };

  const renderInput = (input, index) => {
    switch (input.type) {
      case 'number':
        return (
          <div key={index} className="input-row">
            <label>Label</label><br />
            <input type="text" value={input.label} onChange={(e) => handleInputChange(e, index)} /><br />
            <label>Number</label><br />
            <input type="number" value={input.value} onChange={(e) => handleInputChange(e, index)} />
            <br />
            <br />

          </div>
        );
      case 'percentage':
        return (
          <div key={index} className="input-row">
            <label>Label</label><br />
            <input type="label" value={input.label} onChange={(e) => handleInputChange(e, index)} /><br />
            <label>Percentage</label><br />
            <input type="number" min="0" max="100" step="1" value={input.value} onChange={(e) => handleInputChange(e, index)} />
            <br />
            <br />

          </div>
        );
      case 'currency':
        return (
          <div key={index} className="input-row">
            <label>Label</label><br />
            <input type="label" value={input.label} onChange={(e) => handleInputChange(e, index)} /><br />
            <label>Currency</label><br />
            <input type="number" pattern="[0-9]*" value={input.value} onChange={(e) => handleInputChange(e, index)} />
            <br />
            <br />

          </div>
        );
      case 'month':
        return (
          <div key={index} className="input-row">
            <label>Label</label><br />
            <input type="text" value={input.label} onChange={(e) => handleInputChange(e, index)} /><br />
            <label>Month</label><br />
            <input type="month" value={input.value} onChange={(e) => handleInputChange(e, index)} />
            <br />
            <br />
          </div>
        );
      case 'list':
        return (
          <div key={index} className="input-row">
            <label>Label</label><br />
            <input type="text" value={input.label} onChange={(e) => handleInputChange(e, index)} /><br />
            <label>List</label><br />
            <input type="text" list={`datalist${index}`} value={input.value} onChange={(e) => handleInputChange(e, index)} />
            <br />
            <br />
          </div>
        );
      case 'import':
        return (
          <div key={index} className="input-row">
            <label>Label</label><br />
            <input type="text" value={input.label} onChange={(e) => handleInputChange(e, index)} /><br />
            <label>Import</label><br />
            <input type="file" onChange={(e) => handleInputChange(e, index)} />
            <br />
            <br />
          </div>
        );
      case 'link':
        return (
          <div key={index} className="input-row">
            <label>Label</label><br />
            <input type="text" value={input.label} onChange={(e) => handleInputChange(e, index)} /><br />
            <label>Link</label><br />
            <input type="url" value={input.value} onChange={(e) => handleInputChange(e, index)} />
            <br />
            <br />
          </div>
        );
      default:
        return null;
    }
  };

  return (

    <div>
      <Dropdown>
        <MenuButton>Add Inputs</MenuButton>
        <Menu>
          <MenuItem onClick={() => handleInputTypeSelect('number')}>Number</MenuItem>
          <MenuItem onClick={() => handleInputTypeSelect('percentage')}>Percentage</MenuItem>
          <MenuItem onClick={() => handleInputTypeSelect('currency')}>Currency</MenuItem>
          {/* <MenuItem onClick={() => handleInputTypeSelect('month')}>Month</MenuItem> */}
          <MenuItem onClick={() => handleInputTypeSelect('list')}>List</MenuItem>
          <MenuItem onClick={() => handleInputTypeSelect('import')}>Import</MenuItem>
          <MenuItem onClick={() => handleInputTypeSelect('link')}>Link</MenuItem>
        </Menu>
      </Dropdown>
      <div>
        {/* <h2>Inputs</h2> */}

        {/* <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab size="small" color="primary" aria-label="add" onClick={handlePopupToggle}>
            <AddIcon />
          </Fab>
        </Box> */}
        {/* <button onClick={handlePopupToggle}>Add Input</button><br /><br /> */}
        {/* {showPopup && (
          <div className="popup">
            <ul>
              <li onClick={() => handleInputTypeSelect('number')}>Number</li>
              <li onClick={() => handleInputTypeSelect('percentage')}>Percentage</li>
              <li onClick={() => handleInputTypeSelect('currency')}>Currency</li>
              <li onClick={() => handleInputTypeSelect('month')}>Month</li>
              <li onClick={() => handleInputTypeSelect('list')}>List</li>
              <li onClick={() => handleInputTypeSelect('import')}>Import</li>
              <li onClick={() => handleInputTypeSelect('link')}>Link</li>
            </ul>
          </div>
        )} */}

        <div>
          {inputs.map((input, index) => (
            <div key={index} className="input-container">
              {renderInput(input, index)}
            </div>
          ))}
        </div>
        {/* <div>
          <h2>Data List</h2>
          <ul>
            {dataList.map((data, index) => (
              <li key={index}>{`dataType: ${data.dataType},Label: ${data.label}, value: ${data.value}`}</li>
            ))}
          </ul>
        </div> */}
      </div>
      {/* <Formulas dataList={dataList} /> */}
    </div>
  );
};

export default DynamicInput;