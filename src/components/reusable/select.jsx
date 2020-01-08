import React from 'react';


const Select = ({name,label,options,value,error,onChange}) => {
    return ( 
        <div className='form-group'>
                <label htmlFor={name}>{label}</label>
                <select className="form-control"
                value={value}
                name={name}
                id={name}
                onChange={onChange}
                >
                <option value=""></option>
                {options.map(option => 
                    <option key={option.id} value={option.name}>
                    {option.name}
                    </option>
                )}
                </select>
                {error && <div className="mt-1 alert alert-danger">{error}</div>}
    </div>
     );
}
 
export default Select;