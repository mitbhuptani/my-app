import React from 'react';


const TextArea = ({name,label,place,value,onChange,error}) => {
    return (  
        <div className='form-group'>
                <label htmlFor={name}>{label}</label>
                <textarea 
                 className='form-control'
                 name={name}
                 placeholder={place}
                 id={name}
                 value={value}
                 onChange={onChange}>
                </textarea>
                {error && <div className="mt-1 alert alert-danger">{error}</div>}
        </div>
    );
}
 
export default TextArea;