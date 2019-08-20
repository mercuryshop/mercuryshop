import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import ProductList from './components/product/ProductList'
import Home from './components/home'

class Routes extends Component {

    render(){
        return(
        <div>
            <Route exact path="/shop" component={ProductList}/>
            <Route exact path="/" component={Home}/>
        </div>
        )
    }
}

export default withRouter(Routes)