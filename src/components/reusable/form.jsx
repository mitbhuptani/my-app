import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import TextArea from './textarea';
import Select from './select';
import InputPrepend from './inputPrepend';
import InputAppend from './inputAppend';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };
    
    validate = () => {
        const options = {abortEarly: false} ;
        const {error} = Joi.validate(this.state.data, this.schema, options )

        if(!error) return null;

        const errors={}

        for(let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({name, value}) => {
        const obj = {[name] : value}
        const schema = {[name] : this.schema[name]}
        const {error} = Joi.validate(obj, schema)
        return error ? error.details[0].message : null;
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const errors = this.validate();
        console.log(errors);
        this.setState({errors:errors || {}});
        if(errors) return;

        this.doSubmit();
    };

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value
        this.setState({data,errors});
    };
    
    renderSubmitButton(label){
        return(
            <button disabled={this.validate()} type="submit" className="btn btn-primary">
            {label}
            </button>
        );
    }

    renderResetButton(label){
        return(
            <button type="reset" className="btn btn-secondary m-2">
            {label}
            </button>
        );
    }

    renderInput(name, label, type, place){
        const { data, errors } = this.state;

        return( 
            <Input 
            name={name}
            label={label}
            type={type}
            place={place}
            value={data[name]}
            onChange={this.handleChange}
            error={errors[name]}
            />

    );
            
    }

    renderSelect(name, label, options){
        const { data, errors } = this.state;

        return( 
        <Select 
            name={name}
            label={label}
            options={options}
            value={data[name]}
            onChange={this.handleChange}
            error={errors[name]}
        />
    );
            
    }

    renderInputPrepend(name,label,place,type="number"){
        const { data, errors } = this.state;

        return(
            <InputPrepend 
                 name={name}
                 label={label}
                 type={type}
                 place={place}
                 value={data[name]}
                 onChange={this.handleChange}
                 error={errors[name]}
                 btnPrepend={<i className="fa fa-money" aria-hidden="true"></i>}
            />
        );
    }

    renderInputAppend(name,label,place,type="number") {
        const { data, errors } = this.state;

        return(
            <InputAppend 
                 name={name}
                 label={label}   
                 type={type} 
                 place={place}    
                 value={data[name]}    
                 onChange={this.handleChange}  
                 error={errors[name]}
                 btnAppend="unit"
            />
        );
    }

    renderTextArea(name,label,place){
        const { data, errors } = this.state;

        return( 
            <TextArea 
                name={name}
                label={label}
                place={place}
                value={data[name]}
                onChange={this.handleChange}
                error={errors[name]}
            />

    );
    }
    
}
 
export default Form;