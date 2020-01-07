import React from 'react';


const Input = ({name,label,type,place,value,error,onChange}) => {
    return ( 
        <div className='form-group'>
                <label htmlFor={name}>{label}</label>
                <input 
                 type={type}
                 id={name} 
                 name={name}
                 placeholder={place}
                 value={value}
                 onChange={onChange}
                 className="form-control" 
                  />
                {error && <div className="mt-1 alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;