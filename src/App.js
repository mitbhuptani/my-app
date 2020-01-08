import React from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import Home from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import NotFound from './pages/NotFoundPage';



function App() {
  return (
    <div>
      <React.Fragment>
      <NavBar />
      <SideBar />
      <Switch>
      <Route exact path= '/home' component={Home}/>
      <Route exact path= '/product' component={ProductList}/>
      <Route exact path='/product/new' component={ProductForm} />
      <Route exact path='/product/:id' component={ProductForm} />
      <Route path='/not-found' component={NotFound}/>
      <Redirect exact from='/' to='/home'/>
      <Redirect to='/not-found'/>
      </Switch>
      {/* <Footer /> */}
      </React.Fragment>
    </div>
  );
}

export default App;
