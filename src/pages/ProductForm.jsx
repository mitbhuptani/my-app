import React from 'react';
import Joi from 'joi-browser';
import Form from '../components/reusable/form';
import {ProductConsumer} from '../context/context';
import {getProduct,saveProduct} from '../services/productService';

const DATA = {
    product_name: "",
    category: "",
    prize: "",
    quantity: "",
    smallDescription: "",
    breifDescription: "",
  }


class ProductForm extends Form {
    state = { 
         data: {...DATA},
         errors: {}
     }
     schema = {
        product_id:Joi.string(),
        product_name: Joi.string().required().min(5).max(50).label("Product Name"),
        category: Joi.string().required().label("Category"),
        prize: Joi.number().required().min(5).label("Prize"),
        quantity: Joi.number().min(1).required().label("Quantity"),
        smallDescription: Joi.string().min(30).max(220).required().label("Short Description"),
        breifDescription: Joi.string().min(65).max(355).required().label("Breif Description")
    }

    async populateProduct(){
        try{
            const productId = this.props.match.params.id;
            if(productId === 'new') {this.setState({data : {...DATA}}); return;}
            const {data} = await getProduct(productId);
            let productData = data[0];
            this.setState({ data : this.mapToViewModel(productData)});
        }catch(ex){

            if(ex.response && ex.response.status === 404)
            this.props.history.replace("/not-found");
        }
        
    }

    doSubmit = async () => {

        await saveProduct(this.state.data);

        this.props.history.push('/product')
    }


    async componentDidMount(){
        await this.populateProduct();
    }

    mapToViewModel(product){
        return {
            product_id: product.product_id,
            product_name: product.product_name,
            category:product.category,
            prize: product.prize,
            quantity: product.quantity,
            smallDescription: product.smallDescription,
            breifDescription: product.breifDescription
        }
    }

    render() { 
        return (
     <ProductConsumer>
        {value => {
         return (
    <React.Fragment>  
    <div className='container'>
    <div className='container-fluid'>
        <div className='mt-4 '>
        <h2>Product Details Form:</h2>
        <div className='card mb-3'>
            <div className='card-body'>

            <form onSubmit={this.handleSubmit}>
            {this.renderInput("product_name","Product Name","text","Enter Product Name")}
            {this.renderSelect("category","Categroy",value.category)}
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
    }}
  </ProductConsumer>
    );
    }
}
 
export default ProductForm;