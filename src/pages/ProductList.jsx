import React, { Component } from 'react';
import _ from 'lodash';
import { Table,Button } from 'reactstrap';
import Pagination from '../components/common/pagination';
import {paginate} from '../utils/paginate';
import {Link} from 'react-router-dom';
import {getProducts,deleteProduct} from '../services/productService';

class ProductList extends Component {
    state = { 
        products: [],
        searchQuery: "",
        pageSize:4,
        currentPage:1,
        sortColumn: {path : 'product_name', order: 'asc'}
     }
     async componentDidMount(){
        const {data} = await getProducts();
        let {Items: products} = data;
        console.log(data)
        this.setState({products})
    }
    async handleDelete(productId){
        const originalProduct = this.state.products;
        const products = originalProduct.filter(p => p.product_id !== productId)
        this.setState({products : products});
        console.log(productId)
        try{
            await deleteProduct(productId)
         }catch(ex){
             if(ex.response && ex.response.status === 404)
                 console.error('This product has already been deleted');
 
             this.setState({products:originalProduct});
         }
    }
    handlePageChange = page =>{
       this.setState({currentPage:page})
    }
    handleSort = path => {
    const sortColumn = {... this.state.sortColumn };
    if(sortColumn.path === path){
        sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    }else{
        sortColumn.path = path;
        sortColumn.order = 'asc';
    }
    this.setState({sortColumn })
    }
    renderSortIcon = column => {
        if(column !== this.state.sortColumn.path) return null;
        if(this.state.sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }

    render() { 
        const {length : count} = this.state.products;
        const {pageSize,currentPage,sortColumn,products : allProducts} = this.state;

        var productCount = 1;

        const sorted = _.orderBy(allProducts,[sortColumn.path],[sortColumn.order])

        const products = paginate(sorted,currentPage,pageSize);

        return ( 
        <React.Fragment>
        {/* <div>This is the ProductList Page</div>  */}
        <div className='container'>
        <div className='container-fluid'>
        <div className='row float-right'>
            <Link to='/product/new'>
             <Button
             outline color="primary"
             className='mt-4 mb-2 mr-3'
             >
                 Add New Product
             </Button>

             </Link>
        </div>
        <Table hover>
        <thead>
            <tr>
            <th>#</th>
            <th onClick={() => this.handleSort('product_name')}>Product Name {this.renderSortIcon('product_name')}</th>
            <th onClick={() => this.handleSort('category')}>Category {this.renderSortIcon('category')}</th>
            <th onClick={() => this.handleSort('prize')}>Product Prize {this.renderSortIcon('prize')}</th>
            <th onClick={() => this.handleSort('quantity')}> Product Quantity {this.renderSortIcon('quantity')}</th>
            <th>Product Description</th>
            <th>Product Brief Description</th>
            <th></th>
            <th></th>
            </tr>
        </thead>
        <tbody>
        {products.map( (p) => 
            <tr key={p.product_id}>
            <th scope="row">{productCount ++ }</th>
            <td>{p.product_name}</td>
            <td>{p.category}</td>
            <td>{p.prize}</td>
            <td>{p.quantity}</td>
            <td>{p.smallDescription}</td>
            <td>{p.breifDescription}</td>
            <td>
            <Link style={{textDecoration:'none'}} to={`/product/${p.product_id}`}>
            <Button className="ml-2 mr-2 mt-1 d-flex center" color="info">Edit </Button>
            </Link>
            </td>
            <td>
            <Button className="ml-2 mr-2 mt-1 d-flex center" color="danger" onClick={() => this.handleDelete(p.product_id)}>Delete</Button>
            </td> 
            </tr>
             )}
        </tbody>
        </Table>
        </div>
        <Pagination 
         itemsCount={count}
         pageSize={pageSize}
         onPageChange={this.handlePageChange}
         currentPage={currentPage}
        />
        </div>    
        </React.Fragment>
            );
    }
}
 
export default ProductList;