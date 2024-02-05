import React, { useState } from 'react';

const EditableSelect = ({ value, options, onChange,placeholder }) => {
  const [editedValue, setEditedValue] = useState(value);

  const handleInputChange = (e) => {
    setEditedValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        list="options"
        value={editedValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{width:'100%',height:'40px',borderRadius:'10px',paddingLeft:'12px',fontSize:'15px',border:'1px solid #c4c4c4'}}
      />
      <datalist id="options">
        {options.map((option) => (
          <option key={option.value} value={option.label} />
        ))}
      </datalist>
    </div>
  );
};

export default EditableSelect;
