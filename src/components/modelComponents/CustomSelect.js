// import React, { useState, useEffect, useRef } from 'react';
// import './CustomSelect.css';
// import { v4 as uuidv4 } from 'uuid';


// const CustomSelect = ({ options, onChange, value }) => {
//     const [selectedOptions, setSelectedOptions] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const selectRef = useRef();

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleOptionSelect = (option) => {
//         const newSelectedOption = { ...option, id: uuidv4() };
//         setSelectedOptions([...selectedOptions, newSelectedOption]);
//         onChange([...selectedOptions, newSelectedOption]);
//     };

//     const handleRemoveOption = (id) => {
//         setSelectedOptions(selectedOptions.filter(option => option.id !== id));
//     };

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const handleClickOutside = (e) => {
//         if (selectRef.current && !selectRef.current.contains(e.target)) {
//             setIsOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     const filteredOptions = options.filter(option =>
//         option.label.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="custom-select" ref={selectRef}>
//             <div className="selected-options" onClick={toggleDropdown}>
//                 {selectedOptions.map(option => (
//                     <div key={option.id} className="selected-option" onClick={(e) => e.stopPropagation()}>
//                         {option.label}
//                         <span className="remove-option" onClick={() => handleRemoveOption(option.id)}>x</span>
//                     </div>
//                 ))}
//             </div>
//             {isOpen && (
//                 <div className="options">
//                     <input
//                         type="text"
//                         className="search-input"
//                         placeholder="Search..."
//                         value={searchTerm}
//                         onChange={handleSearch}
//                     />
//                     {filteredOptions.map(option => (
//                         <div
//                             key={option.value}
//                             className="option"
//                             onClick={() => handleOptionSelect(option)}
//                         >
//                             {option.label}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CustomSelect;


import React, { useState, useEffect, useRef } from 'react';
import './CustomSelect.css';
import { v4 as uuidv4 } from 'uuid';

const CustomSelect = ({ options, onChange, value }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const selectRef = useRef();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        const newSelectedOption = { ...option, id: uuidv4() };
        setSelectedOptions([...selectedOptions, newSelectedOption]);
        onChange([...selectedOptions, newSelectedOption]);
        setSearchTerm(''); // Clear the search box
    };

    const handleRemoveOption = (id) => {
        setSelectedOptions(selectedOptions.filter(option => option.id !== id));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClickOutside = (e) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    const handleKeyDown = (e) => {
        const filteredOptions = options.filter(option =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (e.key === 'Enter' && isOpen && filteredOptions.length > 0) {
            handleOptionSelect(filteredOptions[0]);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, searchTerm, options]);

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="custom-select" ref={selectRef}>
            <div className="selected-options" onClick={toggleDropdown}>
                {selectedOptions.map(option => (
                    <div key={option.id} className="selected-option" onClick={(e) => e.stopPropagation()}>
                        {option.label}
                        <span className="remove-option" onClick={() => handleRemoveOption(option.id)}>x</span>
                    </div>
                ))}
            </div>
            {isOpen && (
                <div className="options">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    {filteredOptions.map((option, index) => (
                        <div
                            key={option.value}
                            className={`option ${index === highlightedIndex ? 'highlighted' : ''} ${value === option.value ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(option)}
                            onMouseEnter={() => setHighlightedIndex(index)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
