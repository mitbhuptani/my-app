import React from 'react';
import Joi from 'joi-browser';
import Form from '../components/reusable/form';

class ProductForm extends Form {
    state = { 
        data: {
            name: "",
            categoryId: "",
            prize: "",
            quantity: "",
            smallDescription: "",
            breifDescription: "",
          },
          categories: [],
          errors: {}
     }
     schema = {
        _id:Joi.string(),
        name: Joi.string().required().min(5).max(50).label("Product Name"),
        categoryId: Joi.string().required().label("Category"),
        prize: Joi.number().required().min(5).label("Prize"),
        quantity: Joi.number().min(1).required().label("Quantity"),
        smallDescription: Joi.string().min(30).max(220).required().label("Short Description"),
        breifDescription: Joi.string().min(65).max(355).required().label("Breif Description")
    }



    render() { 
        return (
    <React.Fragment>  
    <div className='container'>
    <div className='container-fluid'>
        <div className='mt-4 '>
        <h2>Product Details Form:</h2>
        <div className='card mb-3'>
            <div className='card-body'>

            <form onSubmit={this.handleSubmit}>
            {this.renderInput("name","Product Name","text","Enter Product Name")}
            {this.renderSelect("categoryId","Categroy",this.state.categories)}
            {this.renderInput("prize","Prize","number","50.00")}
            {/* {this.renderInputPrepend("prize","Prize","50.00")} */}
            {this.renderInputAppend("quantity","Quantity","Quantity of the product" )}
            {this.renderTextArea("smallDescription","Short Description","Enter a one line description ...")}
            {this.renderTextArea("breifDescription","Breif Description","Enter a brief description ...")}
            <div style={{float:'right'}}>
            {this.renderSubmitButton("Submit")}
            {this.renderResetButton("Cancel")}
            
            </div>
        </form>
        </div>
        <div className='card-footer'></div>
        </div>   
        </div>
    </div> 
    </div>
    </React.Fragment>  
    );
    }
}
 
export default ProductForm;