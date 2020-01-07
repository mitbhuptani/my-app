import React from 'react';

const InputPrepend = ({name,label,type,place,value,onChange,error,btnPrepend}) => {
    return (  
        <div className='form-group'>
                        <label htmlFor={name}>{label}</label>
                        <div className="input-group">
                        <div className="input-group-prepend">
                        <button className="btn btn-outline-primary" type="button">{btnPrepend}</button>
                        </div>
                        <input
                         type={type}
                         className="form-control" 
                         name={name}
                         placeholder={place}
                         id={name}
                         value={value}
                         onChange={onChange}
                         />
                        </div>  
                        {error && <div className="mt-1 alert alert-danger">{error}</div>}
        </div>
);
}
 
export default InputPrepend;
