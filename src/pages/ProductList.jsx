import React, { Component } from 'react';
import { Table,Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import {getProducts} from '../services/productService';

class ProductList extends Component {
    state = { 
        products: [],
        searchQuery: ""
     }
     async componentDidMount(){
        const {data} = await getProducts();
        let {Items: products} = data;
        console.log(data)
        this.setState({products})
    }
    render() { 
        var productCount = 1;
        return ( 
        <React.Fragment>
        <div>This is the ProductList Page</div> 
        <div className='container'>
        <div className='container-fluid'>
        <div className='row float-right'>
            <Link to='/product/new'>
             <Button
             outline color="primary"
             className='mt-2 mb-2 mr-3'
             >
                 Add New Product
             </Button>

             </Link>
        </div>
        <Table hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Product Prize</th>
            <th>Product Quantity</th>
            <th>Product Description</th>
            <th>Product Brief Description</th>
            </tr>
        </thead>
        <tbody>
        {this.state.products.map( (p) => 
            <tr key={p.product_id}>
            <th scope="row">{productCount ++}</th>
            <td>{p.product_name}</td>
            <td>{p.category}</td>
            <td>{p.prize}</td>
            <td>{p.quantity}</td>
            <td>{p.smallDescription}</td>
            <td>{p.breifDescription}</td>
            </tr>
             )}
        </tbody>
        </Table>
        </div>
        </div>    
        </React.Fragment>
            );
    }
}
 
export default ProductList;