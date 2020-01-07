import React from 'react';


const InputAppend = ({name,label,type,place,value,onChange,error,btnAppend}) => {
    return ( 
        <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <div className="input-group">
                <input 
                 type={type}
                 className="form-control" 
                 placeholder={place} 
                 id={name}
                 name={name}
                 value={value}
                 onChange={onChange}
                 />
                <div className="input-group-append">
                    <span className="input-group-text" id="quantity-unit">{btnAppend}</span>
                </div>
                </div>
                {error && <div className="mt-1 alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default InputAppend;